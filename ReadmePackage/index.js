let path = require('path');
let fse = require('fs-extra');
let marked = require('marked');
let webpack = require('webpack');
let eventproxy = require('eventproxy');
let handlebars = require('handlebars');

const STATIC_SOURCE_PATH = './vendor';
const CURRENT_EXEC_PATH = __dirname;

function package(readmePath, targetPath, callBack) {
	let ep = new eventproxy();
	let reason = '';

	ep.all('webpack_js', () => {
		let webpackCfg = {
			entry: {
				main: path.resolve(CURRENT_EXEC_PATH, STATIC_SOURCE_PATH, './toc/js/ztree_toc.js')
			},
			output: {
				filename: 'ztree_toc.min.js',
				path: path.resolve(CURRENT_EXEC_PATH, STATIC_SOURCE_PATH, './toc/js')
			},
		};
		webpack(webpackCfg, (err, stats) => {
			if (err) {
				reason = '打包核心代码失败';
				callBack(false, reason);
			} else {
				ep.emit('create_destination_dir');
			}
		});
	});

	ep.all('create_destination_dir', () => {
		fse.copy(path.resolve(CURRENT_EXEC_PATH, STATIC_SOURCE_PATH, './toc'), path.resolve(targetPath, './toc'), { overwrite: true }, (err) => {
			if (err) {
				reason = '创建工程目录失败';
				callBack(false, reason);
			} else {
				ep.emit('copy_config_file');
			}
		});
	});

	ep.all('copy_config_file', () => {
		fse.copy(path.resolve(CURRENT_EXEC_PATH, STATIC_SOURCE_PATH, './toc_conf.js'), path.resolve(targetPath, './toc_conf.js'), (err) => {
			if (err) {
				reason = '复制配置文件失败';
				callBack(false, reason);
			} else {
				ep.emit('marked_readme');
			}
		});
	});

	ep.all('marked_readme', () => {
		let templeteFileContent = fse.readFileSync(path.resolve(CURRENT_EXEC_PATH, STATIC_SOURCE_PATH, './templete.html'), 'utf-8');
		let readmeFileContent = fse.readFileSync(path.resolve(readmePath), 'utf-8');

		let templete = handlebars.compile(templeteFileContent);
		let renderer = new marked.Renderer();
		renderer.heading = (text, level) => {
			let regExpResult = text.match(/[0-9]+[\.]*[0-9]*[\.]*[0-9]*[\.]*[0-9]*/g);
			var idName = regExpResult ? regExpResult[0] : '';
			return `<a id="${idName}"></a><h${level}>${text}</h${level}>`;
		}
		marked(readmeFileContent, { headerIds: false }, (err, markdownData) => {
			if (err) {
				reason = '编译markdown失败';
				callBack(false, reason);
			} else {
				let compileData = {
					'title': 'DZSuperFrame中文文档',
					'parse_markdown': markdownData
				}
				let resultBuffer = Buffer.from(templete(compileData));
				ep.emit('save_index', resultBuffer);
			}
		});
	});

	ep.all('save_index', (resultBuffer) => {
		fse.writeFile(path.resolve(targetPath, './index.html'), resultBuffer, (err) => {
			if (err) {
				reason = '存储index.html失败';
				callBack(false, reason);
			} else {
				callBack(true);
			}
		});
	});

	ep.emit('webpack_js');
}

module.exports = package;