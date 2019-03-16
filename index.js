let fs = require('fs');
let path = require('path');
let fse = require('fs-extra');
let eventproxy = require('eventproxy');
let ReadmePackage = require('./ReadmePackage/index.js');

let sourcePath = __dirname;
let readmePath = `${sourcePath}/README.md`;
let readmeTempPath = `${sourcePath}/README_TEMP.md`;
let targetPath = `${sourcePath}/Preview`;

// 打印日志
let log = (type, funcName, str) => {
  let colorCfg = {
    green: [32, 39],
    red: [91, 39],
    yellow: [33, 39],
    magenta: [35, 39]
  };

  let colorLog = (color, content) => { console.log(`\x1B[${colorCfg[color][0]}m${content}\x1B[${colorCfg[color][1]}m`) };

  let logStr = '<' + funcName + '> - <' + str + '>';

  if (type === 's') {
    colorLog('yellow', logStr);
  } else if (type === 'e') {
    colorLog('green', logStr);
  } else if (type === 'w') {
    colorLog('red', logStr);
  } else if (type === 'i') {
    colorLog('magenta', logStr);
  }
}

let funcName = '构建文档';
let ep = new eventproxy();

// 修正文件内容
ep.all('fix_file_content', () => {
  let content = fs.readFileSync(readmePath, 'utf-8');
  content = content.replace(/# 目录[\s\S]+\(\#5\)/g, '');
  fs.writeFileSync(readmeTempPath, content);
  log('e', funcName, '修正README文件成功');
  ep.emit('clear_web_package');
});

// 执行清理
ep.all('clear_web_package', () => {
  try {
    fse.removeSync(targetPath);
    log('e', funcName, '清理旧发布包成功');
    ep.emit('package_web_file');
  } catch (e) {
    log('e', funcName, '清理旧发布包失败');
  }
});

// 进行打包
ep.all('package_web_file', () => {
  ReadmePackage(readmeTempPath, targetPath, (result, err) => {
    if (result) {
      log('e', funcName, '生成新发布包成功');
      ep.emit('clear_temp_file');
    } else {
      log('e', funcName, '生成新发布包失败');
    }
  });
});

// 清理临时文件
ep.all('clear_temp_file', () => {
  try {
    fse.removeSync(readmeTempPath);
    log('e', funcName, '清理临时文件成功');
  } catch (e) {
    log('e', funcName, '清理临时文件失败');
  }
});

// 打印日志
log('s', funcName, `文档README文件为:[${readmePath}]`);
log('s', funcName, `文档发布包路径为:[${targetPath}]`);
// 设置入口
ep.emit('fix_file_content');
