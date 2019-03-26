# [SuperFrame V1.0.7.X](http://og.gl/doc/Release_V1.0.7.0.tar.gz)
# 目录
> ### [0. 写在前面的话](#0)
> ### [1. 设计架构](#1)
> ### [2. 使用](#2)
>> #### [2.1 使用工程包](#2.1)
>> #### [2.2 使用核心模块](#2.2)

> ### [3. API说明](#3)
>> #### [3.1 Core.logCore](#3.1)
>>> ##### [3.1.1 Core.logCore.configure(insId, processIndex, environment, cfg)](#3.1.1)
>>> ##### [3.1.2 Core\[.logCore\].log/HandlerLogger.log/CustomLogger.log(type, funcName, content)](#3.1.2)
>>> ##### [3.1.3 Core.logCore.addLogger(cfg)](#3.1.3)
>>> ##### [3.1.4 Core.logCore.getLogger(loggerId)](#3.1.4)

>> #### [3.2 Core.mongodb](#3.2)
>>> ##### [3.2.1 Core.mongodb.constructor(dataStructs, cfg)](#3.2.1)
>>> ##### [3.2.2 mongodbCore.on(eventName, callBack)](#3.2.2)
>>> ##### [3.2.3 mongodbCore.insert(dataContent, collectionName, callBack)](#3.2.3)
>>> ##### [3.2.4 mongodbCore.remove(factor, collectionName, callBack)](#3.2.4)
>>> ##### [3.2.5 mongodbCore.update(factor, setting, collectionName\[, options\], callBack)](#3.2.5)
>>> ##### [3.2.6 mongodbCore.query(factor, collectionName\[, options\[, projection\]\], callBack)](#3.2.6)

>> #### [3.3 Core.mysql](#3.3)
>>> ##### [3.3.1 Core.mysql.constructor(cfg)](#3.3.1)
>>> ##### [3.3.2 mysqlCore.on(eventName, callBack)](#3.3.2)
>>> ##### [3.3.3 mysqlCore.query(sqlStr, sqlParams, callBack)](#3.3.3)
>>> ##### [3.3.4 mysqlCore.deal(sqlStr, sqlParams, callBack)](#3.3.4)
>>> ##### [3.3.5 mysqlCore.transaction(transactions\[, firstTaskName\[, firstTransObj\]\], callBack)](#3.3.5)

>> #### [3.4 Core.fastDFS](#3.4)
>>> ##### [3.4.1 Core.fastDFS.constructor(cfg)](#3.4.1)
>>> ##### [3.4.2 fastDFSCore.on(eventName, callBack)](#3.4.2)
>>> ##### [3.4.3 fastDFSCore.saveFile(fileBuffer, fileExt\[, groupName\], callBack)](#3.4.3)
>>> ##### [3.4.4 fastDFSCore.removeFile(fileId, callBack)](#3.4.4)
>>> ##### [3.4.5 fastDFSCore.getFile(fileId, writeStream, callBack)](#3.4.5)
>>> ##### [3.4.6 fastDFSCore.getFileInfo(fileId, callBack)](#3.4.6)
>>> ##### [3.4.7 fastDFSCore.getGroupsInfo(callBack)](#3.4.7)
>>> ##### [3.4.8 fastDFSCore.getProxyDomain(index)](#3.4.8)

>> #### [3.5 Core.server](#3.5)
>>> ##### [3.5.1 Core.server.constructor(cfg)](#3.5.1)
>>> ##### [3.5.2 serverCore.bind(services)](#3.5.2)
>>> ##### [3.5.3 serverCore.globalInterceptor](#3.5.3)
>>> ##### [3.5.4 serverCore.globalErrorInterceptor](#3.5.4)
>>> ##### [3.5.5 serverCore.common](#3.5.5)
>>>> ##### [3.5.5.1 serverCore.common.getClientIp(req)](#3.5.5.1)
>>>> ##### [3.5.5.2 serverCore.common.getPort()](#3.5.5.2)
>>>> ##### [3.5.5.3 serverCore.common.getQuery(req)](#3.5.5.3)
>>>> ##### [3.5.5.4 serverCore.common.getBody(req)](#3.5.5.4)
>>>> ##### [3.5.5.5 serverCore.common.getFiles(req)](#3.5.5.5)
>>>> ##### [3.5.5.6 serverCore.common.getFolderInfo(index, callBack)](#3.5.5.6)
>>>> ##### [3.5.5.7 serverCore.common.getFolderInfoSync(index)](#3.5.5.7)
>>>> ##### [3.5.5.8 serverCore.common.saveFile(index, fileName, fileBuffer, callBack)](#3.5.5.8)

>> #### [3.6 Core.handler](#3.6)
>>> ##### [3.6.1 Core.handler.constructor(routePath)](#3.6.1)
>>> ##### [3.6.2 Core.handler.preHandler(req, res, next, handlerLogger)](#3.6.2)
>>> ##### [3.6.3 Core.handler.getHandler(req, res, handlerLogger)](#3.6.3)
>>> ##### [3.6.4 Core.handler.postHandler(req, res, handlerLogger)](#3.6.4)

>> #### [3.7 Core.handlerFuncs](#3.7)
>>> #####  [3.7.1 Core.handlerFuncs.constructor(handlerLogger)](#3.7.1)

>> #### [3.8 Core.message](#3.8)
>>> #####  [3.8.1 Core.message.constructor(cfg)](#3.8.1)
>>> #####  [3.8.2 messageCore.parse(limit, encryptedMsg, callBack)](#3.8.2)
>>> #####  [3.8.3 messageCore.decrypt(encryptedMsg, callBack)](#3.8.3)
>>> #####  [3.8.4 messageCore.buildMessageObj(decryptedMsg, callBack)](#3.8.4)
>>> #####  [3.8.5 messageCore.checkSign(messageObj, callBack)](#3.8.5)
>>> #####  [3.8.6 messageCore.checkTimestamp(messageObj, callBack)](#3.8.6)
>>> #####  [3.8.7 messageCore.checkParams(limit, messageObj, callBack)](#3.8.7)
>>> #####  [3.8.8 messageCore.getHeader(messageObj)](#3.8.8)
>>> #####  [3.8.9 messageCore.getSign(messageObj)](#3.8.9)
>>> #####  [3.8.10 messageCore.getBody(messageObj)](#3.8.10)
>>> #####  [3.8.11 messageCore.getTimestamp(messageObj)](#3.8.11)
>>> #####  [3.8.12 messageCore.buildBackMsg(code, msg, body)](#3.8.12)
>>> #####  [3.8.13 自定义MessageCore](#3.8.13)

>> #### [3.9 Core.control](#3.9)
>>> ##### [3.9.1 Core.control.setInstance(type, instance\[, idKeyName\])] (#3.9.1)
>>> ##### [3.9.2 Core.control.getInstance(type, id)] (#3.9.2)
>>> ##### [3.9.3 Core.control.setObject(id, instance)] (#3.9.3)
>>> ##### [3.9.4 Core.control.getObject(id)] (#3.9.4)
>>> ##### [3.9.5 Core.control.removeObject(id)] (#3.9.5)
>>> ##### [3.9.6 Core.control.emit(eventName\[, ...args\])] (#3.9.6)
>>> ##### [3.9.7 Core.control.on(eventName, callBack)] (#3.9.7)
>>> ##### [3.9.8 Core.control.once(eventName, callBack)] (#3.9.8)
>>> ##### [3.9.9 Core.control.removeEvent([eventName])] (#3.9.9)

>> #### [3.10 Core.safe](#3.10)
>>> ##### [3.10.1 Core.safe.configure(insId, environment, cfg)](#3.10.1)
>>> ##### [3.10.2 Core.safe.signFile(callBack)](#3.10.2)
>>> ##### [3.10.3 Core.safe.verify()](#3.10.3)

>> #### [3.11 Core.cluster](#3.11)
>>> ##### [3.11.1 Core.cluster.index](#3.11.1)
>>> ##### [3.11.2 Core.cluster.getType()](#3.11.2)
>>> ##### [3.11.3 Core.cluster.initWithAppMain(appMain)](#3.11.3)
>>> ##### [3.11.4 Core.cluster.start()](#3.11.4)
>>> ##### [3.11.5 Core.cluster.shutdown()](#3.11.5)
>>> ##### [3.11.6 Core.cluster.setGlobalObject(key, value, callBack)](#3.11.6)
>>> ##### [3.11.7 Core.cluster.getGlobalObject([key], callBack)](#3.11.7)
>>> ##### [3.11.8 Core.cluster.workers](#3.11.8)
>>> ##### [3.11.9 Core.cluster.forkWithWorkerProcessNum(workerProcessNum)](#3.11.9)
>>> ##### [3.11.10 Core.cluster.sendDataToWorker(worker, data, callBack)](#3.11.10)
>>> ##### [3.11.11 Core.cluster.sendDataToMaster(data, callBack)](#3.11.11)

>> #### [3.12 Core.appMain](#3.12)
>>> ##### [3.12.1 AppMain.processIndex](#3.12.1)
>>> ##### [3.12.2 AppMain.onMasterProcessDidInit(masterProcessIndex)](#3.12.2)
>>> ##### [3.12.3 AppMain.onMasterProcessWillReceiveMessage(worker, data)](#3.12.3)
>>> ##### [3.12.4 AppMain.onMasterProcessDidReceiveMessage(worker, data)](#3.12.4)
>>> ##### [3.12.5 AppMain.onMasterProcessDiscardMessage(worker, data)](#3.12.5)
>>> ##### [3.12.6 AppMain.onMasterProcessDidReceiveCustomMessage(worker, data)](#3.12.6)
>>> ##### [3.12.7 AppMain.onWorkerProcessDidInit(workerProcessIndex)](#3.12.7)
>>> ##### [3.12.8 AppMain.onWorkerProcessWillReceiveMessage(data)](#3.12.8)
>>> ##### [3.12.9 AppMain.onWorkerProcessDidReceiveMessage(data)](#3.12.9)
>>> ##### [3.12.10 AppMain.onWorkerProcessDiscardMessage(data)](#3.12.10)
>>> ##### [3.12.11 AppMain.onWorkerProcessDidReceiveCustomMessage(data)](#3.12.11)

>> #### [3.13 Core.checker](#3.13)
>>> ##### [3.13.1 Core.checker.check(limit, value, callBack)](#3.13.1)
>>> ##### [3.13.2 Core.checker.checkWithParamModel(paramModel, value, callBack)](#3.13.2)

>> #### [3.14 Core.crypto](#3.14)
>>> ##### [3.14.1 Core.crypto.aesEncrypt(originMsg, key\[, opt\])](#3.14.1)
>>> ##### [3.14.2 Core.crypto.aesDecrypt(cryptedMsg, key\[, opt\])](#3.14.2)
>>> ##### [3.14.3 Core.crypto.rsaPublicEncrypt(originMsg, publicKey\[, opt\])](#3.14.3)
>>> ##### [3.14.4 Core.crypto.rsaPrivateDecrypt(cryptedMsg, privateKey\[, opt\])](#3.14.4)
>>> ##### [3.14.5 Core.crypto.rsaPrivateEncrypt(originMsg, privateKey\[, opt\])](#3.14.5)
>>> ##### [3.14.6 Core.crypto.rsaPublicDecrypt(cryptedMsg, publicKey\[, opt\])](#3.14.6)
>>> ##### [3.14.7 Core.crypto.rsaPrivateSign(originMsg, privateKey\[, opt\])](#3.14.7)
>>> ##### [3.14.8 Core.crypto.rsaPublicVerify(originMsg, signature, publicKey\[, opt\])](#3.14.8)
>>> ##### [3.14.9 Core.crypto.getRsaKeyPair(bit\[, keyType\])](#3.14.9)
>>> ##### [3.14.10 Core.crypto.base64Encode(originMsg\[, inputEncoding\])](#3.14.10)
>>> ##### [3.14.11 Core.crypto.base64Decode(cryptedMsg\[, outputEncoding\])](#3.14.11)
>>> ##### [3.14.12 Core.crypto.getRandomString(length\[, type\])](#3.14.12)
>>> ##### [3.14.13 Core.crypto.getRandomInteger(rangeStr)](#3.14.13)

>> #### [3.15 Core.time](#3.15)
>>> ##### [3.15.1 Core.time.format(date\[, fmt\])](#3.15.1)
>>> ##### [3.15.2 Core.time.getCurrentTimeString()](#3.15.2)
>>> ##### [3.15.3 Core.time.getTimeInterval(startDate, endDate)](#3.15.3)
>>> ##### [3.15.4 Core.time.getTimestamp()](#3.15.4)

>> #### [3.16 Core.utils](#3.16)
>>> ##### [3.16.1 Core.utils.getType(value)](#3.16.1)
>>> ##### [3.16.2 Core.utils.isNullOrUndefined(value)](#3.16.2)
>>> ##### [3.16.3 Core.utils.mapSort(obj\[, type\])](#3.16.3)
>>> ##### [3.16.4 Core.utils.mapDeepSort(obj\[, type\])](#3.16.4)

>> #### [3.17 Core.crossPlatform](#3.17)
>>> ##### [3.17.1 Core.crossPlatform.PATH\_SEP](#3.17.1)
>>> ##### [3.17.2 Core.crossPlatform.CMD\_RM(sourcePath, callBack)](#3.17.2)
>>> ##### [3.17.3 Core.crossPlatform.CMD\_RM\_SYNC(sourcePath)](#3.17.3)
>>> ##### [3.17.4 Core.crossPlatform.CMD\_CP(sourcePath, targetPath, callBack)](#3.17.4)
>>> ##### [3.17.5 Core.crossPlatform.CMD\_CP\_SYNC(sourcePath, targetPath)](#3.17.5)
>>> ##### [3.17.6 Core.crossPlatform.CMD\_LS(dirPath, callBack)](#3.17.6)
>>> ##### [3.17.7 Core.crossPlatform.CMD\_LS\_SYNC(dirPath)](#3.17.7)

>> #### [3.18 Core.macro](#3.18)
>>> ##### [3.18.1 Core.macro.VALUE](#3.18.1)
>>>> ##### [3.18.1.1 Core.macro.VALUE\_TYPE\_OBJECT](#3.18.1.1)
>>>> ##### [3.18.1.2 Core.macro.VALUE\_TYPE\_ARRAY](#3.18.1.2)
>>>> ##### [3.18.1.3 Core.macro.VALUE\_TYPE\_STRING](#3.18.1.3)
>>>> ##### [3.18.1.4 Core.macro.VALUE\_TYPE\_BOOLEAN](#3.18.1.4)
>>>> ##### [3.18.1.5 Core.macro.VALUE\_TYPE\_NUMBER](#3.18.1.5)
>>>> ##### [3.18.1.6 Core.macro.VALUE\_TYPE\_FUNCTION](#3.18.1.6)
>>>> ##### [3.18.1.7 Core.macro.VALUE\_TYPE\_UNDEFINED](#3.18.1.7)
>>>> ##### [3.18.1.8 Core.macro.VALUE\_TYPE\_NULL](#3.18.1.8)
>>>> ##### [3.18.1.9 Core.macro.VALUE\_TYPE\_ANY](#3.18.1.9)
>>>> ##### [3.18.1.10 Core.macro.VALUE\_MAX](#3.18.1.10)
>>>> ##### [3.18.1.11 Core.macro.VALUE\_MIN](#3.18.1.11)

>>> ##### [3.18.2 Core.macro.CODE\_CHECKER\_RESULT](#3.18.2)
>>>> ##### [3.18.2.1 Core.macro.CODE\_CHECKER\_RESULT\_TYPE\_MISMATCH](#3.18.2.1)
>>>> ##### [3.18.2.2 Core.macro.CODE\_CHECKER\_RESULT\_VALUE\_EMPTY](#3.18.2.2)
>>>> ##### [3.18.2.3 Core.macro.CODE\_CHECKER\_RESULT\_LENGTH\_MISMATCH](#3.18.2.3)
>>>> ##### [3.18.2.4 Core.macro.CODE\_CHECKER\_RESULT\_REGEXP\_MISMATCH](#3.18.2.4)
>>>> ##### [3.18.2.5 Core.macro.CODE\_CHECKER\_RESULT\_VALUE\_MISMATCH](#3.18.2.5)
>>>> ##### [3.18.2.6 Core.macro.CODE\_CHECKER\_RESULT\_CHECKER\_MISMATCH](#3.18.2.6)

>>> ##### [3.18.3 Core.macro.CODE\_TYPE\_NAME](#3.18.3)
>>>> ##### [3.18.3.1 Core.macro.CORE\_TYPE\_NAME\_SERVER](#3.18.3.1)
>>>> ##### [3.18.3.2 Core.macro.CORE\_TYPE\_NAME\_MONGODB](#3.18.3.2)
>>>> ##### [3.18.3.3 Core.macro.CORE\_TYPE\_NAME\_MYSQL](#3.18.3.3)
>>>> ##### [3.18.3.4 Core.macro.CORE\_TYPE\_NAME\_FASTDFS](#3.18.3.4)
>>>> ##### [3.18.3.5 Core.macro.CORE\_TYPE\_NAME\_MESSAGE](#3.18.3.5)
>>>> ##### [3.18.3.6 Core.macro.CORE\_TYPE\_NAME\_OBJECT](#3.18.3.6)

>>> ##### [3.18.4 Core.macro.MONGODB](#3.18.4)
>>>> ##### [3.18.4.1 Core.macro.MONGODB\_EVENT\_NAME\_INIT](#3.18.4.1)
>>>> ##### [3.18.4.2 Core.macro.MONGODB\_DATASTRUCT\_TYPE](#3.18.4.2)
>>>> ##### [3.18.4.3 Core.macro.CODE\_MONGODB\_CONNECT\_SUCCESS](#3.18.4.3)
>>>> ##### [3.18.4.4 Core.macro.CODE\_MONGODB\_CONNECT\_DATABASE\_ERROR](#3.18.4.4)
>>>> ##### [3.18.4.5 Core.macro.CODE\_MONGODB\_CONNECT\_DATABASE\_INVALID](#3.18.4.5)
>>>> ##### [3.18.4.6 Core.macro.CODE\_MONGODB\_EXECUTION\_SUCCESS](#3.18.4.6)
>>>> ##### [3.18.4.7 Core.macro.CODE\_MONGODB\_EXECUTION\_DATA\_NO\_MATCH](#3.18.4.7)
>>>> ##### [3.18.4.8 Core.macro.CODE\_MONGODB\_EXECUTION\_DATA\_NO\_UPDATE](#3.18.4.8)
>>>> ##### [3.18.4.9 Core.macro.CODE\_MONGODB\_EXECUTION\_PRIMARY\_KEY\_EMPTY](#3.18.4.9)
>>>> ##### [3.18.4.10 Core.macro.CODE\_MONGODB\_EXECUTION\_PRIMARY\_KEY\_CONFLICT](#3.18.4.10)
>>>> ##### [3.18.4.11 Core.macro.CODE\_MONGODB\_EXECUTION\_OTHER\_ERROR](#3.18.4.11)
>>>> ##### [3.18.4.12 Core.macro.CODE\_MONGODB\_EXECUTION\_MODEL\_NO\_BUILD](#3.18.4.12)

>>> ##### [3.18.5 Core.macro.MYSQL](#3.18.5)
>>>> ##### [3.18.5.1 Core.macro.MYSQL\_EVENT\_NAME\_INIT](#3.18.5.1)
>>>> ##### [3.18.5.2 Core.macro.CODE\_MYSQL\_CONNECT\_SUCCESS](#3.18.5.2)
>>>> ##### [3.18.5.3 Core.macro.CODE\_MYSQL\_CONNECT\_DATABASE\_ERROR](#3.18.5.3)
>>>> ##### [3.18.5.4 Core.macro.CODE\_MYSQL\_CONNECT\_DATABASE\_INVALID](#3.18.5.4)
>>>> ##### [3.18.5.5 Core.macro.CODE\_MYSQL\_EXECUTION\_SUCCESS](#3.18.5.5)
>>>> ##### [3.18.5.6 Core.macro.CODE\_MYSQL\_EXECUTION\_OTHER\_ERROR](#3.18.5.6)
>>>> ##### [3.18.5.7 Core.macro.CODE\_MYSQL\_EXECUTION\_TRANSACTION\_START\_ERROR](#3.18.5.7)
>>>> ##### [3.18.5.8 Core.macro.CODE\_MYSQL\_EXECUTION\_TRANSACTION\_COMMIT\_ERROR](#3.18.5.8)
>>>> ##### [3.18.5.9 Core.macro.CODE\_MYSQL\_EXECUTION\_TRANSACTION\_CANCEL](#3.18.5.9)
>>>> ##### [3.18.5.10 Core.macro.CODE\_MYSQL\_EXECUTION\_GET\_CONNECTION\_ERROR](#3.18.5.10)
>>>> ##### [3.18.5.11 Core.macro.CODE\_MYSQL\_EXECUTION\_GET\_POOL\_ERROR](#3.18.5.11)

>>> ##### [3.18.6 Core.macro.FASTDFS](#3.18.6)
>>>> ##### [3.18.6.1 Core.macro.FASTDFS\_EVENT\_NAME\_INIT](#3.18.6.1)
>>>> ##### [3.18.6.2 Core.macro.CODE\_FASTDFS\_CONNECT\_SUCCESS](#3.18.6.2)
>>>> ##### [3.18.6.3 Core.macro.CODE\_FASTDFS\_CONNECT\_TRACKER\_ERROR](#3.18.6.3)
>>>> ##### [3.18.6.4 Core.macro.CODE\_FASTDFS\_CONNECT\_TRACKER\_INVALID](#3.18.6.4)
>>>> ##### [3.18.6.5 Core.macro.CODE\_FASTDFS\_EXECUTION\_SUCCESS](#3.18.6.5)
>>>> ##### [3.18.6.6 Core.macro.CODE\_FASTDFS\_EXECUTION\_OTHER\_ERROR](#3.18.6.6)
>>>> ##### [3.18.6.7 Core.macro.CODE\_FASTDFS\_EXECUTION\_GET\_TRACKER\_ERROR](#3.18.6.7)

>>> ##### [3.18.7 Core.macro.SERVER](#3.18.7)
>>>> ##### [3.18.7.1 Core.macro.CODE\_SERVER\_COMMON\_GET\_FOLDER\_INFO\_SUCCESS](#3.18.7.1)
>>>> ##### [3.18.7.2 Core.macro.CODE\_SERVER\_COMMON\_GET\_FOLDER\_INFO\_INDEX\_INVALID](#3.18.7.2)
>>>> ##### [3.18.7.3 Core.macro.CODE\_SERVER\_COMMON\_GET\_FOLDER\_INFO\_MOUNTER\_CLOSE](#3.18.7.3)
>>>> ##### [3.18.7.4 Core.macro.CODE\_SERVER\_COMMON\_SAVE\_SUCCESS](#3.18.7.4)
>>>> ##### [3.18.7.5 Core.macro.CODE\_SERVER\_COMMON\_SAVE\_FAILURE](#3.18.7.5)

>>> ##### [3.18.8 Core.macro.CLUSTER](#3.18.8)
>>>> ##### [3.18.8.1 Core.macro.CLUSTER\_TYPE\_MASTER](#3.18.8.1)
>>>> ##### [3.18.8.2 Core.macro.CLUSTER\_TYPE\_WORKER](#3.18.8.2)
>>>> ##### [3.18.8.3 Core.macro.CLUSTER\_MASTER\_EVENT\_NAME\_INIT](#3.18.8.3)
>>>> ##### [3.18.8.4 Core.macro.CLUSTER\_MASTER\_EVENT\_NAME\_SYNC\_GLOBAL\_OBJECT](#3.18.8.4)
>>>> ##### [3.18.8.5 Core.macro.CLUSTER\_WORKER\_EVENT\_NAME\_INIT](#3.18.8.5)
>>>> ##### [3.18.8.6 Core.macro.CLUSTER\_WORKER\_EVENT\_NAME\_SYNC\_GLOBAL\_OBJECT](#3.18.8.6)
>>>> ##### [3.18.8.7 Core.macro.CLUSTER\_MASTER\_IPC\_TYPE\_GET\_WORKER\_INDEX\_RESULT](#3.18.8.7)
>>>> ##### [3.18.8.8 Core.macro.CLUSTER\_MASTER\_IPC\_TYPE\_SET\_GLOBAL\_OBJECT](#3.18.8.8)
>>>> ##### [3.18.8.9 Core.macro.CLUSTER\_MASTER\_IPC\_TYPE\_SET\_GLOBAL\_OBJECT\_RESULT](#3.18.8.9)
>>>> ##### [3.18.8.10 Core.macro.CLUSTER\_MASTER\_IPC\_TYPE\_GET\_GLOBAL\_OBJECT\_RESULT](#3.18.8.10)
>>>> ##### [3.18.8.11 Core.macro.CLUSTER\_WORKER\_IPC\_TYPE\_GET\_WORKER\_INDEX](#3.18.8.11)
>>>> ##### [3.18.8.12 Core.macro.CLUSTER\_WORKER\_IPC\_TYPE\_SET\_GLOBAL\_OBJECT](#3.18.8.12)
>>>> ##### [3.18.8.13 Core.macro.CLUSTER\_WORKER\_IPC\_TYPE\_GET\_GLOBAL\_OBJECT](#3.18.8.13)
>>>> ##### [3.18.8.14 Core.macro.CLUSTER\_WORKER\_IPC\_TYPE\_SHUTDOWN](#3.18.8.14)

>>> ##### [3.18.9 Core.macro.LOGGER](#3.18.9)
>>>> ##### [3.18.9.1 Core.macro.LOGGER\_NAME\_DEV](#3.18.9.1)
>>>> ##### [3.18.9.2 Core.macro.LOGGER\_NAME\_PROD](#3.18.9.2)
>>>> ##### [3.18.9.3 Core.macro.LOGGER\_NAME\_PROD\_HANDLER](#3.18.9.3)

>>> ##### [3.18.10 Core.macro.COMMON](#3.18.10)
>>>> ##### [3.18.10.1 Core.macro.COMMON\_CURRENT\_PATH](#3.18.10.1)

> ### [4. 其他说明（使用工程包时）](#4)
>> #### [4.1 文件结构](#4.1) 
>> #### [4.2 操作指令](#4.2) 
>>> ##### [4.2.1 npm run build](#4.2.1)
>>> ##### [4.2.2 npm run clear](#4.2.2)

>> #### [4.3 SSL证书](#4.3) 
>> #### [4.4 RSA密钥](#4.4) 
>> #### [4.5 注意事项](#4.5)

> ### [5. 关于作者](#5)

<a id="0"></a>
## 0. 写在前面的话
> **0.00  这可能是地球上最屌的WebService框架,旨在快速搭建大中小型服务端**  
> **0.01  适用于NodeJS平台(node version >= 8.0.0)**  
> **0.02  支持多进程部署**  
> **0.03  支持开启Web服务**  
> **0.04  支持挂载静态目录至Web服务**  
> **0.05  有完善的报文处理体系**  
> **0.06  有完善的工具库(哈希/加密/数学/时间/跨平台)**  
> **0.07  有完善的日志收集能力**  
> **0.08  有数据库集群(Mysql-Cluster,Mongodb-Shard)操作能力**  
> **0.09  有文件系统(FastDFS,磁盘文件系统)操作能力**  
> **0.10  有配套的打包器且支持发布包加签验签**  
> **0.11  其他相关能力(Redis、Kafka)正在研发**  
> **0.12  推荐使用工程包方式引入**  
> **0.13  推荐使用Nginx进行负载均衡**


<a id="1"></a>
## 1. 设计架构
> **只需关注用户模块业务逻辑，通过Core.js调用内核模块提供的API**

<a id="2"></a>
## 2. 使用

<a id="2.1"></a>
### 2.1 使用工程包
> **说明:**  
> **1. 解压工程包并安装依赖库。**
>> 参考指令如下：  
>>  
```
shell > tar -zxvf SuperFrame.tar.gz
shell > cd SuperFrame
shell > npm install
```

> **2. 在任意位置创建一个资源目录并记录该目录的绝对路径。**  
> **3. 使用编辑器打开文件```/SuperFrame/Source/Config/ServerConfig.js```。**
>> **3.1 将步骤2中记录的目录绝对路径作为```SERVER_STATIC_SOURCE_PATH```的值填入。**   

> **4. 进入步骤2中创建的目录。**  
>> **4.1 创建名为sources的子级目录。**  
>> **4.2 创建名为cert的子级目录。**  

> **5. 打开目录```/SuperFrame/Source/Cert/Server```**
>> **5.1 将```Server.crt```复制到步骤4.2中创建的cert目录**  
>> **5.2 将```Server.pem```复制到步骤4.2中创建的cert目录**  

> **6. 运行工程。**   
>> 参考指令如下：  
>>  
```
shell > npm start
```

>> **满足工程运行的资源目录结构为：**  
>>
```
|-- [文件夹名]
    |-- sources
    |-- cert
        |-- Server.crt
        |-- Server.pem
``` 

<a id="2.2"></a>
### 2.2 使用核心模块
> **说明:**  
> **1. 解压工程包并安装依赖库。**  
>> 参考指令如下：  
>>  
```
shell > tar -zxvf SuperFrame.tar.gz
```
  
> **2. 拷贝```/SuperFrame/Core/Core.js```至已有的工程中。**  
> **3. 在宿主工程中配置```/SuperFrame/package.json```中的依赖库。**  

<a id="3"></a>
## 3. API说明
> **<font color="red">框架提供的所有API都将通过Core.js调用，使用下述代码得到Core实例。</font>**
```
var Core = require('Core.js');
```

<a id="3.1"></a>
### 3.1 Core.logCore
**<font color="red">务必在使用其他核心(SafeCore除外)之前配置LogCore,否则可能导致日志丢失</font>**
> **说明:**  
> 0. LogCore用于日志的输入和归档。  
> 1. ```Core.logCore```为全局单例，在框架加载的时候进行自初始化。  
> 2. ```Core.logCore```须使用```Core.logCore.configure()```进行配置后方可正常工作。  
> 3. ```Core.logCore```可以配置全局日志开/关。  
> 4. ```Core.logCore```可以配置核心日志的输出开/关，核心日志将按核心的ID进行归档。  
> 5. ```Core.logCore```支持添加自定义Logger，表现形式与核心日志相同。    
> 6. ```Core[.logCore].log()```、```handlerLogger.log()```、```CustomLogger.log()```表现形式相同。  
> 7. 核心日志指：是通过```Core[.logCore].log()```输出或在ServerCore、MongodbCore、MysqlCore、FastDFSCore执行操作时预置的输出日志。  
> 8. 业务日志指：在ServerCore收到HTTP请求时产生的按每次请求归档的日志。**（将在[3.5 Core.server](#3.5)一节中详解）**  
> 9. 自定义日志指：通过```Core.logCore.addLogger()```和```Core.logCore.getLogger()```创建和取得的自定义logger输出的日志。  
> X. ```Core.log()```为```Core.logCore.log()```的简略形式。  

<a id="3.1.1"></a>
#### 3.1.1 Core.logCore.configure(insId, processIndex, environment, cfg)
> **API说明:**  
> 使用```configure()```传入当前运行实例的ID、环境和配置项对LogCore进行配置，配置后LogCore方可按照预期功能工作。

> **参数列表:**  
> **1. insId\<Integer\>**  
> 当前运行实例的ID，**必传项**，为**整型数字**。会显示在输出的日志中，在生产环境下，实例ID是日志归档路径的一部分。  
> **2. processIndex\<Integer/String\>**  
> 当前运行进程的索引，**必传项**，为**整型数字/字符串**。会显示在输出的日志中，在生产环境下，进程索引是日志归档路径的一部分。  
> **3. environment\<String\>**   
> 当前运行实例的环境，**必传项**，为**特定字符串**，可选值为**['dev','prod']**。dev环境下日志将会直接输出到控制台；prod环境下如果配置正确且有效，业务处理日志将会按照**[源路径/实例ID/进程索引/请求路径/请求方式/请求时刻.log]**归档；核心日志将会按照**[源路径/实例ID/进程索引/核心ID/日期.log]**归档。 
> **4. cfg\<Object\>**  
> LogCore的配置项，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **state\<String\>：**全局的日志状态，**必传项**，为**特定字符串**，可选值为**['open','close']**。为close时不输出任何日志。  
>> **coreLogState\<String\>：**核心日志的状态，**必传项**，为**特定字符串**，可选值为**['open','close']**。为close时不输出核心日志。    
>> **fileSource\<String\>：**日志的源路径，**必传项**，为**字符串**,且**必须以文件系统分隔符(例：/)结尾（V1.0.6.1后的版本不需要此要求）**。  
>> **filePrefix\<String\>：**核心日志和自定义日志的文件前缀，**必传项**，为**字符串**。

> **样例代码**
>
```
let Core = require('Core.js');
// 构建入参
let insId = 0; 												// 实例ID
let environment = 'dev'; 									// 执行环境
let logCoreCfg = {
  state: 'open', 											// 全局日志状态
  coreLogState: 'close',									// 核心日志状态
  fileSource: '/Users/Douzi/Server/DZSuperFrame/log/', 		// 日志文件源路径
  filePrefix: 'DZSuperFrame', 	    						// 核心/自定义日志文件前缀
};
// 执行配置
Core.logCore.configure(insId, environment, logCoreCfg);
```

<a id="3.1.2"></a>
#### 3.1.2 Core[.logCore].log/HandlerLogger.log/CustomLogger.log(type, funcName, content)
> **API说明:**  
> 使用```log()```输出日志。如果在dev环境下，日志输出到控制台；在prod环境下，日志会根据配置被归档至文件中。  
> 1. ```LogCore.log()```是最基础的核心日志输出，在prod环境下的日志会归档到[源目录/Core]文件夹下。  
> 2. ```HandlerLogger.log()```是业务处理日志输出，在prod环境下会按照请求的路径、类型等归档日志。  
> 3. ```CustomLogger.log()```是自定义日志输出，在prod环境下日志会被归档至创建时配置项的位置。
> <font color="red">4. 当进程异常退出时，Crash日志将会通过LogCore.log()进行记录。</font>

> **参数列表:**  
> **1. type\<String\>**  
日志类型，**必传项**，为**特定字符串**，可选值为**['s','e','w','i']**。s为START型日志，dev环境下字体为黄色；e为ENDED型日志，dev环境下字体为绿色；w为WRONG型日志，dev环境下为红色；i为INFOS型日志，dev环境下为紫色。  
> **2. funcName\<String\>**   
> 方法名，**必传项**，为**字符串**。旨为快速从日志中定位代码位置，仅用作显示在输出的日志中。  
> **3. content\<String\>**  
> 日志内容，**必传项**，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.1.1的样例代码
Core.log('s', '核心日志', '这是一条黄色的核心日志');
Core.log('e', '核心日志', '这是一条绿色的核心日志');
Core.log('w', '核心日志', '这是一条红色的核心日志');
Core.log('i', '核心日志', '这是一条紫色的核心日志');
```

<a id="3.1.3"></a>
#### 3.1.3 Core.logCore.addLogger(cfg)
> **API说明:**  
> 使用```addLogger()```添加自定义日志输出器。可以使用**[```Core.logCore.getLogger()```](#3.1.4)**取得自定义日志输出器。  

> **参数列表:**  
> **1. cfg\<Object\>**  
> CustomLogger的配置项，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **state\<String\>：**自定义日志状态，**必传项**，为**特定字符串**，可选值为**['open','close']**。为close时，即使执行log也不输出日志。  
>> **loggerId\<String\>：**自定义日志的ID，**必传项**，为**字符串**。用于获取、标志唯一的日志输出器。  
>> **folderName\<String\>：**自定义日志的归档文件夹名，**必传项**，为**字符串**。自定义日志在prod环境下将被归档至**[源路径/folderName/日期.log]**。  

> **样例代码**
>
```
// 需要执行3.1.1的样例代码
let customLoggerCfg = {
  state: 'open',
  loggerId: 'CustomLogger_01',
  folderName: 'CustomLogger_01'
};
Core.logCore.addLogger(customLoggerCfg);
```

<a id="3.1.4"></a>
#### 3.1.4 Core.logCore.getLogger(loggerId)
> **API说明:**  
> 使用```getLogger()```从日志输出器池中取出特定的日志输出器。  

> **参数列表:**  
> **1. loggerId\<String\>**  
> CustomLogger的ID，**必传项**，为**字符串**。在执行**[```Core.logCore.addLogger()```](#3.1.3)**操作时，配置项中的输出器ID。  

> **样例代码**
>
```
// 需要执行3.1.1和3.1.3的样例代码
let customLogger = Core.logCore.getLogger('CustomLogger_01');
customLogger.log('i', '自定义日志', '这是一条紫色的自定义日志');
```

<a id="3.2"></a>
### 3.2 Core.mongodb
> **说明:**  
> 0. MongodbCore用于对Mongodb数据库进行增删改查操作。  
> 1. ```Core.mongodb()```为MongodbCore的构造函数，需要使用**数据模型**和**配置项**构建实例（使用new关键字），通过实例调用API。  
> 2. MongodbCore实例构建时，会自动被Core托管，可以通过**[```Core.control.getInstance()```](#3.9.2)**进行跨文件获取。      
> 3. MongodbCore实例构建时，会根据配置项中的开关进行初始化，使用```on()```方法注册初始化完成事件的监听器，即可获取初始化结果。  
> 4. MongodbCore支持单机和集群（replica和shard）操作方式，集群模式下负载均衡会根据配置项中设置的权重随机选择主机，务必保证所有主机都可进行读写。  

<a id="3.2.1"></a>
#### 3.2.1 Core.mongodb.constructor(dataStructs, cfg)
> **API说明:**  
> 使用```constructor()```方法，即通过new关键字构造一个MongodbCore实例。该实例将会具有操作指定Mongodb（集群）数据库的能力。

> **参数列表:**  
> **1. dataStructs\<Object\>**  
数据组织结构，**必传项**，为**对象类型**，field格式为：**{集合名称:配置项}**。其中，配置项描述数据在Mongodb中的组织形式，包括主键、数据模型、索引等。  
> **配置项：必填项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **collectionName\<String\>：**集合的名称，**必传项**，为**字符串**。<font color="red">必须和数据组织结构field的key，即Mongodb的集合名称相同</font>。  
>> **primaryKeys\<Object\>：**集合的主键，**非必传项**，为**对象类型**，field格式为：**{字段名:排序方式}**，排序方式1为升序，-1为降序。**主键字段必须在chemeStruct中定义，并且将会自动添加联合唯一索引**。  
>> **schemaStruct\<Object\>：**集合的数据结构，**非必传项**，为**对象类型**，field格式为：**{字段名:值类型}**。在对数据进行操作时，未在数据结构中定义的字段将会被忽略，该项将会被作为mongoose.Schema的构造参数传入，详细说明可参照mongoose文档的Schema和SchemaTypes。  
>> **indexes\<Array\<Object\>\>：**集合的索引，**非必传项**，为**数组类型<对象类型>**，field格式为：**{选项名:选项细节}**。创建索引时不保证成功，尽量避免远程创建索引操作以保证数据库的结构化。  
>>> 可配置选项名有：  
>>> **fileds\<Object\>：**索引的字段及排序，**必传项**，为**对象类型**，field格式为：**{字段:排序方式}**，1表示升序，-1表示降序。  
>>> **options\<Object\>：**，索引的配置，**非必传项**，为**对象类型**。可配置选项参照Node.JS MongoDB Driver的```createIndex()```API介绍。

> **2. cfg\<Object\>**   
> Mongodb的配置项，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **id\<String\>：**实例ID，**必传项**，为**字符串**。用于标识唯一的MongodbCore实例。  
>> **state\<String\>：**实例状态，**必传项**，为**特定字符串**，可选值为**['open','close']**。当状态为close时，不执行实际构建操作。  
>> **databaseName\<String\>：**数据库名，**必传项**，为**字符串**。  
>> **databaseType\<String\>：**Mongodb实例类型，**必传项**，为**特定字符串**，可选值为**['normal','replica']**。当Mongodb为单机或shard集群时，使用normal，此时配置项中的group必填；为replica集群时使用replica，此时配置项中的replica必填。  
>> **group\<Array\<Object\>\>：**Mongodb服务器(组)，**```databaseType === 'normal'```时必传**，为**数组类型<对象类型>**，field格式为：**{选项名:选项细节}**。  
>>> 可配置选项名有：  
>>> **state\<String\>：**服务器的状态，**必传项**，为**特定字符串**，可选值为**['open','close']**。当状态为close时，不使用此服务器。  
>>> **weight\<Integer\>：**负载均衡权重，**非必传项**，为**整型数字**，默认值为**1**。将会根据所有服务器的权重随机选择执行API的服务器。  
>>> **host\<String\>：**服务器地址，**必传项**，为**字符串**。  
>>> **port\<String\>：**服务器端口，**必传项**，为**字符串**。  
>>> **user\<String\>：**登录用户名，**非必传项**，为**字符串**，默认值为**[空字符串]**。  
>>> **password\<String\>：**登录密码，**非必传项**，为**字符串**，默认值为**[空字符串]**。  
>>> **poolSize\<Integer\>：**连接池大小，**非必传项**，为**整型数字**，默认值为**100**。  
>>> **timeout\<Integer\>：**超时时间，**非必传项**，为**整型数字**，默认值为**10000**。单位为**毫秒**。  

>> **replica\<Object\>：**Mongodb副本集信息，**```databaseType === 'replica'```时必传**，为**对象类型**，field格式为：**{选项名:选项细节}**。
>>> 可配置选项名有：  
>>> **replicaName\<String\>：**副本集名称，**必传项**，为**字符串**。在开启Mongodb副本集集群时配置的副本集名称。  
>>> **user\<String\>：**登录用户名，**非必传项**，为**字符串**，默认值为**[空字符串]**。  
>>> **password\<String\>：**登录密码，**非必传项**，为**字符串**，默认值为**[空字符串]**。  
>>> **poolSize\<Integer\>：**连接池大小，**非必传项**，为**整型数字**，默认值为**100**。  
>>> **timeout\<Integer\>：**超时时间，**非必传项**，为**整型数字**，默认值为**10000**。单位为**毫秒**。 
>>> **group\<Array\<Object\>\>**：副本集服务器(组)，**必传项**，为**数组类型<对象类型>**，field格式为：**{选项名:选项细节}**。
>>>> 可配置选项名有：  
>>>> **host\<String\>：**服务器地址，**必传项**，为**字符串**。  
>>>> **port\<String\>：**服务器端口，**必传项**，为**字符串**。  

> **样例代码**
>
```
let Core = require('Core.js');
// 构建数据模型
let dataStructs = {};
// 复杂类型模型
dataStructs['complex'] = {
  collectionName: 'complex', 			// 表名 需与Map的Key相同
  primaryKeys: { 						// 主键(选填) 将会自动根据主键内容创建(联合)唯一索引,1为升序,-1为降序
    DZ_DOC_ID: 1
  },
  schemaStruct: { 						// 数据模型
    DZ_DOC_ID: String,
    DZ_DOC_PROP1: Number,
    DZ_DOC_PROP2: Date,
    DZ_DOC_PROP3: Buffer,
    DZ_DOC_PROP4: Boolean,
    DZ_DOC_PROP5: Core.macro.MONGODB_DATASTRUCT_TYPE.ObjectId,
    DZ_DOC_PROP6: [{
      DZ_DOC_SUBPROP1: String,
    }],
    DZ_DOC_PROP7: {
      DZ_DOC_SUBPROP1: String
    }
  },
  indexes: [{ 							// 索引(选填) 会自动根据配置信息创建索引,1为升序,-1为降序
    fields: { DZ_DOC_PROP1: 1 }, 		// 字段名
    options: { background: true } 		// 索引配置(选填)
  }]
};
// 多主键模型
dataStructs['multi'] = {
  collectionName: 'multi',
  primaryKeys: {
    DZ_DOC_ID1: 1,
    DZ_DOC_ID2: 1
  },
  schemaStruct: {
    DZ_DOC_ID1: String,
    DZ_DOC_ID2: String,
    DZ_DOC_VALUE: String
  },
};
// 无主键模型
dataStructs['none'] = {
  collectionName: 'none',
  schemaStruct: {
    DZ_DOC_ID1: String,
    DZ_DOC_ID2: String,
    DZ_DOC_VALUE: String
  },
};
// 配置项
let mongodbCfg = {
  id: 'Mongodb_01', 					// MongodbId
  state: 'open', 						// 数据库状态 open/close
  databaseName: 'DZTest', 				// 数据库名
  databaseType: 'normal', 				// 库类型 normal/replica
  // 实例(组)信息
  group: [{
    state: 'open', 						// 此实例的可用性 open/close
    weight: 1, 							// 此实例的负载均衡权重(选填)
    host: '127.0.0.1', 					// 连接此实例的地址
    port: '30051', 						// 连接此实例的端口
    user: '', 							// 连接此实例的用户名(选填)
    password: '', 						// 连接此实例的密码(选填)
    poolSize: 100, 						// 此实例的连接池大小(选填)
    timeout: 10000, 					// 此实例的连接超时时间(选填,单位:毫秒)
  }, {
    state: 'open',
    weight: 1,
    host: '127.0.0.1',
    port: '30052',
    user: '',
    password: '',
    poolSize: 100,
    timeout: 10000,
  }, {
    state: 'open',
    weight: 1,
    host: '127.0.0.1',
    port: '30053',
    user: '',
    password: '',
    poolSize: 100,
    timeout: 10000,
  }],
  // 副本集信息
  replica: {
    replicaName: 'replica1', 		 	// 副本集名称
    user: '', 							// 连接此副本集的用户名(选填)
    password: '', 						// 连接此副本集的密码(选填)
    poolSize: 100, 						// 此副本集的连接池大小(选填)
    timeout: 10000, 					// 次副本及的连接超时时间(选填,单位:毫秒)
    group: [{
      host: '127.0.0.1', 				// 副本集实例的地址
      port: '28091', 					// 副本集实例的端口
    }, {
      host: '127.0.0.1',
      port: '28092',
    }, {
      host: '127.0.0.1',
      port: '28093',
    }]
  },
};
let mongodbCore = new Core.mongodb(dataStructs, mongodbCfg);
```

<a id="3.2.2"></a>
#### 3.2.2 mongodbCore.on(eventName, callBack)
> **API说明:**  
> 使用```on()```监听MongodbCore的事件，对生命周期进行HOOK。  
> 目前只开放了MongodbCore初始化结束的事件，可以通过**```Core.macro.MONGODB_EVENT_NAME_INIT```**进行HOOK。若未初始化完成便开始调用数据操作API，可能会导致错误。

> **参数列表:**  
> **1. eventName\<String\>**  
> 事件名，**必传项**，为**字符串**。  
> **2. callBack\<Function\>**  
> 事件回调，**必传项**，为**函数类型**，在事件上抛时执行的回调。
>> 参数列表为：  
>> **initResult\<Object\>：** 初始化结果，为**对象类型**。包含此MongodbCore初始化结果信息。  
>>> 字段说明：  
>>> **result\<Boolean\>：**初始化结果，为**布尔类型**。若为true，说明至少有一台实例连接成功；若为false，则所有实例都连接失败。  
>>> **totalCount\<Integer\>：**实例总数量，为**整型数字**。  
>>> **successCount\<Integer\>：**初始化成功数量，为**整型数字**。  
>>> **initDetail\<Array\<Object\>\>：**初始化详细信息，为**数组类型<对象类型>**。
>>>> 字段说明：   
>>>> **result\<Boolean\>：**该实例的初始化结果，为**布尔类型**。  
>>>> **code\<String\>：**该实例的初始化结果代码，为**特定字符串**，可选值为**['00','11','99']**。其中00表示初始化成功，11表示实例连接错误，99表示实例处于禁用状态。  
>>>> **desc\<String\>：**该实例的初始化结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.2.1的样例代码
mongodbCore.on(Core.macro.MONGODB_EVENT_NAME_INIT, (initResult) => {
// initResult = {
//   result: false,
//   totalCount: 3,
//   successCount: 0,
//   initDetail: [{
//       result: false,
//       code: '11',
//       desc: 'Mongodb实例地址[127.0.0.1],端口[30051]远端数据库错误:[failed to connect to server [127.0.0.1:30051] on first connect [MongoNetworkError: connect ECONNREFUSED 127.0.0.1:30051]]'
//     },
//     {
//       result: false,
//       code: '11',
//       desc: 'Mongodb实例地址[127.0.0.1],端口[30052]远端数据库错误:[failed to connect to server [127.0.0.1:30052] on first connect [MongoNetworkError: connect ECONNREFUSED 127.0.0.1:30052]]'
//     },
//     {
//       result: false,
//       code: '11',
//       desc: 'Mongodb实例地址[127.0.0.1],端口[30053]远端数据库错误:[failed to connect to server [127.0.0.1:30053] on first connect [MongoNetworkError: connect ECONNREFUSED 127.0.0.1:30053]]'
//     }
//   ]
// }
});
```

<a id="3.2.3"></a>
#### 3.2.3 mongodbCore.insert(dataContent, collectionName, callBack)
> **API说明:**  
> 使用```insert()```执行数据添加操作，**```add()```为```insert()```的别名**。  

> **参数列表:**  
> **1. dataContent\<Object\>**  
> 数据内容，**必传项**，为**对象类型**。数据内容需要与dataStruct中配置的数据结构不匹配的部分将会被过滤。  
> **2. collectionName\<String\>**  
> 集合名称，**必传项**，为**字符串**。  
> **3. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：** 执行结果，为**布尔类型**。当```code === '00'```时返回true，其他情况返回false。  
>> **content\<Object\>：** 加库后的数据，为**对象类型**。  
>> **code\<String\>：** 执行结果代码，为**特定字符串**，可选值为**['00','61','62','66','99']**。其中00表示执行成功，61表示主键为空，62表示主键冲突，66表示其他错误，99表示实例尚未初始化。  
>> **desc\<String\>：** 执行结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.2.1的样例代码
mongodbCore.on(Core.macro.MONGODB_EVENT_NAME_INIT, (initResult) => {
  // 构建复杂数据
  let complexData = {
    DZ_DOC_ID: '3',
    DZ_DOC_PROP1: '1',
    DZ_DOC_PROP2: new Date(),
    DZ_DOC_PROP3: Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
    DZ_DOC_PROP4: false,
    DZ_DOC_PROP5: mongodbCore.getObjectId(),
    DZ_DOC_PROP6: [{
      DZ_DOC_SUBPROP1: '111',
    }, {
      DZ_DOC_SUBPROP1: '222',
    }],
    DZ_DOC_PROP7: {
      DZ_DOC_SUBPROP1: '000'
    }
  };
  // 添加数据
  mongodbCore.insert(complexData, 'complex', (result, doc, code, desc) => {
    console.log(result);
    console.log(doc);
    console.log(code);
    console.log(desc);
  });
});
```

<a id="3.2.4"></a>
#### 3.2.4 mongodbCore.remove(factor, collectionName, callBack)
> **API说明:**  
> 使用```remove()```执行数据删除操作，**```delete()```为```remove()```的别名**。  

> **参数列表:**  
> **1. factor\<Object\>**  
> 匹配条件，**必传项**，为**对象类型**。详细说明见Mongodb操作文档。  
> **2. collectionName\<String\>**  
> 集合名称，**必传项**，为**字符串**。  
> **3. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：** 执行结果，为**布尔类型**。当```code === '00'```或```code === '01'```时返回true，其他情况返回false。  
>> **n\<Integer\>：** 影响条数，为**整形数字**。  
>> **code\<String\>：** 执行结果代码，为**特定字符串**，可选值为**['00','01','66','99']**。其中00表示执行成功，01表示无匹配数据，66表示其他错误，99表示实例尚未初始化。  
>> **desc\<String\>：** 执行结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.2.1的样例代码
mongodbCore.on(Core.macro.MONGODB_EVENT_NAME_INIT, (initResult) => {
  // 构建匹配条件
  let factor = {};
  // 删除数据
  mongodbCore.remove(factor, 'complex', (result, n, code, desc) => {
    console.log(result);
    console.log(n);
    console.log(code);
    console.log(desc);
  });
});
```

<a id="3.2.5"></a>
#### 3.2.5 mongodbCore.update(factor, setting, collectionName[, options], callBack)
> **API说明:**  
> 使用update()执行数据更新操作。  

> **参数列表:**  
> **1. factor\<Object\>**  
> 匹配条件，**必传项**，为**对象类型**。详细说明见Mongodb操作文档。  
> **2. setting\<Object\>**  
> 更新策略，**必传项**，为**对象类型**。详细说明见Mongodb操作文档。  
> **3. collectionName\<String\>**  
> 集合名称，**必传项**，为**字符串**。  
> **4. options\<Object\>**  
> 配置选项，**非必传项**，为**对象类型**，field格式为：{选项名:选项细节}。  
>> 可配置选项名有： 
>> **multi\<Boolean\>：**更新多条数据，**非必传项**，为**布尔类型**，默认值**true**。  
>> **upsert\<Boolean\>：**数据项不存在则创建，**非必传项**，为**布尔类型**，默认值**false**。  
>> **strict\<Boolean\>：**强制对应数据模型，**非必传项**，为**布尔类型**，默认值**true**。  
>> **overwrite\<Boolean\>：**更新执行覆盖，**非必传项**，为**布尔类型**，默认值**false**。  

> **3. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：** 执行结果，为**布尔类型**。当```code === '00'```、```code === '01'```或```code === '02'```时返回true，其他情况返回false。  
>> **n\<Integer\>：** 影响条数，为**整型数字**。  
>> **code\<String\>：** 执行结果代码，为**特定字符串**，可选值为**['00','01','02','61','62','66','99']**。其中00表示执行成功，01表示无匹配数据，02表示数据不需要更新，61表示主键为空，62表示主键冲突，66表示其他错误，99表示实例尚未初始化。  
>> **desc\<String\>：** 执行结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.2.1的样例代码
mongodbCore.on(Core.macro.MONGODB_EVENT_NAME_INIT, (initResult) => {
  // 构建匹配条件
  let factor = {
    DZ_DOC_ID: '1'
  };
  // 构建更新策略
  let setting = {
    DZ_DOC_PROP1: '111',
  };
  // 构建配置项
  let options = {
    multi: true,
    upsert: false,
    strict: true,
    overwrite: false
  };
  // 更新数据
  mongodbCore.update(factor, setting, options, 'complex', (result, n, code, desc) => {
    console.log(result);
    console.log(n);
    console.log(code);
    console.log(desc);
  });
});
```

<a id="3.2.6"></a>
#### 3.2.6 mongodbCore.query(factor, collectionName[, options[, projection]], callBack)
> **API说明:**  
> 使用```query()```执行数据查询操作。  

> **参数列表:**  
> **1. factor\<Object\>**  
> 匹配条件，**必传项**，为**对象类型**。详细说明见Mongodb操作文档。  
> **2. collectionName\<String\>**  
> 集合名称，**必传项**，为**字符串**。  
> **3. options\<Object\>**  
> 配置选项，**非必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **sort\<Object\>：**查询结果的排序规则，**非必传项**，为**对象类型**，默认值**{}**，field格式为：**{字段名:排序方式}**。排序方式1为升序，-1为降序。  
>> **limit\<Integer\>：**，查询结果的最大数量，**非必传项**，为**整型数字**，默认值**0**。当值为0是表示不限制结果数量。  
>> **skip\<Integer\>：**查询结果开始位置的偏移量，**非必传项**，为**整型数字**，默认值**0**。  
>> **hint\<Boolean\>：**指定索引，**非必传项**，为**对象类型**，默认值**{}**，filed格式为：**{字段名:排序方式}**。排序方式1为升序，-1为降序。  
>> **lean\<Boolean\>：**精简模式，**非必传项**，为**布尔类型**，默认值**true**。当此项为false时返回Object类型的查询结果，为true时返回mongoose类型的查询结果。  

> **4. projection\<Object\>**  
> 过滤项，**非必传项**，为**对象类型**，field格式为：**{字段名:显隐性}**。其中显隐性0为隐藏，1为显示，不可混用0和1。   
> **5. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：** 执行结果，为**布尔类型**。当```code === '00'```或```code === '01'```时返回true，其他情况返回false。  
>> **docs\<Array\<Object\>\>：** 查询结果，为**数组类型<对象类型>**。  
>> **code\<String\>：** 执行结果代码，为**特定字符串**，可选值为**['00','01','66','99']**。其中00表示执行成功，01表示无匹配数据，66表示其他错误，99表示实例尚未初始化。  
>> **desc\<String\>：** 执行结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.2.1的样例代码
mongodbCore.on(Core.macro.MONGODB_EVENT_NAME_INIT, (initResult) => {
  // 构建匹配条件
  let factor = {
    DZ_DOC_ID: '1'
  };
  // 构建配置项
  let options = {
    sort: {
      DZ_DOC_ID: 1
    },
    limit: 0,
    skip: 0,
    hint: {},
    lean: true
  };
  // 构建过滤项
  let projection = {
    _id: 0,
    DZ_DOC_PROP1: 0,
    DZ_DOC_PROP2: 0,
    DZ_DOC_PROP3: 0,
    DZ_DOC_PROP4: 0,
    DZ_DOC_PROP6: 0,
    __v: 0,
  };
  // 查询数据
  mongodbCore.query(factor, 'complex', options, projection, (result, docs, code, desc) => {
    console.log(result);
    console.log(docs);
    console.log(code);
    console.log(desc);
  });
});
```

<a id="3.3"></a>
### 3.3 Core.mysql
> **说明:**  
> 0. MysqlCore用于对Mysql数据库进行增删改查操作。  
> 1. ```Core.mysql()```为MysqlCore的构造函数，需要使用**配置项**构建实例（使用new关键字），通过实例调用API。  
> 2. MysqlCore实例构建时，会自动被Core托管，可以通过**[```Core.control.getInstance()```](#3.9.2)**进行跨文件获取。      
> 3. MysqlCore实例构建时，会根据配置项中的开关进行初始化，使用```on()```方法注册初始化完成事件的监听器，即可获取初始化结果。  
> 4. MysqlCore支持单机和集群（Mysql-Cluster）操作方式，集群模式下负载均衡会根据配置项中设置的权重随机选择主机，务必保证所有主机都可进行读写。  

<a id="3.3.1"></a>
#### 3.3.1 Core.mysql.constructor(cfg)
> **API说明:**  
> 使用```constructor()```方法，即通过new关键字构造一个MysqlCore实例。该实例将会具有操作指定Mysql（集群）数据库的能力。

> **参数列表:**  
> **1. cfg\<Object\>**  
> Mysql的配置项，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **id\<String\>：**实例ID，**必传项**，为**字符串**。用于标识唯一的MysqlCore实例。  
>> **state\<String\>：**实例状态，**必传项**，为**特定字符串**，可选值为**['open','close']**。当状态为close时，不执行实际构建操作。  
>> **databaseName\<String\>：**Mysql的数据库名，**必传项**，为**字符串**。  
>> **group\<Array\<Object\>\>：**Mysql服务器(组)，**必传项**，为**数组类型<对象类型>**，field格式为：**{选项名:选项细节}**。
>>> 可配置选项名有：  
>>> **state\<String\>：**服务器的状态，**必传项**，为**特定字符串**，可选值为**['open','close']**。当状态为close时，不使用此服务器。  
>>> **weight\<Integer\>：**负载均衡权重，**非必传项**，为**整型数字**，默认值为**1**。将会根据所有服务器的权重随机选择执行API的服务器。  
>>> **host\<String\>：**服务器地址，**必传项**，为**字符串**。  
>>> **port\<String\>：**服务器端口，**必传项**，为**字符串**。  
>>> **user\<String\>：**登录用户名，**非必传项**，为**字符串**，默认值为**root**。  
>>> **password\<String\>：**登录密码，**非必传项**，为**字符串**，默认值为**[空字符串]**。  
>>> **poolSize\<Integer\>：**连接池大小，**非必传项**，为**整型数字**，默认值为**100**。  
>>> **timeout\<Integer\>：**超时时间，**非必传项**，为**整型数字**，默认值为**10000**，单位为**毫秒**。 
>>> **charset\<String\>：**客户端字符集，**非必传项**，为**字符串**，默认值为**utf8mb4\_unicode\_ci**。

> **样例代码**
>
```
let Core = require('Core.js');
let mysqlCfg = {
  id: 'Mysql_01', 							// MysqlId
  state: 'open', 							// 数据库状态  open/close
  databaseName: 'DZTest', 					// 数据库名
  //Mysql服务器(组)信息
  group: [{
    state: 'open', 							// 可用性
    weight: 1, 								// 负载均衡权重(选填)
    host: '127.0.0.1', 						// 数据库地址
    port: '20021', 							// 端口
    poolSize: 100, 							// 连接池大小(选填)
    timeout: 10000, 						// 超时时间(选填)
    user: 'douzi', 							// 登录用户名(选填)
    password: '111111', 					// 登录密码(选填)
    charset: 'utf8mb4_unicode_ci', 			// 字符集(选填)
  }, {
    state: 'open',
    weight: 1,
    host: '127.0.0.1',
    port: '20022',
    poolSize: 100,
    timeout: 10000,
    user: 'douzi',
    password: '111111',
    charset: 'utf8mb4_unicode_ci',
  }, {
    state: 'open',
    weight: 1,
    host: '127.0.0.1',
    port: '20023',
    poolSize: 100,
    timeout: 10000,
    user: 'douzi',
    password: '111111',
    charset: 'utf8mb4_unicode_ci',
  }],
};
let mysqlCore = new Core.mysql(mysqlCfg);
```

<a id="3.3.2"></a>
#### 3.3.2 mysqlCore.on(eventName, callBack)
> **API说明:**  
> 使用on()监听MysqlCore的事件，对生命周期进行HOOK。  
> 目前只开放了MysqlCore初始化结束的事件，可以通过**```Core.macro.MYSQL_EVENT_NAME_INIT```**进行HOOK。若未初始化完成便开始调用数据操作API，可能会导致错误。

> **参数列表:**  
> **1. eventName\<String\>**  
> 事件名，**必传项**，为**字符串**。  
> **2. callBack\<Function\>**  
> 事件回调，**必传项**，为**函数类型**，在事件上抛时执行的回调。
>> 参数列表为：  
>> **initResult\<Object\>：** 初始化结果，为**对象类型**。包含此MysqlCore初始化结果信息。  
>>> 字段说明：  
>>> **result\<Boolean\>：**初始化结果，为**布尔类型**。若为true，说明至少有一台实例连接成功；若为false，则所有实例都连接失败。  
>>> **totalCount\<Integer\>：**实例总数量，为**整型数字**。  
>>> **successCount\<Integer\>：**初始化成功数量，为**整型数字**。  
>>> **initDetail\<Array\<Object\>\>：**初始化详细信息，为**数组类型<对象类型>**。
>>>> 字段说明：   
>>>> **result\<Boolean\>：**该实例的初始化结果，为**布尔类型**。  
>>>> **code\<String\>：**该实例的初始化结果代码，为**特定字符串**，可选值为**['00','11','99']**。其中00表示初始化成功，11表示实例连接错误，99表示实例处于禁用状态。  
>>>> **desc\<String\>：**该实例的初始化结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.3.1的样例代码
mysqlCore.on(Core.macro.MYSQL_EVENT_NAME_INIT, (initResult) => {
// initResult = {
//   result: false,
//   totalCount: 3,
//   successCount: 0,
//   initDetail: [{
//       result: false,
//       code: '11',
//       desc: 'Mysql实例地址[127.0.0.11],端口[20021]远端数据库错误:[connect ETIMEDOUT]'
//     },
//     {
//       result: false,
//       code: '11',
//       desc: 'Mysql实例地址[127.0.0.11],端口[20022]远端数据库错误:[connect ETIMEDOUT]'
//     },
//     {
//       result: false,
//       code: '11',
//       desc: 'Mysql实例地址[127.0.0.11],端口[20023]远端数据库错误:[connect ETIMEDOUT]'
//     }
//   ]
// }
});
```

<a id="3.3.3"></a>
#### 3.3.3 mysqlCore.query(sqlStr, sqlParams, callBack)
> **API说明:**  
> 使用```query()```执行数据查询操作，即select类SQL查询语句。  

> **参数列表:**  
> **1. sqlStr\<String\>**  
> 查询类SQL语句，**必传项**，为**字符串**。为防止SQL注入，可变参数可使用**?**取代，并在sqlParams设置填充的值。  
> **2. sqlParams\<Array\>**  
> SQL替换参数，**必传项**，为**数组类型**。将按顺序填充至sqlStr中**?**出现的位置。  
> **3. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：** 执行结果，为**布尔类型**。当```code === '00'```时返回true，其他情况返回false。  
>> **docs\<Array\<Object\>\>：** 查询结果，为**数组类型<对象类型>**。  
>> **code\<String\>：** 执行结果代码，为**特定字符串**，可选值为**['00','66','88','99']**。其中00表示执行成功，66表示其他错误，88表示获取连接失败，99表示实例尚未初始化。  
>> **desc\<String\>：** 执行结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.3.1的样例代码
mysqlCore.on(Core.macro.MYSQL_EVENT_NAME_INIT, (initResult) => {
  let querySqlStr = 'select * from test';
  let querySqlParams = [];
  mysqlCore.query(querySqlStr, querySqlParams, (result, docs, code, desc) => {
    console.log(result);
    console.log(docs);
    console.log(code);
    console.log(desc);
  });
});
```

<a id="3.3.4"></a>
#### 3.3.4 mysqlCore.deal(sqlStr, sqlParams, callBack)
> **API说明:**  
> 使用```deal()```执行非查询类数据操作，即非select类SQL查询语句。  

> **参数列表:**  
> **1. sqlStr\<String\>**  
> 非查询类SQL语句，**必传项**，为**字符串**。为防止SQL注入，可变参数可使用**?**取代，并在sqlParams设置填充的值。  
> **2. sqlParams\<Array\>**  
> SQL替换参数，**必传项**，为**数组类型**。将按顺序填充至sqlStr中**?**出现的位置。  
> **3. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：** 执行结果，为**布尔类型**。当```code === '00'```时返回true，其他情况返回false。  
>> **n\<Integer\>：** 影响条数，为**整型数字**。  
>> **code\<String\>：** 执行结果代码，为**特定字符串**，可选值为**['00','66','88','99']**。其中00表示执行成功，66表示其他错误，88表示获取连接失败，99表示实例尚未初始化。  
>> **desc\<String\>：** 执行结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.3.1的样例代码
mysqlCore.on(Core.macro.MYSQL_EVENT_NAME_INIT, (initResult) => {
  // 添加数据
  let insertSqlStr = 'insert into test values(?, ?, ?)';
  let insertSqlParams = ['1', '1', '11'];
  mysqlCore.deal(insertSqlStr, insertSqlParams, (result, n, code, desc) => {
    console.log(result);
    console.log(n);
    console.log(code);
    console.log(desc);
  });
  // 删除数据
  let removeSqlStr = 'delete from test where name1 = ?';
  let removeSqlParams = ['1'];
  mysqlCore.deal(removeSqlStr, removeSqlParams, (result, n, code, desc) => {
    console.log(result);
    console.log(n);
    console.log(code);
    console.log(desc);
  });
  // 更新数据
  let updateSqlStr = 'update test set value1 = ? where name1 = ?';
  let updateSqlParams = ['15', '1'];
  mysqlCore.deal(updateSqlStr, updateSqlParams, (result, n, code, desc) => {
    console.log(result);
    console.log(n);
    console.log(code);
    console.log(desc);
  });
});
```

<a id="3.3.5"></a>
#### 3.3.5 mysqlCore.transaction(transactions[, firstTaskName[, firstTransObj]], callBack)
> **API说明:**  
> 使用```transaction()```执行事务操作。
  
> **参数列表:**  
> **1. transactions\<Function/Object\>**  
> 事务（组），**必传项**，为**函数类型**或**对象类型**。若传入函数类型，则表示使用单事务方式；若传入对象类型，则表示使用事务组方式，**此时必须传入firstTaskName来指定事务入口**，field格式为：**{事务名称:事务逻辑}**，事务逻辑为**函数类型**。  
> <font color="red">PS：**可以将单事务方式看做事务组只有一个事务逻辑时的特殊情况，此时不用设置事务名称，直接传入事务逻辑，可以结合eventproxy做流程控制**。</font>
>> 事务逻辑的参数列表为：  
>> **transObj\<Object\>：**自定义传递参数，在事务组方式下，事务入口中的transObj为执行```transaction()```时传入的firstTransObj，其他事务逻辑中的transObj为执行```next()```分发时传入的自定义参数；在单事务方式下，transObj为执行```transaction()```时传入的firstTransObj。  
>> **th\<Object\>：**事务操作器，提供**```th.query()```**和**```th.deal()```**进行数据库操作，使用方法及参数同[**```mysqlCore.deal()```**](#3.3.4)和[**```mysqlCore.query()```**](#3.3.3)一致。  
>> **next\<Function\>：**事务分发器，有三种情况，当执行**```next()```**时表示提交事务；当执行**```next(false)```**时表示取消事务并回滚；当执行**```next(true, nextTaskName, transObj)```**时执行事务名为nextTaskName的事务，并传入transObj。  

> **2. firstTaskName\<String\>**  
> 入口事务名，**非必传项**，为**字符串**。当使用事务组方式时必传。  
> **3. firstTransObj\<Object\>**  
> 入口传递参数，**非必传项**，为**对象类型**。**在使用单事务方式时，若要设置transObj，firstTransObj传入任意值即可**。  
> **4. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：** 执行结果，为**布尔类型**。当```code === '00'```时返回true，其他情况返回false。  
>> **infos\<Integer\>：** 执行信息，为**对象类型**。  
>> **code\<String\>：** 执行结果代码，为**特定字符串**，可选值为**['00','67','68','69','88','99']**。其中00表示执行成功，67表示开启事务失败，68表示提交事务失败，69表示主动事务取消，88表示获取连接失败，99表示实例尚未初始化。  
>> **desc\<String\>：** 执行结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.3.1的样例代码
// 且数据库test表中需要有一条name1='1'，name2='1'，value='10'的数据项。
let eventproxy = require('eventproxy'); // 需要安装eventproxy依赖
mysqlCore.on(Core.macro.MYSQL_EVENT_NAME_INIT, (initResult) => {
  // 构建事务组
  let ts1 = {
    // 事务1
    task1(transObj, th, next) {
      let sqlStr = 'select * from test where name1 = ? AND name2 = ? for update';
      let sqlParams = [transObj.name1, transObj.name2];
      th.query(sqlStr, sqlParams, (result, docs, code, desc) => {
        if (result) {
          let value = parseInt(docs[0].value1);
          if (value === 0) {
            next(false);
          } else {
            transObj['newValue'] = value - 1;
            next(true, 'task2', transObj);
          }
        } else {
          next(false);
        }
      });
    },
    // 事务2 
    task2(transObj, th, next) {
      let sqlStr = 'update test set value1 = ? where name1 = ? AND name2 = ?';
      let sqlParams = [transObj.newValue, transObj.name1, transObj.name2];
      th.deal(sqlStr, sqlParams, (result, n, code, desc) => {
        if (result) {
          next();
        } else {
          next(false);
        }
      });
    },
  };
  // 构建单事务
  let ts2 = (transObj, th, next) => {
    let sqlStr = '';
    let sqlParams = '';
    // 使用eventproxy进行流程控制
    let ep = new eventproxy();
    // 事务1
    ep.all('task1', () => {
      sqlStr = 'select * from test where name1 = ? AND name2 = ? for update';
      sqlParams = [transObj.name1, transObj.name2];
      th.query(sqlStr, sqlParams, (result, docs, code, desc) => {
        if (result) {
          let value = parseInt(docs[0].value1);
          if (value === 0) {
            next(false);
          } else {
            transObj['newValue'] = value - 1;
            ep.emit('task2');
          }
        } else {
          next(false);
        }
      });
    });
    // 事务2
    ep.all('task2', () => {
      let sqlStr = 'update test set value1 = ? where name1 = ? AND name2 = ?';
      let sqlParams = [transObj.newValue, transObj.name1, transObj.name2];
      th.deal(sqlStr, sqlParams, (result, n, code, desc) => {
        if (result) {
          next();
        } else {
          next(false);
        }
      });
    });
    // 设置入口
    ep.emit('task1');
  };
  // 构建传递参数
  let transObj = {
    name1: '1',
    name2: '1',
  };
  // 执行事务组型事务
  mysqlCore.transaction(ts1, 'task1', transObj, (result, info, code, desc) => {
    console.log(result);
    console.log(info);
    console.log(code);
    console.log(desc);
  });
  // 执行单事务型事务 若设置transObj,firstTaskName项可以传入任意值
  mysqlCore.transaction(ts2, null, transObj, (result, info, code, desc) => {
    console.log(result);
    console.log(info);
    console.log(code);
    console.log(desc);
  });
});
```

<a id="3.4"></a>
### 3.4 Core.fastDFS
> **说明:**  
> 0. FastDFSCore用于对FastDFS文件系统进行操作。
> 1. ```Core.fastDFS()```为FastDFSCore的构造函数，需要使用**配置项**构建实例（使用new关键字），通过实例调用API。  
> 2. FastDFSCore实例构建时，会自动被Core托管，可以通过**[```Core.control.getInstance()```](#3.9.2)**进行跨文件获取。      
> 3. FastDFSCore实例构建时，会根据配置项中的开关进行初始化，使用```on()```方法注册初始化完成事件的监听器，即可获取初始化结果。  
> 4. FastDFSCore将根据配置项中设置的服务器权重进行负载均衡。

<a id="3.4.1"></a>
#### 3.4.1 Core.fastDFS.constructor(cfg)
> **API说明:**  
> 使用```constructor()```方法，即通过new关键字构造一个FastDFSCore实例。该实例将会具有操作指定FastDFS分布式文件系统的能力。

> **参数列表:**  
> **1. cfg\<Object\>**  
> fastDFS的配置项，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **id\<String\>：**实例ID，**必传项**，为**字符串**。用于标识唯一的FastDFSCore实例。  
>> **state\<String\>：**实例状态，**必传项**，为**特定字符串**，可选值为**['open','close']**。当状态为close时，不执行实际构建操作。  
>> **defaultExt\<String\>：**默认文件拓展名，**非必传项**，为**字符串**，默认值为**'json'**。例如拓展名为.json，可以传入```'json'```或```'.json'```。  
>> **trackers\<Array\<Object\>\>：**FastDFS-Tracker服务器(组)，**必传项**，为**数组类型<对象类型>**，field格式为：**{选项名:选项细节}**。
>>> 可配置选项名有：  
>>> **state\<String\>：**服务器的状态，**必传项**，为**特定字符串**，可选值为**['open','close']**。当状态为close时，不使用此服务器。  
>>> **weight\<Integer\>：**负载均衡权重，**非必传项**，为**整型数字**，默认值为**1**。将会根据所有服务器的权重随机选择执行API的服务器。  
>>> **host\<String\>：**服务器地址，**必传项**，为**字符串**。  
>>> **port\<String\>：**服务器端口，**必传项**，为**字符串**。   
>>> **timeout\<Integer\>：**超时时间，**非必传项**，为**整型数字**，默认值为**10000**，单位为**毫秒**。  

>> **proxys\<Array\<Object\>\>：**FastDFS访问服务信息，**必传项**，为**数组类型<对象类型>**，field格式为：**{选项名:选项细节}**。为可以访问FastDFS文件的服务信息，一般Tracker服务器中会通过nginx反向代理至Storager服务器。
>>> 可配置选项名有：  
>>> **protocol\<String\>：**协议类型，**非必传项**，为**特定字符串**，可选值为**['http','https']**。若此项不指定，则会根据服务端口自动推算协议类型；若指定此项，则不根据服务端口推算，直接拼接在地址前。  
>>> **host\<String\>：**服务地址，**必传项**，为**字符串**。   
>>> **port\<Integer\>：**服务端口，**必传项**，为**字符串**。在不指定协议类型的情况下，当服务端口为80，则推算为HTTP协议；服务端口为443则推算为HTTPS协议。  

> **样例代码**
>
```
let Core = require('Core.js');
let fastDFSCfg = {
  id: 'FastDFS_01',					// FastDFSId
  state: 'open', 					// FastDFS状态
  defaultExt: 'json', 				// 默认文件名(选填)
  // Tracker服务器组
  trackers: [{
    state: 'open', 					// 可用性
    weight: 1, 						// 负载均衡权重(选填)
    host: '192.168.8.160', 			// Tracker地址
    port: '22122', 					// Tracker端口
    timeout: 10000 					// 超时时间(选填)
  }, {
    state: 'open',
    weight: 1,
    host: '192.168.8.161',
    port: '22122',
    timeout: 10000
  }],
  // 文件服务信息
  proxys: [{
    protocol: 'http',				// 协议类型(选填)
    host: '192.168.8.160',			// 服务地址
    port: '443'						// 服务端口
  }, {
    host: '192.168.8.161',
    port: '80'
  }],
};
let fastDFSCore = new Core.fastDFS(fastDFSCfg);
```

<a id="3.4.2"></a>
#### 3.4.2 fastDFSCore.on(eventName, callBack)
> **API说明:**  
> 使用on()监听FastDFSCore的事件，对生命周期进行HOOK。  
> 目前只开放了FastDFSCore初始化结束的事件，可以通过**```Core.macro.FASTDFS_EVENT_NAME_INIT```**进行HOOK。若未初始化完成便开始调用数据操作API，可能会导致错误。

> **参数列表:**  
> **1. eventName\<String\>**  
> 事件名，**必传项**，为**字符串**。  
> **2. callBack\<Function\>**  
> 事件回调，**必传项**，为**函数类型**，在事件上抛时执行的回调。
>> 参数列表为：  
>> **initResult\<Object\>：** 初始化结果，为**对象类型**。包含此FastDFSCore初始化结果信息。  
>>> 字段说明：  
>>> **result\<Boolean\>：**初始化结果，为**布尔类型**。若为true，说明至少有一台实例连接成功；若为false，则所有实例都连接失败。  
>>> **totalCount\<Integer\>：**实例总数量，为**整型数字**。  
>>> **successCount\<Integer\>：**初始化成功数量，为**整型数字**。  
>>> **initDetail\<Array\<Object\>\>：**初始化详细信息，为**数组类型<对象类型>**。
>>>> 字段说明：   
>>>> **result\<Boolean\>：**该实例的初始化结果，为**布尔类型**。  
>>>> **code\<String\>：**该实例的初始化结果代码，为**特定字符串**，可选值为**['00','11','99']**。其中00表示初始化成功，11表示实例连接错误，99表示实例处于禁用状态。  
>>>> **desc\<String\>：**该实例的初始化结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.3.1的样例代码
fastDFSCore.on(Core.macro.FASTDFS_EVENT_NAME_INIT, (initResult) => {
// initResult = {
//   result: true,
//   totalCount: 2,
//   successCount: 0,
//   initDetail: [{
//       result: false,
//       code: '11',
//       desc: 'FastDFS实例地址[192.168.8.160],端口[22122]连接错误:FastDFS错误:[all trackers connect fail, please check your tracker config or your tracker server.]'
//     },
//     {
//       result: false,
//       code: '11',
//       desc: 'FastDFS实例地址[192.168.8.161],端口[22122]连接错误:FastDFS错误:[all trackers connect fail, please check your tracker config or your tracker server.]'
//     }
//   ]
// }
});
```

<a id="3.4.3"></a>
#### 3.4.3 fastDFSCore.saveFile(fileBuffer, fileExt[, groupName], callBack)
> **API说明:**  
> 使用```saveFile()```执行存储文件操作。  

> **参数列表:**  
> **1. fileBuffer\<Buffer\>**  
> 文件二进制信息，**必传项**，为**缓冲区类型**。可通过```fs.readFileSync()```、```Buffer.from()```等方式将文件放入缓冲区。  
> **2. fileExt\<String\>**  
> 文件拓展名，**必传项**，为**字符串**。例如拓展名为.json，可以传入```'json'```或```'.json'```。  
> **3. groupName\<String\>**  
> 文件组名，**非必传项**，为**字符串**。若设置了该项，则忽略FastDFS原有的存储均衡措施，直接将文件存入指定的文件组。文件组可通过```fastDFSCore.getGroupInfo()```获取。  
> **4. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。当```code === '00'```时返回true，其他情况返回false。  
>> **fileId\<String\>：**文件ID，为**字符串**。  
>> **code\<String\>：**执行结果代码，为**特定字符串**，可选值为**['00','66','99']**。其中00表示执行成功，66表示其他错误，99表示实例尚未初始化。  
>> **desc\<String\>：**执行结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.4.1的样例代码
fastDFSCore.on(Core.macro.FASTDFS_EVENT_NAME_INIT, (initResult) => {
  let fileBuffer = fs.readFileSync('/Users/Douzi/Desktop/PIC/猫表情包/没有不开心.jpg');
  let fileExt = '.jpg';
  fastDFSCore.saveFile(fileBuffer, fileExt, (result, fileId, code, desc) => {
    console.log(result);
    console.log(fileId);
    console.log(code);
    console.log(desc);
  });
});
```

<a id="3.4.4"></a>
#### 3.4.4 fastDFSCore.removeFile(fileId, callBack)
> **API说明:**  
> 使用```removeFile()```执行删除文件操作。  

> **参数列表:**  
> **1. fileId\<String\>**  
> 文件ID，**必传项**，为**字符串**。  
> **2. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。当```code === '00'```时返回true，其他情况返回false。  
>> **code\<String\>：**执行结果代码，为**特定字符串**，可选值为**['00','66','99']**。其中00表示执行成功，66表示其他错误，99表示实例尚未初始化。  
>> **desc\<String\>：**执行结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.4.1的样例代码
fastDFSCore.on(Core.macro.FASTDFS_EVENT_NAME_INIT, (initResult) => {
  let fileId = 'group2/M00/00/00/wKgIo1u8vReAVVLXAABXaOWlj9M830.jpg';
  fastDFSCore.removeFile(fileId, (result, code, desc) => {
    console.log(result);
    console.log(code);
    console.log(desc);
  });
});
```

<a id="3.4.5"></a>
#### 3.4.5 fastDFSCore.getFile(fileId, writeStream, callBack)
> **API说明:**  
> 使用```getFile()```执行获取(下载)文件操作。  

> **参数列表:**  
> **1. fileId\<String\>**  
> 文件ID，**必传项**，为**字符串**。  
> **2. writeStream\<String\>**  
> 文件写流，**必传项**，为**文件流**。可通过```fs.createWriteStream()```获得文件流。  
> **3. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。当下载完成或失败时，触发该回调。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。当```code === '00'```时返回true，其他情况返回false。  
>> **code\<String\>：**执行结果代码，为**特定字符串**，可选值为**['00','66','99']**。其中00表示执行成功，66表示其他错误，99表示实例尚未初始化。  
>> **desc\<String\>：**执行结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.4.1的样例代码
fastDFSCore.on(Core.macro.FASTDFS_EVENT_NAME_INIT, (initResult) => {
  let fileId = 'group2/M00/00/00/wKgIo1u8vReAVVLXAABXaOWlj9M830.jpg';
  let writeStream = fs.createWriteStream('/Users/Douzi/Desktop/test.jpg');
  fastDFSCore.getFile(fileId, writeStream, (result, code, desc) => {
    console.log(result);
    console.log(code);
    console.log(desc);
  });
});
```

<a id="3.4.6"></a>
#### 3.4.6 fastDFSCore.getFileInfo(fileId, callBack)
> **API说明:**  
> 使用```getFileInfo()```执行获取文件信息操作。  

> **参数列表:**  
> **1. fileId\<String\>**  
> 文件ID，**必传项**，为**字符串**。   
> **2. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。当```code === '00'```时返回true，其他情况返回false。  
>> **fileInfo\<Object\>：**文件信息，为**对象类型**。  
>>> 字段说明：   
>>> **size\<Integer\>：**文件大小，为**整型数字**。  
>>> **timestamp\<Integer\>：**文件创建时间戳，为**整型数字**。  
>>> **crc32\<Integer\>：**crc32校验码，为**整型数字**。  
>>> **addr\<String\>：**存储者的IP地址，为**字符串**。  

>> **code\<String\>：**执行结果代码，为**特定字符串**，可选值为**['00','66','99']**。其中00表示执行成功，66表示其他错误，99表示实例尚未初始化。  
>> **desc\<String\>：**执行结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.4.1的样例代码
fastDFSCore.on(Core.macro.FASTDFS_EVENT_NAME_INIT, (initResult) => {
  let fileId = 'group2/M00/00/00/wKgIo1u8vReAVVLXAABXaOWlj9M830.jpg';
  fastDFSCore.getFileInfo(fileId, (result, fileInfo, code, desc) => {
    console.log(result);
    console.log(fileInfo);
    console.log(code);
    console.log(desc);
  });
});
```

<a id="3.4.7"></a>
#### 3.4.7 fastDFSCore.getGroupsInfo(callBack)
> **API说明:**  
> 使用```getGroupsInfo()```执行获取文件组信息操作。  

> **参数列表:**  
> **1. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。当```code === '00'```时返回true，其他情况返回false。  
>> **groupsInfo\<Object\>：**文件信息，为**对象类型**。  
>>> 字段说明：   
>>> **count\<Integer\>：**文件组个数，为**整型数字**。  
>>> **groups\<Array\<Object\>\>：**文件组信息，为**数组类型\<对象类型\>**。  
>>>> 字段说明：  
>>>> **groupName\<String\>：**文件组名称，为**字符串**。  
>>>> **totalMB\<Integer\>：**文件组总空间，为**整型数字**。  
>>>> **freeMB\<Integer\>：**文件组空闲空间，为**整型数字**。  
>>>> **trunkFreeMB\<Integer\>：**trunk空闲空间，为**整型数字**。  
>>>> **storageCount\<Integer\>：**文件组中storage的数量，为**整型数字**。  
>>>> **storagePort\<Integer\>：**storage服务驻留端口，为**整型数字**。  
>>>> **storageHttpPort\<Integer\>：**storage-http服务的驻留端口，为**整型数字**。  
>>>> **activeCount\<Integer\>：**激活状态的storage数量，为**整型数字**。  
>>>> **currentWriteServer\<Integer\>：**正在写操作的storage数量，为**整型数字**。  
>>>> **storePathCount\<Integer\>：**文件组中存储路径数量，为**整型数字**。  
>>>> **subdirCountPerPath\<Integer\>：**每个路径下的子目录数量，为**整型数字**。  
>>>> **currentTrunkFileId\<Integer\>：**当前trunk的文件ID，为**整型数字**。  

>> **code\<String\>：**执行结果代码，为**特定字符串**，可选值为**['00','66','99']**。其中00表示执行成功，66表示其他错误，99表示实例尚未初始化。  
>> **desc\<String\>：**执行结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.4.1的样例代码
fastDFSCore.on(Core.macro.FASTDFS_EVENT_NAME_INIT, (initResult) => {
  getGroupsInfo((result, groupsInfo, code, desc) => {
    console.log(result);
    console.log(groupsInfo);
    console.log(code);
    console.log(desc);
  });
});
```

<a id="3.4.8"></a>
#### 3.4.8 fastDFSCore.getProxyDomain(index)
> **API说明:**  
> 使用```getProxyDomain()```执行获取访问服务地址操作。  

> **参数列表:**  
> **1. index\<Integer\>**  
> 索引，**必传项**，为**函数类型**。为配置项中设置的访问服务信息在列表中的索引。  

> **结果说明:**  
> **1. result\<String\>**  
> 服务访问地址，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.4.1的样例代码
fastDFSCore.on(Core.macro.FASTDFS_EVENT_NAME_INIT, (initResult) => {
  let fileBuffer = fs.readFileSync('/Users/Douzi/Desktop/PIC/猫表情包/没有不开心.jpg');
  let fileExt = '.jpg';
  fastDFSCore.saveFile(fileBuffer, fileExt, (result, fileId, code, desc) => {
    console.log(fastDFSCore.getProxyDomain(1) + fileId);
  });
});
```

<a id="3.5"></a>
### 3.5 Core.server
> **说明:**  
> 0. ServerCore用于构建一个指定端口下的Web服务。  
> 1. ```Core.server()```为ServerCore的构造函数，需要使用**配置项**构建实例（使用new关键字），通过实例调用API。  
> 2. ServerCore实例构建时，会自动被Core托管，可以通过**[```Core.control.getInstance()```](#3.9.2)**进行跨文件获取。      
> 3. ServerCore实例构建时，会根据配置项中的开关进行初始化。  
> 4. ServerCore绑定服务需要使用```bind()```方法。此时需要注意处理生命周期，即**<font color="red">如果进行绑定的服务中调用了ServerCore相关API，引入服务操作需要放在构建ServerCore之后。</font>**  
> 5. ServerCore可以挂载本地文件系统至指定的Web服务下。  

<a id="3.5.1"></a>
#### 3.5.1 Core.server.constructor(cfg)
> **API说明:**  
> 使用```constructor()```方法，即通过new关键字构造一个ServerCore实例。该实例将会自动根据配置项的信息在指定端口打开Web服务，且把文件系统挂载至指定的位置。

> **参数列表:**  
> **1. cfg\<Object\>**  
> server的配置项，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **id\<String\>：**实例ID，**必传项**，为**字符串**。用于标识唯一的serverCore实例。  
>> **state\<String\>：**实例状态，**必传项**，为**特定字符串**，可选值为**['open','close']**。当状态为close时，不执行实际构建操作。  
>> **port\<String\>：**服务驻留端口，**必传项**，为**字符串**。  
>> **reqPath\<String\>：**Web服务的请求路径，**非必传项**，为**字符串**，默认值为**'/'**。所有服务的请求路径将会挂载至此路径下。  
>> **bodyMaxSize\<String\>：**POST请求体体积上限，**非必传项**，为**整型数字**，单位**Byte**，默认值为**2 * 1024 * 1024**。  
>> **fileMaxSize\<String\>：**POST请求附件单文件体积上限，**非必传项**，为**整型数字**，单位**Byte**，默认值为**2 * 1024 * 1024**。  
>> **fileMaxCount\<String\>：**POST请求附件文件数量上限，**非必传项**，为**整型数字**，默认值为**2**。  
>> **ssl\<Object\>：**SSL配置，**非传**，为**对象类型**，field格式为：**{选项名:选项细节}**，默认值为**{state:'close'}**。若打开了SSL模式，serverCore将会额外在443端口驻留Web服务，并使用配置项中的证书和密钥解析HTTPS请求。  
>>> 可配置选项名有：  
>>> **state\<String\>：**SSL的状态，**必传项**，为**特定字符串**，可选值为**['open','close']**。当状态为close时，不使用SSL模式。  
>>> **cert\<String\>：**证书文件的绝对路径，**```state === 'open'```时必传**，为**字符串**。  
>>> **key\<String\>：**密钥文件的绝对路径，**```state === 'open'```时必传**，为**字符串**。  
  
>> **mounter\<Object\>：**挂载器配置，**非必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**，默认值为**{state:'close'}**。若打开了挂载器，将会自动挂载配置列表中的文件夹，若**文件夹不存在将会自动创建**。**只有当文件夹配置为可访问模式时，才允许被Web服务访问**。  
>>> 可配置选项名有：  
>>> **state\<String\>：**挂载器的状态，**必传项**，为**特定字符串**，可选值为**['open','close']**。当状态为close时，挂载器不执行创建文件夹操作。  
>>> **sourcePath\<String\>：**挂载源绝对路径，**```state === 'open'```时必传**，为**字符串**。必须为文件夹的绝对路径，且末尾必须有文件系统分隔符，例：**```/usr/local/server/```**。  
>>> **folderList\<Array\<Object\>\>：**文件夹列表，**```state === 'open'```时必传**，为**数字类型<对象类型>**，field格式为：**{选项名:选项细节}**。创建索引时不保证成功，尽量避免远程创建索引操作以保证数据库的结构化。  
>>>> 可配置选项名有：  
>>>> **state\<String\>：**可访问开关，**必传项**，为**特定字符串**，可选值为**['open','close']**。当状态为close时，挂载的文件夹无法被Web服务访问。  
>>>> **folderName\<String\>：**文件夹名称，**必传项**，为**字符串**。  
>>>> **reqPath\<String\>：**请求路径，**必传项**，为**字符串**。文件夹将会挂载至```${cfg.reqPath}${reqPath}```下。  

> **样例代码**
>
```
let Core = require('Core.js');
let serverCfg = {
  id: 'Server_01', 												// ServerId 
  state: 'close', 												// Server状态
  port: '3000', 												// 服务驻留端口
  reqPath: '/Services', 										// 请求路径
  bodyMaxSize: 2 * 1024 * 1024, 								// 请求body限制 单位:Byte
  fileMaxSize: 2 * 1024 * 1024, 								// 单文件大小限制 单位:Byte
  fileMaxCount: 2, 												// 文件个数限制
  // SSL设置
  ssl: {
    state: 'close', 											// SSL开关
    cert: '/Users/Douzi/Server/DZSuperFrame/cert/Server.crt', 	// 证书路径
    key: '/Users/Douzi/Server/DZSuperFrame/cert/Server.pem', 	// 密钥路径
  },
  // 挂载器设置
  mounter: {
    state: 'open', 												// 挂载器开关
    sourcePath: '/Users/Douzi/Server/DZSuperFrame/file/', 		// 挂载器根路径
    // 文件夹列表
    folderList: [{
      state: 'close', 											// 可访问开关 为close时不可被http服务访问,实际会在对应目录下创建文件系统
      folderName: 'static', 									// 文件夹名称
      reqPath: '/source/static'									// 请求路径
    }, {
      state: 'open',
      folderName: 'image',
      reqPath: '/source/image'
    }],
  },
};
let serverCore = new Core.server(serverCfg);
```

<a id="3.5.2"></a>
#### 3.5.2 serverCore.bind(services)
> **API说明:**  
> 使用```bind()```进行服务绑定操作。<font color="red">在绑定服务时需要注意处理生命周期，尽量将引入服务和绑定操作放在最后执行</font>，原因在[本章说明](#3.5)中有阐述，不再赘述。  

> **参数列表:**  
> **1. services\<Array\<Handler\>\>**  
> 服务列表，**必传项**，为**数组类型\<Handler\>**。**Handler的详细描述见[3.6 Core.handler](#3.6)**。  

> **样例代码**
>
```
// 需要执行3.5.1的样例代码
// 请求路径为/Services/Test.do
class TestHandler extends Core.handler {
  // 构造函数 - 设置routePath
  constructor() {
    let routePath = '/Test.do';
    super(routePath);
  }
  // 请求预处理
  preHandler(req, res, next, handlerLogger) {
    req['routePath'] = '/Test.do';
    next();
  }
  // GET处理
  getHandler(req, res, handlerLogger) {
    res.send({ routePath: req.routePath, type: 'GET' });
  }
  // POST处理
  postHandler(req, res, handlerLogger) {
    res.send({ routePath: req.routePath, type: 'POST' });
  }
}
// 请求路径为/Services/Model.do
class ModelHandler extends Core.handler {
  // 构造函数 - 设置routePath
  constructor() {
    let routePath = '/Model.do';
    super(routePath);
  }
  // 请求预处理
  preHandler(req, res, next, handlerLogger) {
    req['routePath'] = '/Model.do';
    next();
  }
  // GET处理
  getHandler(req, res, handlerLogger) {
    res.send({ routePath: req.routePath, type: 'GET' });
  }
  // POST处理
  postHandler(req, res, handlerLogger) {
    res.send({ routePath: req.routePath, type: 'POST' });
  }
}
// 构造服务列表
let services = [];
services.push(TestHandler);
services.push(ModelHandler);
// 绑定服务
Core.control.getInstance(Core.macro.CORE_TYPE_NAME_SERVER, 'Server_01').bind(services);
```

<a id="3.5.3"></a>
#### 3.5.3 serverCore.globalInterceptor
> **API说明:**  
> ```serverCore.globalInterceptor```为serverCore的全局拦截器，将会拦截到所有接入serverCore的HTTP请求。**默认拦截器处理流程见本节的样例代码**，直接对该属性赋值一个处理方法便可修改默认处理流程，赋值即生效。  

> **参数列表:**  
> **1. req\<Object\>**  
> HTTP请求实例，为**对象类型**。处理时可以向其中加入自定义的field向下面的中间件传递，具体使用说明见express.Request。  
> **2. res\<Object\>**  
> HTTP应答实例，为**对象类型**。可使用```res.status()```、```res.send()```等方法，具体使用说明见express.Response。  
> **3. next\<Function\>**  
> 转发器，为**函数类型**。若要进入下一个中间件处理流程时，调用```next()```。  

> **样例代码**
>
```
// 需要执行3.5.1、3.5.2的样例代码
// 设置全局拦截器
serverCore.globalInterceptor = (req, res, next) => {
  let funcName = `全局拦截`;
  serverCore._logger.log('s', funcName, `拦截到来自[${serverCore.common.getClientIp(req)}]的客户端对路径[${req.path}]发起的[${req.method}]请求`);
  let isRoutePathExist = serverCore.services.some((service) => {
    let actualReqPath = serverCore.reqPath + service.routePath;
    return actualReqPath === req.path
  });
  if (isRoutePathExist) {
    serverCore._logger.log('e', funcName, `请求路径[${req.path}]有效,进行转发以执行后续操作`);
    // 设置允许跨域
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Server", 'DZSF_ServerCore');
    res.header("X-Powered-By", 'DZSuperFrame');
    next();
  } else {
    serverCore._logger.log('w', funcName, `请求路径[${req.path}]无效,拒绝访问`);
    res.status(404).send('404 Not Found');
  }
};
```

<a id="3.5.4"></a>
#### 3.5.4 serverCore.globalErrorInterceptor
> **API说明:**  
> ```serverCore.globalErrorInterceptor```为serverCore的全局错误拦截器，任何中间件出现未被处理的错误时，便被分发进此拦截器。**默认错误拦截器处理流程见本节的样例代码**，直接对该属性赋值一个处理方法便可修改默认处理流程，赋值即生效。  

> **参数列表:**  
> **1. err\<Error\>**  
> 抛出的错误，为**错误类型**。  
> **2. req\<Object\>**  
> HTTP请求实例，为**对象类型**。处理时可以向其中加入自定义的field向下面的中间件传递，具体使用说明见express.Request。  
> **3. res\<Object\>**  
> HTTP应答实例，为**对象类型**。可使用```res.status()```、```res.send()```等方法，具体使用说明见express.Response。  
> **4. next\<Function\>**  
> 转发器，为**函数类型**。**<font color="red">虽该项并无卵用，但必须要在参数列表中写出</font>**。  

> **样例代码**
>
```
// 需要执行3.5.1、3.5.2的样例代码
// 设置全局错误拦截器
serverCore.globalErrorInterceptor = (err, req, res, next) => {
  let funcName = `错误拦截`;
  let reason = `请求路径[${req.path}]处理时发生错误[${err.message}]`;
  serverCore._logger.log('w', funcName, reason);
  // 若使用handlerLogger则需要结束
  if (req['_handlerLogger']) {
    req['_handlerLogger'].ended();
  }
  res.status(500).send(err.message);
};
```

<a id="3.5.5"></a>
#### 3.5.5 serverCore.common
> **API说明:**  
> ```serverCore.common```为serverCore的通用API组，可以用其进行获取客户端IP、获取报文、读写挂载器等操作，一般放在请求处理流程中使用。

<a id="3.5.5.1"></a>
##### 3.5.5.1 serverCore.common.getClientIp(req)
> **API说明:**  
> 使用```serverCore.common.getClientIp()```可以获取传入的HTTP请求实例中的客户端IP。

> **参数列表:**  
> **1. req\<Object\>**  
> HTTP请求实例，为**对象类型**。   

> **结果说明:**  
> **1. ipAddress\<String\>**  
> 客户端的IP，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.5.1、3.5.2的样例代码
serverCore.globalInterceptor = (req, res, next) => {
  console.log(serverCore.common.getClientIp(req));
  next();
};
```

<a id="3.5.5.2"></a>
##### 3.5.5.2 serverCore.common.getPort()
> **API说明:**  
> 使用```serverCore.common.getPort()```可以获取当前serverCore服务驻留端口。

> **参数列表:**  
> 无

> **结果说明:**  
> **1. port\<String/Integer\>**  
> 服务驻留的端口，类型依赖于ServerCore的配置，为**字符串/整型数字**。  

> **样例代码**
>
```
// 需要执行3.5.1、3.5.2的样例代码
serverCore.globalInterceptor = (req, res, next) => {
  console.log(serverCore.common.getPort());
  next();
};
```

<a id="3.5.5.3"></a>
##### 3.5.5.3 serverCore.common.getQuery(req)
> **API说明:**  
> 使用```serverCore.common.getQuery()```可以获取HTTP-GET请求中附带的参数。

> **参数列表:**  
> **1. req\<Object\>**  
> HTTP请求实例，为**对象类型**。   

> **结果说明:**  
> **1. params\<Object\>**  
> 客户端请求时附带在URL中的参数，为**对象类型**。  

> **样例代码**
>
```
// 需要执行3.5.1、3.5.2的样例代码
serverCore.globalInterceptor = (req, res, next) => {
  console.log(serverCore.common.getQuery(req));
  next();
};
```

<a id="3.5.5.4"></a>
##### 3.5.5.4 serverCore.common.getBody(req)
> **API说明:**  
> 使用```serverCore.common.getBody()```可以获取HTTP-POST请求中附带的参数，x-www-form-urlencoded和form-data型的参数都可以获取。

> **参数列表:**  
> **1. req\<Object\>**  
> HTTP请求实例，为**对象类型**。   

> **结果说明:**  
> **1. params\<Object\>**  
> 客户端请求时附带在Body中的参数，为**对象类型**。 

> **样例代码**
>
```
// 需要执行3.5.1、3.5.2的样例代码
serverCore.globalInterceptor = (req, res, next) => {
  console.log(serverCore.common.getBody(req));
  next();
};
```

<a id="3.5.5.5"></a>
##### 3.5.5.5 serverCore.common.getFiles(req)
> **API说明:**  
> 使用```serverCore.common.getFiles()```可以获取HTTP-POST请求中附带的文件。

> **参数列表:**  
> **1. req\<Object\>**  
> HTTP请求实例，为**对象类型**。   

> **结果说明:**  
> **1. files\<Array\<Object\>\>**  
> 文件列表，为**数组类型<对象类型>**。  
>> 字段说明：  
>> **fieldname\<String\>：**文件的field名称，为**字符串**。  
>> **originalname\<String\>：**文件的原始名称，为**字符串**。  
>> **encoding\<String\>：**文件的编码方式，为**字符串**。  
>> **mimetype\<String\>：**文件的类型，为**字符串**。  
>> **buffer\<Buffer\>：**文件的二进制内容，为**缓冲区类型**。  
>> **size\<Integer\>：**文件的大小，为**整型数字**，单位为**Byte**。  

> **样例代码**
>
```
// 需要执行3.5.1、3.5.2的样例代码
serverCore.globalInterceptor = (req, res, next) => {
  console.log(serverCore.common.getFiles(req));
  next();
};
```

<a id="3.5.5.6"></a>
##### 3.5.5.6 serverCore.common.getFolderInfo(index, callBack)
> **API说明:**  
> 使用```serverCore.common.getFolderInfo()```可以通过异步的方式获取挂载器指定索引处的文件系统信息。

> **参数列表:**  
> **1. index\<Integer\>**  
> 挂载索引，**必传项**，为**整型数字**。   
> **2. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。当```code === '00'```时返回true，其他情况返回false。  
>> **info\<Object\>：**文件系统信息，为**对象类型**。  
>>> 字段说明：  
>>> **state\<String\>：**文件系统访问状态，为**特定字符串**，可选值为**['open','close']**。  
>>> **folderPath\<String\>：**文件系统的绝对路径，为**字符串**。  
>>> **folderReqPath\<String\>：**文件系统的请求路径，为**字符串**。  

>> **code\<String\>：**执行结果代码，为**特定字符串**，可选值为**['00','88','99']**。其中00表示执行成功，88表示索引无效，99表示挂载器处于关闭状态。  
>> **desc\<String\>：**执行结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.5.1、3.5.2的样例代码
serverCore.common.getFolderInfo(0, (result, info, code, desc) => {
  console.log(result);
  console.log(info);
  console.log(code);
  console.log(desc);
});
```

<a id="3.5.5.7"></a>
##### 3.5.5.7 serverCore.common.getFolderInfoSync(index)
> **API说明:**  
> 使用```serverCore.common.getFolderInfoSync()```可以通过同步的方式获取挂载器指定索引处的文件系统信息。

> **参数列表:**  
> **1. index\<Integer\>**  
> 挂载索引，**必传项**，为**整型数字**。 

> **结果说明:**    
> **1. info\<Object\>**  
> 文件系统信息，为**对象类型**。  
>> 字段说明：  
>> **state\<String\>：**文件系统访问状态，为**特定字符串**，可选值为**['open','close']**。  
>> **folderPath\<String\>：**文件系统的绝对路径，为**字符串**。  
>> **folderReqPath\<String\>：**文件系统的请求路径，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.5.1、3.5.2的样例代码
console.log(serverCore.common.getFolderInfoSync(0));
```

<a id="3.5.5.8"></a>
##### 3.5.5.8 serverCore.common.saveFile(index, fileName, fileBuffer, callBack)
> **API说明:**  
> 使用```serverCore.common.saveFile()```存储文件至指定的文件系统中。

> **参数列表:**  
> **1. index\<Integer\>**  
> 挂载索引，**必传项**，为**整型数字**。  
> **2. fileName\<String\>**  
> 文件名，**必传项**，为**字符串**。  
> **3. fileBuffer\<Buffer\>**  
> 文件二进制数据，**必传项**，为**缓冲区类型**。  
> **4. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。当```code === '00'```时返回true，其他情况返回false。  
>> **reqPath\<String\>：**文件的请求路径，为**字符串**。  
>> **code\<String\>：**执行结果代码，为**特定字符串**，可选值为**['00','66','88','99']**。其中00表示存储成功，66表示存储文件失败，88表示索引无效，99表示挂载器处于关闭状态。  
>> **desc\<String\>：**执行结果描述，为**字符串**。  

> **样例代码**
>
```
// 需要执行3.5.1、3.5.2的样例代码
serverCore.common.saveFile(0, 'testImg.png', fs.readFileSync('/Users/Douzi/Downloads/111.png'), (result, reqPath, code, desc) => {
  console.log(result);
  console.log(reqPath);
  console.log(code);
  console.log(desc);
});
```

<a id="3.6"></a>
### 3.6 Core.handler
> **说明:**  
> 0. Handler用于构造Web服务对应的处理流程。  
> 1. 实现Handler时推荐使用继承的方式。  
> 2. Handler需要被绑定至ServerCore才可被正常调用。  
> 3. Handler中可以设置服务的routePath、请求预处理、GET处理、POST处理。  
> 4. Handler中推荐使用HandlerLogger进行日志收集，日志将按照每次请求被归档。  
> 5. Handler中有默认的预处理、GET处理、POST处理，若不实现则进入默认处理流程。  
> 6. Handler中调用底层API时推荐使用**[3.7 HandlerFuncs](#3.7)**做封装。  
> 7. 每一小节的样例代码为Handler的默认处理流程。  

<a id="3.6.1"></a>
#### 3.6.1 Core.handler.constructor(routePath)
> **API说明:**  
> ```Core.handler.constructor()```为Handler的默认构造函数，需要传入routePath，routePath为HTTP的请求路径。在实现Handler时，需要实现一个不需要传入参数的constructor，在方法体中通过```super()```传入routePath。

> **参数列表:**  
> **1. routePath\<String\>**  
> HTTP的请求路径，**必传项**，为**字符串**。  

> **样例代码**
>
```
// 请求路径为/Test.do 
// 在ServerCore有配置reqPath时请求路径为/:reqPath/Test.do
let Core = require('Core.js');
class TestHandler extends Core.handler {
  // 构造函数 - 设置routePath
  constructor() {
    let routePath = '/Test.do';
    super(routePath);
  }
}
```

<a id="3.6.2"></a>
#### 3.6.2 Core.handler.preHandler(req, res, next, handlerLogger)
> **API说明:**  
> ```Core.handler.preHandler()```为Handler的请求预处理方法。**预处理流程结束后，可以通过使用```next()```转发进此次HTTP对应的GET或POST进行处理。若预处理流程中抛出错误，则会转发至ServerCore的全局错误拦截器中进行处理。**

> **参数列表:**  
> **1. req\<Object\>**  
> HTTP请求实例，为**对象类型**。处理时可以向其中加入自定义的field向下面的中间件传递，具体使用说明见express.Request。  
> **2. res\<Object\>**  
> HTTP应答实例，为**对象类型**。可使用```res.status()```、```res.send()```等方法，具体使用说明见express.Response。  
> **3. next\<Function\>**  
> 转发器，为**函数类型**。调用此方法即可转发至具体的GET或POST处理流程。  
> **4. handlerLogger\<Object\>**  
> 处理日志记录器，为**对象类型**。使用方法见**[```Core[.logCore].log/HandlerLogger.log/CustomLogger.log()```](#3.1.2)**。
  
> **样例代码**
>
```
// 请求路径为/Test.do 
// 在serverCore有配置reqPath时请求路径为/:reqPath/Test.do
let Core = require('Core.js');
class TestHandler extends Core.handler {
  // 构造函数 - 设置routePath
  constructor() {
    let routePath = '/Test.do';
    super(routePath);
  }
  // 默认预处理流程 -> 转发至对应的请求处理器
  preHandler(req, res, next, handlerLogger) {
    next();
  }
}
```

<a id="3.6.3"></a>
#### 3.6.3 Core.handler.getHandler(req, res, handlerLogger)
> **API说明:**  
> ```Core.handler.getHandler()```为Handler的GET请求处理方法，**除抛出错误时会进入ServerCore的全局错误拦截器处理外，其他情况下无法再进行转发。**

> **参数列表:**  
> **1. req\<Object\>**  
> HTTP请求实例，为**对象类型**。处理时可以向其中加入自定义的field向下面的中间件传递，具体使用说明见express.Request。  
> **2. res\<Object\>**  
> HTTP应答实例，为**对象类型**。可使用```res.status()```、```res.send()```等方法，具体使用说明见express.Response。  
> **3. handlerLogger\<Object\>**  
> 处理日志记录器，为**对象类型**。使用方法见**[```Core[.logCore].log/HandlerLogger.log/CustomLogger.log()```](#3.1.2)**。
  
> **样例代码**
>
```
// 请求路径为/Test.do 
// 在serverCore有配置reqPath时请求路径为/:reqPath/Test.do
let Core = require('Core.js');
class TestHandler extends Core.handler {
  // 构造函数 - 设置routePath
  constructor() {
    let routePath = '/Test.do';
    super(routePath);
  }
  // 默认GET处理 -> 向客户端返回404并记录日志
  getHandler(req, res, handlerLogger) {
    // 打开业务日志,务必在请求返回时执行handlerLogger.ended()
    // 否则会造成大体积的内存泄露
    handlerLogger.start();
    handlerLogger.log('i', '业务日志', 'Handler中未实现[GET]业务,默认返回[404 - 拒绝访问]');
    res.status(404).send('404 Not Found');
    handlerLogger.ended();
  }
}
```


<a id="3.6.4"></a>
#### 3.6.4 Core.handler.postHandler(req, res, handlerLogger)
> **API说明:**  
> ```Core.handler.postHandler()```为Handler的POST请求处理方法，**除抛出错误时会进入ServerCore的全局错误拦截器处理外，其他情况下无法再进行转发。**

> **参数列表:**  
> **1. req\<Object\>**  
> HTTP请求实例，为**对象类型**。处理时可以向其中加入自定义的field向下面的中间件传递，具体使用说明见express.Request。  
> **2. res\<Object\>**  
> HTTP应答实例，为**对象类型**。可使用```res.status()```、```res.send()```等方法，具体使用说明见express.Response。  
> **3. handlerLogger\<Object\>**  
> 处理日志记录器，为**对象类型**。使用方法见**[```Core[.logCore].log/HandlerLogger.log/CustomLogger.log()```](#3.1.2)**。
  
> **样例代码**
>
```
// 请求路径为/Test.do 
// 在serverCore有配置reqPath时请求路径为/:reqPath/Test.do
let Core = require('Core.js');
class TestHandler extends Core.handler {
  // 构造函数 - 设置routePath
  constructor() {
    let routePath = '/Test.do';
    super(routePath);
  }
  // 默认POST处理 -> 向客户端返回404并记录日志
  postHandler(req, res, handlerLogger) {
    // 打开业务日志,务必在请求返回时执行handlerLogger.ended()
    // 否则会造成大体积的内存泄露
    handlerLogger.start();
    handlerLogger.log('i', '业务日志', 'Handler中未实现[POST]业务,默认返回[404 - 拒绝访问]');
    res.status(404).send('404 Not Found');
    handlerLogger.ended();
  }
}
```

<a id="3.7"></a>
### 3.7 Core.handlerFuncs
> **说明:**  
> 0. HandlerFuncs是Handler和底层API交互的推荐封装方式。  
> 1. 实现HandlerFuncs时推荐使用继承的方式。  
> 2. HandlerFuncs是一个构造函数，实例化后方可调用其中的API。  
> 3. HandlerFuncs使用HandlerLogger进行日志收集，此时需要在实例化的时候从Handler传入HandlerLogger。  
> 4. HandlerFuncs使用```this.handlerLogger.log()```进行日志输出。  
> 5. HandlerFuncs实例化时也可以不传入HandlerLogger，此时```this.handlerLogger.log()```不实际输出日志。  

<a id="3.7.1"></a>
#### 3.7.1 Core.handlerFuncs.constructor([handlerLogger])
> **API说明:**  
> ```constructor()```为HandlerFuncs的构造方法，即通过new关键字构造一个HandlerFuncs实例。该实例从Handler获取输出日志的能力，同时具有调用底层API的能力。

> **参数列表:**  
> **1. handlerLogger\<Object\>**  
> 处理日志输出器，**非必传项**，为**对象类型**。从Handler的处理方法中可以获取到日志输出器。  
  
> **样例代码**
>
```
// 1. 实现一个HandlerFuncs
class TaskFuncs extends Core.handlerFuncs {
  // 开始任务
  startTask(callBack) {
    let funcName = '执行任务';
    let ep = new eventproxy();
    let reason = '';
    this.handlerLogger.log('s', funcName, '开始执行任务');
    // 流程控制 - 执行任务1
    ep.all('task_1', () => {
      this.handlerLogger.log('s', funcName, '开始执行任务1');
      if (this._getRandomResult()) {
        this.handlerLogger.log('e', funcName, '执行任务1成功');
        ep.emit('task_2');
      } else {
        reason = '执行任务1失败';
        this.handlerLogger.log('w', funcName, reason);
        callBack(false, reason);
      }
    });
    // 流程控制 - 执行任务2
    ep.all('task_2', () => {
      this.handlerLogger.log('s', funcName, '开始执行任务2');
      if (this._getRandomResult()) {
        this.handlerLogger.log('e', funcName, '执行任务2成功');
        ep.emit('task_3');
      } else {
        reason = '执行任务2失败';
        this.handlerLogger.log('w', funcName, reason);
        callBack(false, reason);
      }
    });
    // 流程控制 - 执行任务3
    ep.all('task_3', () => {
      this.handlerLogger.log('s', funcName, '开始执行任务3');
      if (this._getRandomResult()) {
        this.handlerLogger.log('e', funcName, '执行任务3成功');
        callBack(true);
      } else {
        reason = '执行任务3失败';
        this.handlerLogger.log('w', funcName, reason);
        callBack(false, reason);
      }
    });
    // 流程控制 - 设置入口
    ep.emit('task_1');
  }
  // 随机生成任务结果
  _getRandomResult() {
    let funcName = '生成随机值';
    let random = Math.random();
    this.handlerLogger.log('i', funcName, `生成的随机值为[${random}]`);
    if (random >= 0.75) {
      return false;
    } else {
      return true;
    }
  }
}
// 2. 在Handler中使用HandlerFuncs
class TaskHandler extends Core.handler {
  // 构造函数 - 设置routePath
  constructor() {
    let routePath = '/Task.do';
    super(routePath);
  }
  getHandler(req, res, handlerLogger) {
    // 传入HandlerLogger对HandlerFuncs实例化
    let taskFuncs = new TaskFuncs(handlerLogger);
    // 打开业务日志,务必在请求返回时执行handlerLogger.ended()
    // 否则会造成大体积的内存泄露
    handlerLogger.start();
    // 执行HandlerFuncs中的方法
    taskFuncs.startTask((result, err) => {
      if (result) {
        res.send({ successed: true, msg: '执行任务成功' });
      } else {
        res.send({ successed: false, msg: err });
      }
      handlerLogger.ended();
    });
  }
}
```

<a id="3.8"></a>
### 3.8 Core.message
> **说明:**  
> 0. MessageCore用于解析或组装一个系列的报文。  
> 1. ```Core.message()```为MessageCore的构造函数，需要使用**配置项**构建实例（使用new关键字），通过实例调用API。  
> 2. MessageCore实例构建时，会自动被Core托管，可以通过**[```Core.control.getInstance()```](#3.9.2)**进行跨文件获取。  
> 3. MessageCore默认支持解析的报文的原始结构中需要包含表示时间戳的field，用来判断报文的时效性，此key可以在配置项中定义。  
> 4. MessageCore默认支持解析的报文需要进行签名，签名规则为原始结构按自然升序转为JSON，在其后方拼接签名密钥并对整体取MD5值，其中签名密钥可以在配置项中自定义。  
> 5. MessageCore默认支持解析的报文需要特定的报文结构：```{header:{sign:''},body:{}}```，其中sign字段为签名值，body为原始结构，header、sign、body具体的key值可以在配置项中自定义。  
> 6. MessageCore默认支持解析的报文需要进行加密，即将完整的报文结构转为JSON，并使用密钥对其进行AES-256-ECB加密，其中加密密钥可以在配置项中自定义。  
> 7. MessageCore支持根据实际需求定制过程，推荐使用继承的方式进行，可以调用MessageCore中提供的原生方法处理报文。  

<a id="3.8.1"></a>
#### 3.8.1 Core.message.constructor(cfg)
> **API说明:**  
> 使用```constructor()```方法，即通过new关键字构造一个MessageCore实例。该实例将会具有解析某一系列报文的能力。配置项中的内容是否必传仅在使用默认的报文解析规则时有效。若采用自定义MessageCore时，配置项内容可以根据实际需求传入。  

> **参数列表:**  
> **1. cfg\<Object\>**  
> Message的配置项，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **id\<String\>：**实例ID，**必传项**，为**字符串**。用于标识唯一的MessageCore实例。  
>> **receivedMsg\<Object\>：**接收报文结构信息，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。
>>> 可配置选项名有：  
>>> **header\<Object\>：**报文头信息，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>>>> 可配置选项名有：  
>>>> **keyName\<String\>：**报文头Key，**必传项**，为**字符串**。    
>>>> **content\<Object\>：**报文头内容，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。   
>>>>> 可配置选项名有：  
>>>>> **sign\<Object\>：**签名信息，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>>>>>> 可配置选项名有：   
>>>>>> **keyName\<String\>：**报文头Key，**必传项**，为**字符串**。   

>>> **body\<Object\>：**报文体信息，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>>>> 可配置选项名有：  
>>>> **keyName\<String\>：**报文体Key，**必传项**，为**字符串**。    
>>>> **content\<Object\>：**报文体内容，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。   
>>>>> 可配置选项名有：  
>>>>> **timestamp\<Object\>：**时间戳信息，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>>>>>> 可配置选项名有：   
>>>>>> **keyName\<String\>：**时间戳Key，**必传项**，为**字符串**。   
>>>>>> **effectTime\<Integer\>：**有效时间，**必传项**，为**整型数字**，单位为：**秒**。 

>> **backMsg\<Object\>：**返回报文结构信息，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。
>>> 可配置选项名有：  
>>> **header\<Object\>：**报文头信息，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>>>> 可配置选项名有：  
>>>> **keyName\<String\>：**报文头Key，**必传项**，为**字符串**。    
>>>> **content\<Object\>：**报文头内容，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。   
>>>>> 可配置选项名有：  
>>>>> **code\<Object\>：**执行代码，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>>>>>> 可配置选项名有：   
>>>>>> **keyName\<String\>：**报文头Key，**必传项**，为**字符串**。   

>>>>> **msg\<Object\>：**执行描述，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>>>>>> 可配置选项名有：   
>>>>>> **keyName\<String\>：**报文头Key，**必传项**，为**字符串**。   

>>> **body\<Object\>：**报文体信息，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>>>> 可配置选项名有：  
>>>> **keyName\<String\>：**报文体Key，**必传项**，为**字符串**。   

>> **crypto\<Object\>：**加密信息，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。
>>> 可配置选项名有：  
>>> **aesKey\<String\>：**AES加密密钥，**必传项**，为**字符串**，长度为：**32**。  
>>> **signKey\<String\>：**加签密钥，**必传项**，为**字符串**。   

> **样例代码：**
>
```
let Core = require('Core.js');
// 产生密钥
let aesKeySeed = '******DZ_SUPERFRAME_MESSAGE_AES_KEY******';
let signKeySeed = '******DZ_SUPERFRAME_MESSAGE_SIGN_KEY******';
let commonKey = '******DZ_SUPERFRAME_MESSAGE_COMMON_KEY******';
let aesKey = Core.crypto.MD5(Core.crypto.MD5(aesKeySeed) + commonKey);
let signKey = Core.crypto.MD5(Core.crypto.MD5(signKeySeed) + commonKey);
// 构建配置项
let messageCfg = {
  id: 'Message_01', 				// MessageId
  // 接收报文信息
  receivedMsg: {
    // 报文头
    header: {
      keyName: 'HEAD', 				// 报文头KeyName
      // 报文头内容
      content: {
        sign: {
          keyName: 'SIGN' 			// 签名KeyName
        }
      },
    },
    // 报文体
    body: {
      keyName: 'BODY', 				// 报文体KeyName
      // 报文体内容
      content: {
        timestamp: {
          keyName: 'timestamp', 	// 时间戳KeyName
          effectTime: 300 			// 报文有效时间
        }
      },
    },
  },
  // 返回报文信息
  backMsg: {
    // 报文头
    header: {
      keyName: 'HEAD', 				// 报文头KeyName
      // 报文头内容
      content: {
        code: {
          keyName: 'code' 			// 执行代码KeyName
        },
        msg: {
          keyName: 'msg' 			// 执行描述KeyName
        }
      },
    },
    // 报文体
    body: {
      keyName: 'BODY', 				// 报文体KeyName
    }
  },
  // 加密信息
  crypto: {
    aesKey: aesKey, 				// AES密钥 32个字符
    signKey: signKey, 				// 签名密钥 长度不限
  },
};
// 构建实例
let messageCore = new Core.message(messageCfg);
// 此时可解析的报文加密前的结构为：
// {
//   HEAD: {
//     SIGN: 'xxxxxxxxxxxxxxxx'
//   },
//   BODY: {
//     key1: 'xxxxxx',
//     key2: 'xxxxxx',
//     key3: 'xxxxxx',
//     timestamp: 'xxxxxx'
//   }
// }
// 此时返回的报文结构为
// {
//   HEAD: {
//     code: 'xxxxxx',
//     msg: 'xxxxxx'
//   },
//   BODY: {
//     key1: 'xxxxxx',
//     key2: 'xxxxxx',
//     key3: 'xxxxxx'
//   }
// }
```

<a id="3.8.2"></a>
#### 3.8.2 messageCore.parse(limit, encryptMsg, callBack)
> **API说明:**  
> 使用```parse()```方法，可以将加密后的报文字符串，解析成为报文的原始结构。  
> 默认解析过程如下：  
> 1. 调用```messageCore.decrypt(encryptMsg, callBack)```，将加密后的报文解密为未加密的报文字符串。  
> 2. 调用```messageCore.buildMessageObj(decryptedMsg, callBack)```，将未加密的报文字符串构建为报文字符串。  
> 3. 调用```messageCore.checkSign(messageObj, callBack)```，验证报文的签名。  
> 4. 调用```messageCore.checkTimestamp(messageObj, callBack)```，校验报文的时效性。  
> 5. 调用```messageCore.checkParams(limit, messageObj, callBack)```，校验报文原始结构的参数。  
> 6. 调用```messageCore.getBody(messageObj)```，将报文原始结构返回。
> <font color="red">**在通过继承方式实现自定义MessageCore时，可通过重写此方法来改变报文的解析规则。**</font>

> **参数列表:**  
> **1. limit\<Object\>**  
> 报文的原始结构参数限制模型，**必传项**，为**对象类型**。详细描述见**[```Core.checker.check()```](#3.13.1)**。  
> **2. encryptedMsg\<String\>**  
> 加密后的报文字符串，**必传项**，为**字符串**。  
> **3. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  
>> **body\<Object\>：**原始报文，为**对象类型**。  
>> **err\<String\>：**错误信息，为**字符串**。  

> **样例代码:**
> 
```
// 需要执行3.8.1的样例代码
// 原始报文
let p = {
  key1: 'value1',
  key7: 'value7',
  key9: 'value9',
  key5: 'value5',
  key4: 'value4',
  key2: 'value2',
  key3: 'value3',
  timestamp: Core.time.getTimestamp(),
};
// 加签，并构造报文结构
let msgObj = {
  HEAD: {
    SIGN: Core.crypto.MD5(JSON.stringify(messageCore.mapSort(p)) + signKey),
  },
  BODY: p,
};
// 加密
let oriMessage = Core.crypto.aesEncrypt(JSON.stringify(msgObj), aesKey);
// 参数模型
let messageLimit = {
  essential: 'y',
  paramModels: {
    key1: {
      type: Core.macro.VALUE_TYPE_STRING,
      limit: {
        essential: 'y',
        regExp: /^value[1]*$/,
      },
    },
    key2: {
      type: Core.macro.VALUE_TYPE_STRING,
      limit: {
        essential: 'y',
        regExp: /^value[2]*$/,
      },
    },
    key3: {
      type: Core.macro.VALUE_TYPE_STRING,
      limit: {
        essential: 'y',
        regExp: /^value[3]*$/,
      },
    },
    key4: {
      type: Core.macro.VALUE_TYPE_STRING,
      limit: {
        essential: 'y',
        regExp: /^value[4]*$/,
      },
    },
    key5: {
      type: Core.macro.VALUE_TYPE_STRING,
      limit: {
        essential: 'y',
        regExp: /^value[5]*$/,
      },
    },
    key7: {
      type: Core.macro.VALUE_TYPE_STRING,
      limit: {
        essential: 'y',
        regExp: /^value[7]*$/,
      },
    },
    key9: {
      type: Core.macro.VALUE_TYPE_STRING,
      limit: {
        essential: 'y',
        regExp: /^value[9]*$/,
      },
    },
  },
};
// 进行解析
messageCore.parse(messageLimit, oriMessage, (result, body, err) => {
  console.log(result);
  console.log(body);
  console.log(err);
});
```

<a id="3.8.3"></a>
#### 3.8.3 messageCore.decrypt(encryptedMsg, callBack)
> **API说明:**  
> ```decrypt()```用来将加密后的报文字符串解密，**默认情况下使用AES-256-ECS**。  
> <font color="red">**在通过继承方式实现自定义MessageCore时，可通过重写此方法来改变报文的解密规则。**</font>

> **参数列表:**  
> **1. encryptedMsg\<String\>**  
> 加密后的报文字符串，**必传项**，为**字符串**。  
> **2. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  
>> **decryptedMsg\<String\>：**明文报文字符串，为**字符串**。  
>> **err\<String\>：**错误信息，为**字符串**。  

> **样例代码:**
> 
```
// 需要执行3.8.1、3.8.2的样例代码
messageCore.decrypt(oriMessage, (result, decryptedMsg, err) => {
  console.log(result);
  console.log(decryptedMsg);
  console.log(err);
});
```

<a id="3.8.4"></a>
#### 3.8.4 messageCore.buildMessageObj(decryptedMsg, callBack)
> **API说明:**  
> ```buildMessageObj()```方法用来将解密后的报文字符串转为报文的Object。**默认情况下会对解密后的报文进行JSON反序列化**。  
> <font color="red">**在通过继承方式实现自定义MessageCore时，可通过重写此方法来改变报文的构建规则。**</font>

> **参数列表:**  
> **1. decryptedMsg\<String\>**  
> 解密后的报文字符串，**必传项**，为**字符串**。  
> **2. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  
>> **messageObj\<String\>：**报文的Object，为**字符串**。  
>> **err\<String\>：**错误信息，为**字符串**。  

> **样例代码:**
> 
```
// 需要执行3.8.1的样例代码
let decryptedMsg = '{"HEAD":{"SIGN":"13c7728c2e7aa60a1dbda37773255545"},"BODY":{"key1":"value1","key7":"value7","key9":"value9","key5":"value5","key4":"value4","key2":"value2","key3":"value3","timestamp":1541221015575}}';
messageCore.buildMessageObj(decryptedMsg, (result, messageObj, err) => {
  console.log(result);
  console.log(messageObj);
  console.log(err);
});
```

<a id="3.8.5"></a>
#### 3.8.5 messageCore.checkSign(messageObj, callBack)
> **API说明:**  
> ```checkSign()```方法用来验证报文的数字签名是否正确。**默认情况下会取报文结构body中的原始报文使用[```Core.utils.mapSort()```](#3.16.1)按自然升序转为JSON并拼接签名密钥后对整体取MD5值，与报文结构header.sign中的值比较进行验签**。  
> <font color="red">**在通过继承方式实现自定义MessageCore时，可通过重写此方法来改变报文的验签规则。**</font>

> **参数列表:**  
> **1. messageObj\<Object\>**  
> 含有完整报文结构的对象，**必传项**，为**对象类型**。  
> **2. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  
>> **err\<String\>：**错误信息，为**字符串**。  

> **样例代码:**
> 
```
// 需要执行3.8.1的样例代码
let messageObj = {
  HEAD: { SIGN: '13c7728c2e7aa60a1dbda37773255545' },
  BODY: {
    key1: 'value1',
    key7: 'value7',
    key9: 'value9',
    key5: 'value5',
    key4: 'value4',
    key2: 'value2',
    key3: 'value3',
    timestamp: 1541221015575
  }
};
messageCore.checkSign(messageObj, (result, err) => {
  console.log(result);
  console.log(err);
});
```

<a id="3.8.6"></a>
#### 3.8.6 messageCore.checkTimestamp(messageObj, callBack)
> **API说明:**  
> ```checkTimestamp()```方法用来验证报文的时效性。**默认情况下会取报文结构body.timestamp中的时间戳，与当前时间比较，当差值处于[-effectTime,+effectTime]时认为报文有效**。  
> <font color="red">**在通过继承方式实现自定义MessageCore时，可通过重写此方法来改变报文的时效性校验规则。**</font>

> **参数列表:**  
> **1. messageObj\<Object\>**  
> 含有完整报文结构的对象，**必传项**，为**对象类型**。  
> **2. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  
>> **err\<String\>：**错误信息，为**字符串**。  

> **样例代码:**
> 
```
// 需要执行3.8.1的样例代码
let messageObj = {
  HEAD: { SIGN: '13c7728c2e7aa60a1dbda37773255545' },
  BODY: {
    key1: 'value1',
    key7: 'value7',
    key9: 'value9',
    key5: 'value5',
    key4: 'value4',
    key2: 'value2',
    key3: 'value3',
    timestamp: 1541221015575
  }
};
messageCore.checkTimestamp(messageObj, (result, err) => {
  console.log(result);
  console.log(err);
});
```

<a id="3.8.7"></a>
#### 3.8.7 messageCore.checkParams(limit, messageObj, callBack)
> **API说明:**  
> ```checkParams()```方法用来进行报文参数校验。**默认情况下会取报文结构body与传入的参数限制模型limit使用[```Core.checker.check()```](#3.13.1)进行校验**。  
> <font color="red">**在通过继承方式实现自定义MessageCore时，可通过重写此方法来改变报文的参数校验规则。**</font>

> **参数列表:**  
> **1. limit\<Object\>**  
> 报文的原始结构参数限制模型，**必传项**，为**对象类型**。详细描述见**[```Core.checker.check()```](#3.13.1)**。  
> **2. messageObj\<Object\>**  
> 含有完整报文结构的对象，**必传项**，为**对象类型**。  
> **3. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  
>> **err\<String\>：**错误信息，为**字符串**。  

> **样例代码:**
> 
```
// 需要执行3.8.1、3.8.2的样例代码
let messageObj = {
  HEAD: { SIGN: '13c7728c2e7aa60a1dbda37773255545' },
  BODY: {
    key1: 'value1',
    key7: 'value7',
    key9: 'value9',
    key5: 'value5',
    key4: 'value4',
    key2: 'value2',
    key3: 'value3',
    timestamp: 1541221015575
  }
};
messageCore.checkParams(messageLimit, messageObj, (result, err) => {
  console.log(result);
  console.log(err);
});
```

<a id="3.8.8"></a>
#### 3.8.8 messageCore.getHeader(messageObj)
> **API说明:**  
> ```getHeader()```方法用来获取报文头部内容，即直接获取配置项中receivedMsg.header的key值进行取值。  

> **参数列表:**  
> **1. messageObj\<Object\>**  
> 含有完整报文结构的对象，**必传项**，为**对象类型**。  

> **结果说明:**  
> **1. result\<Object\>**  
> 报文头部Object，为**对象类型**。  

> **样例代码:**
> 
```
// 需要执行3.8.1的样例代码
let messageObj = {
  HEAD: { SIGN: '13c7728c2e7aa60a1dbda37773255545' },
  BODY: {
    key1: 'value1',
    key7: 'value7',
    key9: 'value9',
    key5: 'value5',
    key4: 'value4',
    key2: 'value2',
    key3: 'value3',
    timestamp: 1541221015575
  }
};
let header = messageCore.getHeader(messageObj);
```

<a id="3.8.9"></a>
#### 3.8.9 messageCore.getSign(messageObj)
> **API说明:**  
> ```getSign()```方法用来获取报文的数字签名内容，即直接获取配置项中receivedMsg.header.content.sign的key值进行取值。  

> **参数列表:**  
> **1. messageObj\<Object\>**  
> 含有完整报文结构的对象，**必传项**，为**对象类型**。  

> **结果说明:**  
> **1. result\<String\>**  
> 报文的数字签名，为**字符串**。  

> **样例代码:**
> 
```
// 需要执行3.8.1的样例代码
let messageObj = {
  HEAD: { SIGN: '13c7728c2e7aa60a1dbda37773255545' },
  BODY: {
    key1: 'value1',
    key7: 'value7',
    key9: 'value9',
    key5: 'value5',
    key4: 'value4',
    key2: 'value2',
    key3: 'value3',
    timestamp: 1541221015575
  }
};
let sign = messageCore.getSign(messageObj);
```

<a id="3.8.10"></a>
#### 3.8.10 messageCore.getBody(messageObj)
> **API说明:**  
> ```getBody()```方法用来获取报文体内容，即直接获取配置项中receivedMsg.body的key值进行取值。  

> **参数列表:**  
> **1. messageObj\<Object\>**  
> 含有完整报文结构的对象，**必传项**，为**对象类型**。  

> **结果说明:**  
> **1. result\<Object\>**  
> 报文体内容，为**对象类型**。  

> **样例代码:**
> 
```
// 需要执行3.8.1的样例代码
let messageObj = {
  HEAD: { SIGN: '13c7728c2e7aa60a1dbda37773255545' },
  BODY: {
    key1: 'value1',
    key7: 'value7',
    key9: 'value9',
    key5: 'value5',
    key4: 'value4',
    key2: 'value2',
    key3: 'value3',
    timestamp: 1541221015575
  }
};
let body = messageCore.getBody(messageObj);
```

<a id="3.8.11"></a>
#### 3.8.11 messageCore.getTimestamp(messageObj)
> **API说明:**  
> ```getTimestamp()```方法用来获取报文的时间戳，即直接获取配置项中receivedMsg.body.content.timestamp的key值进行取值。  

> **参数列表:**  
> **1. messageObj\<Object\>**  
> 含有完整报文结构的对象，**必传项**，为**对象类型**。  

> **结果说明:**  
> **1. result\<Integer\>**  
> 报文的时间戳，为**整型数字**。  

> **样例代码:**
> 
```
// 需要执行3.8.1的样例代码
let messageObj = {
  HEAD: { SIGN: '13c7728c2e7aa60a1dbda37773255545' },
  BODY: {
    key1: 'value1',
    key7: 'value7',
    key9: 'value9',
    key5: 'value5',
    key4: 'value4',
    key2: 'value2',
    key3: 'value3',
    timestamp: 1541221015575
  }
};
let timestamp = messageCore.getTimestamp(messageObj);
```

<a id="3.8.12"></a>
#### 3.8.12 messageCore.buildBackMsg(code, msg, body)
> **API说明:**  
> ```buildBackMsg()```方法用来构造返回的报文，即按照配置项backMsg中配置的报文格式构建报文。  

> **参数列表:**  
> **1. code\<String\>**  
> 执行代码，**必传项**，为**字符串**。  
> **2. msg\<String\>**  
> 执行描述，**必传项**，为**字符串**。  
> **3. body\<Object\>**  
> 报文体，**必传项**，为**对象类型**。  

> **结果说明:**  
> **1. result\<Object\>**  
> 具有报文结构的完整报文，为**对象类型**。  

> **样例代码:**
> 
```
// 需要执行3.8.1的样例代码
let messageObj = messageCore.buildBackMsg('111111', '登录成功', { token: '1111111111111111', userName: 'TestUserName' });
```

<a id="3.8.13"></a>
#### 3.8.13 自定义MessageCore
> **样例代码:**
> 
```
// 自定义MessageCore解析报文时，默认接受一个字符串型，解析后返回报文key深度升序排序的Object
class CustomerMessageCore extends Core.message {
  parse(message, callBack) {
    callBack(true, Core.utils.mapDeepSort(JSON.parse(message)));
  }
}
// 构建MessageCore
let customMsgCfg = {
  id: 'Message_02',
};
let customMsgCore = new CustomerMessageCore(customMsgCfg);
// 执行解析
let testMessage = '{"key3":"value3","key7":"value7","key1":"value1","key4":"value4","key2":{"subKey2":"svalue2","subKey7":"svalue7","subKey3":"svalue3","subKey1":"svalue1"}}';
Core.control.getInstance(Core.macro.CORE_TYPE_NAME_MESSAGE, 'Message_02')
  .parse(testMessage, (result, obj) => {
    console.log(result);
    console.log(obj);
  });
```

<a id="3.9"></a>
### 3.9 Core.control
> **说明:**  
> 0. ControlCore用于在全局中托管/获取实例，同时也可作为事件总线分发和传递事件。  
> 1. ```Core.control```为全局单例，在框架加载的时候进行自初始化。  
> 2. ```Core.control```可以对MysqlCore、MongodbCore、ServerCore、FastDFSCore、MessageCore及自定义对象进行托管。  
> 3. ```Core.control```继承自```events```，可以使用NodeJS文档中Events模块的方法。   
> 4. ```Core.control```托管/获取核心实例时，推荐使用```Core.macro```中的宏定义来标识核心的类型。  

<a id="3.9.1"></a>
#### 3.9.1 Core.control.setInstance(type, instance[, idKeyName])
> **API说明:**  
> 使用```setInstance()```方法向ControlCore中托管一个实例，托管完成后，可以在之后的生命周期中任意获取此实例。<font color="red">**此方法在核心实例构建时会自动调用，一般情况下不需要显式调用**</font>。

> **参数列表:**  
> **1. type\<String\>**  
> 实例的类型，**必传项**，为**特定字符串**，可选值为
> 
```
[Core.macro.CORE_TYPE_NAME_MYSQL,
Core.macro.CORE_TYPE_NAME_SERVER,
Core.macro.CORE_TYPE_NAME_MONGODB,
Core.macro.CORE_TYPE_NAME_FASTDFS,
Core.macro.CORE_TYPE_NAME_MESSAGE]
```
> **2. instance\<Object\>**  
> 实例变量，**必传项**，为**对象类型**。
> **3. idKeyName\<String\>**  
> 标识实例的字段名，**非必传项**，为**字符串**，默认值为**'id'**。

> **结果说明:**  
> **1. result\<Boolean\>**  
> 执行结果，为**布尔类型**。

> **样例代码**
>
```
let serverCoreInstance = {
  serverId: 'Server_01'
};
let result = Core.control.setInstance(Core.macro.CORE_TYPE_NAME_SERVER, serverCoreInstance, 'serverId');
```

<a id="3.9.2"></a>
#### 3.9.2 Core.control.getInstance(type, id)
> **API说明:**  
> 使用```getInstance()```方法从ControlCore中获取一个实例。  

> **参数列表:**  
> **1. type\<String\>**  
> 实例的类型，**必传项**，为**特定字符串**，可选值为
> 
```
[Core.macro.CORE_TYPE_NAME_MYSQL,
Core.macro.CORE_TYPE_NAME_SERVER,
Core.macro.CORE_TYPE_NAME_MONGODB,
Core.macro.CORE_TYPE_NAME_FASTDFS,
Core.macro.CORE_TYPE_NAME_MESSAGE]
```
> **2. id\<String\>**  
> 实例的ID，**必传项**，为**字符串**。

> **结果说明:**  
> **1. instance\<Object\>**  
> 获取到的实例对象，为**对象类型**。

> **样例代码**
>
```
// 需要执行3.9.1的样例代码
let instance = Core.control.getInstance(Core.macro.CORE_TYPE_NAME_SERVER, 'Server_01');
```

<a id="3.9.3"></a>
#### 3.9.3 Core.control.setObject(id, instance)
> **API说明:**  
> 使用```setObject()```方法向ControlCore中委托一个Object。<font color="red">**务必注意托管的内容是值还是引用，托管引用的情况下，若原对象发生修改，ControlCore中的内容也将被修改**</font>。   

> **参数列表:**  
> **1. id\<String\>**  
> 托管对象的ID，**必传项**，为**字符串**。
> **2. instance\<Object\>**  
> 托管的对象，**必传项**，为**对象类型**。

> **结果说明:**  
> **1. result\<Boolean\>**  
> 执行结果，为**布尔类型**。

> **样例代码**
>
```
let o = {
  value: 'value'
};
let result = Core.control.setObject('obj_01', o);
```

<a id="3.9.4"></a>
#### 3.9.4 Core.control.getObject(id)
> **API说明:**  
> 使用```getObject()```方法从ControlCore中获取一个Object。

> **参数列表:**  
> **1. id\<String\>**  
> 托管对象的ID，**必传项**，为**字符串**。

> **结果说明:**  
> **1. object\<Object\>**  
> 托管的对象，为**对象类型**。

> **样例代码**
>
```
// 需要执行3.9.3的样例代码
let object = Core.control.getObject('obj_01');
```

<a id="3.9.5"></a>
#### 3.9.5 Core.control.removeObject(id)
> **API说明:**  
> 使用```removeObject()```方法从ControlCore中删除一个已托管的Object。

> **参数列表:**  
> **1. id\<String\>**  
> 托管对象的ID，**必传项**，为**字符串**。

> **结果说明:**  
> **1. result\<Boolean\>**  
> 执行结果，为**布尔类型**。

> **样例代码**
>
```
// 需要执行3.9.3的样例代码
let result = Core.control.removeObject('obj_01');
```

<a id="3.9.6"></a>
#### 3.9.6 Core.control.emit(eventName[, ...args])
> **API说明:**  
> 使用```emit()```方法触发一个ControlCore中的事件监听器。**继承自NodeJS基本事件模块Events的方法**。<font color="red">使用时需注意控制生命周期，如果事件触发时，监听器还未被挂载，则事件无法触发。</font>  

> **参数列表:**  
> **1. eventName\<String\>**  
> 事件的名称，**必传项**，为**字符串**。  
> **2. ...args\<Array\>**  
> 事件附带的参数，**非必传项**，为**数组类型**。附带的参数会直接传入事件的监听器回调中，详情见**[```Core.control.on()```](#3.9.7)**和**[```Core.control.once()```](#3.9.8)**。

> **样例代码**
>
```
Core.control.emit('event_01', 'data1', 'data2', 'data3');
```

<a id="3.9.7"></a>
#### 3.9.7 Core.control.on(eventName, callBack)
> **API说明:**  
> 使用```on()```方法向ControlCore中注册一个持久的事件监听器。**继承自NodeJS基本事件模块Events的方法**。<font color="red">使用时需注意控制生命周期，如果事件触发时，监听器还未被挂载，则事件无法触发。</font>  

> **参数列表:**  
> **1. eventName\<String\>**  
> 事件的名称，**必传项**，为**字符串**。  
> **2. callBack\<Function\>**  
> 事件触发回调，**必传项**，为**函数类型**。
>> 参数列表为：  
>> **...args\<Array\>：**触发事件监听器的时候附带的参数。
 

> **样例代码**
>
```
Core.control.on('event_01', (p1, p2, p3) => {
  console.log(p1);
  console.log(p2);
  console.log(p3);
});
// 如要触发需执行3.9.6的样例代码
```

<a id="3.9.8"></a>
#### 3.9.8 Core.control.once(eventName, callBack)
> **API说明:**  
> 使用```once()```方法向ControlCore中注册一个一次性的事件监听器，此监听器触发一次后将被移除。**继承自NodeJS基本事件模块Events的方法**。<font color="red">使用时需注意控制生命周期，如果事件触发时，监听器还未被挂载，则事件无法触发。</font>  

> **参数列表:**  
> **1. eventName\<String\>**  
> 事件的名称，**必传项**，为**字符串**。  
> **2. callBack\<Function\>**  
> 事件触发回调，**必传项**，为**函数类型**。
>> 参数列表为：  
>> **...args\<Array\>：**触发事件监听器的时候附带的参数。
 

> **样例代码**
>
```
Core.control.once('event_01', (p1, p2, p3) => {
  console.log(p1);
  console.log(p2);
  console.log(p3);
});
// 如要触发需执行3.9.6的样例代码
```

<a id="3.9.9"></a>
#### 3.9.9 Core.control.removeEvent([eventName])
> **API说明:**  
> 使用```removeEvent()```方法可以移除ControlCore中的某个或全部事件的监听器。  

> **参数列表:**  
> **1. eventName\<String\>**  
> 事件的名称，**非必传项**，为**字符串**。当不传此项时，将移除ControlCore中全部的事件监听器。   

> **样例代码**
>
```
Core.control.removeEvent('event_01');
```

<a id="3.10"></a>
### 3.10 Core.safe
**<font color="red">推荐在Master进程中（即[AppMain](#3.12)有关于Master进程的HOOK函数中）对SafeCore进行配置和操作。</font>**
> **说明:**  
> 0. SafeCore用于对包进行加签和验签，以保证发布时包的完整性。  
> 1. ```Core.safe```为全局单例，在框架加载的时候进行自初始化。  
> 2. ```Core.safe```须使用```Core.safe.configure()```进行配置后方可正常工作。  
> 3. ```Core.safe```可以配置是否启用签名。   
> 4. ```Core.safe```在验签时会检测当前配置的运行环境，只在生产环境时才会进行验签操作。  
> 5. ```Core.safe```在进行验签时，将会自动推算当前运行的可执行文件的实际路径进行验签。  
> 6. ```Core.safe```在进行签名时，将会自动推算可执行文件的实际路径进行签名，此时务必保证可执行文件已存在。  
> 7. ```Core.safe```的配置项与使用工程包时打包配置项相同。

<a id="3.10.1"></a>
#### 3.10.1 Core.safe.configure(insId, environment, cfg)
> **API说明:**  
> 使用```configure()```传入当前运行实例的ID、环境和配置项对SafeCore进行配置，配置后SafeCore方可按照预期功能工作。  
> 当开启负载均衡时：  
>> 执行```signFile()```操作：  
>> SafeCore会推算``` `${生产包绝对路径}${可执行文件名}${实例ID}${可执行文件后缀名}` ```作为原始加签文件，输出的签名文件名中也会包含实例ID，签名文件为``` `${生产包绝对路径}${签名文件夹}${文件系统分割标志}Sign${实例ID}` ```。  
>> 执行```verify()```操作：  
>> SafeCore会推算``` `${process.cwd()}${文件系统分割标志}${可执行文件名}${实例ID}${可执行文件后缀名}` ```作为原始验签文件，若验签失败则使node进程crash。

> **参数列表:**  
> **1. insId\<Integer\>**  
当前运行实例的ID，**必传项**，为**整型数字**。会根据负载均衡状态推算生产可执行文件名或签名信息。  
> **2. environment\<String\>**   
> 当前运行实例的环境，**必传项**，为**特定字符串**，可选值为**['dev','prod']**。dev环境下执行```verify()```时不执行实际的验签操作；prod环境下如果配置正确且有效，将会根据负载均衡状态推算出生产可执行文件名和与之对应的签名信息进行验签。  
> **3. cfg\<Object\>**  
> SafeCore的配置项，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **version\<String\>：**版本号，**必传项**，为**字符串**。将作为密钥种子生成随机的加密密钥。  
>> **loadBalanceState\<String\>：**负载均衡状态，**必传项**，为**特定字符串**，可选值为**['open','close']**。  
>> **productFolderPath\<String\>：**生产文件夹的绝对路径，**必传项**，为**字符串**，且**<font color="red">必须以文件系统分隔符(例：/)结尾（V1.0.6.1后的版本不需要此要求）</font>**。  
>> **execFileName\<String\>：**打包的可执行文件名，**必传项**，为**字符串**。  
>> **sign\<Object\>：**签名配置，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。   
>>> 可配置选项名有：  
>>> **state\<String\>：**签名开关，**必传项**，为**特性字符串**，可选值为**['open','close']**。  
>>> **signFolderName\<String\>：**签名存储文件夹名，**必传项**，为**字符串**。  
>>> **keySourcePath\<String\>：**密钥文件夹的绝对路径，**必传项**，为**字符串**，且**必须以文件系统分隔符(例：/)结尾（V1.0.6.1后的版本不需要此要求）**。  
>>> **privateKeyName\<String\>：**私钥文件名，**必传项**，为**字符串**。为PKCS8-PEM类型密钥。  
>>> **signFolderName\<String\>：**公钥文件名，**必传项**，为**字符串**。为PKCS8-PEM类型密钥。  
 
> **样例代码**
>
```
let Core = require('Core.js');
let buildCfg = {
  version: 'V1.0.0.0', 																	// 版本号
  loadBalanceState: 'open', 															// 负载均衡状态
  productFolderPath: '/Users/Douzi/Desktop/SuperFrameForNodeJS_V1.0.6.0/DZSuperFrame/', // 生产文件夹绝对路径
  execFileName: 'main.js', 																// 可执行文件名
  // 签名配置
  sign: {
    state: 'open', 																		// 签名开关
    signFolderName: 'CodeSign', 														// 签名存储文件夹名
    keySourcePath: '/Users/Douzi/Server/DZSuperFrame/key/', 							// 密钥绝对路径
    privateKeyName: 'Private_PKCS8.pem', 												// 私钥文件名
    publicKeyName: 'Public_PKCS8.pem' 													// 公钥文件名
  },
};
Core.safe.configure(0, 'prod', buildCfg);
```

<a id="3.10.2"></a>
#### 3.10.2 Core.safe.signFile(callBack)
> **API说明:**  
> 使用```signFile()```对已打包的可执行文件进行签名。

> **参数列表:**  
> **1. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  
>> **signaturePath\<String\>：**签名文件路径，为**字符串**。  
>> **err\<String\>：**错误描述，为**字符串**。  

> **样例代码:**
>
```
// 需执行3.10.1的样例代码
Core.safe.signFile((result, signaturePath, err) => {
  console.log(result);
  console.log(signaturePath);
  console.log(err);
});
```

<a id="3.10.3"></a>
#### 3.10.3 Core.safe.verify()
> **API说明:**  
> 使用```verify()```对当前执行的文件进行验签。

> **样例代码:**
>
```
// 需执行3.10.1的样例代码
Core.safe.verify();
```

<a id="3.11"></a>
### 3.11 Core.cluster
> **说明:**  
> 0. ClusterCore用于开启多线程模式，采用Master-Worker模型，进程间通过IPC进行通讯。  
> 1. ```Core.cluster```为全局单例，在框架加载的时候进行自初始化。  
> 2. ```Core.cluster```须使用[```Core.cluster.initWithAppMain()```](#3.11.3)指定一个继承自[```Core.appMain```](#3.12)的类（构造函数）作为应用入口。  
> 3. ```Core.cluster```在配置入口后需要调用[```Core.cluster.start()```](#3.11.4)触发AppMain中的```Core.appMain.onMasterProcessDidInit()```。  
> 4. ```Core.cluster```对IPC/Fork进程等进行了封装。   
> 5. ```Core.cluster```支持多进程级别的全局对象的读写。  
> 6. ```Core.cluster```在Worker进程意外退出后，将会重启新的Worker进程并复用原有进程索引。    

<a id="3.11.1"></a>
#### 3.11.1 Core.cluster.index
> **API说明:**  
> ```Core.cluster.index```**<font color="red">可在Master/Worker进程中使用</font>**，是一个属性，用来获取当前运行进程的进程索引。  


> **结果说明:**  
> **1. processIndex\<String/Interger\>**  
> 进程索引，为**字符串/整型数字**。当前运行进程为Master进程时，进程索引为**'M'**；当前运行进程为Worker时，进程索引为大于等于0的**整型数字**。

> **样例代码:**  
> 
```
let Core = require('Core.js');
console.log(Core.cluster.index);
```

<a id="3.11.2"></a>
#### 3.11.2 Core.cluster.getType()
> **API说明:**  
> ```getType()```**<font color="red">可在Master/Worker进程中使用</font>**，用来获取当前运行进程的进程类型。  

> **结果说明:**  
> **1. processType\<String\>**  
> 进程类型，为**特定字符串**，可选值为**```[Core.macro.CLUSTER_TYPE_MASTER, Core.macro.CLUSTER_TYPE_WORKER]```**。当在Master进程执行时，结果为```Core.macro.CLUSTER_TYPE_MASTER ```，当在Worker进程执行时，结果为```Core.macro.CLUSTER_TYPE_WORKER ```。

> **样例代码:**  
> 
```
let Core = require('Core.js');
console.log(Core.cluster.getType());
```

<a id="3.11.3"></a>
#### 3.11.3 Core.cluster.initWithAppMain(appMain)
> **API说明:**  
> ```initWithAppMain()```**<font color="red">可在Master/Worker进程中使用</font>**，用来指定程序入口并初始化ClusterCore。关于AppMain的详细说明见[3.12 Core.appMain](#3.12)  

> **参数列表:**  
> **1. appMain\<AppMain\>**  
> AppMain，**必传项**，为**AppMain或其子类**。程序入口，需要是一个继承自[```Core.appMain```](#3.12)的类（构造函数）。  

> **样例代码:**  
> 
```
let Core = require('Core.js');
// 定义AppMain
class AppMain extends Core.appMain {
  // Master线程初始化完成
  onMasterProcessDidInit(masterProcessIndex) {
    console.log('Master Did Init');
    // 执行Worker进程Fork操作
    Core.cluster.forkWithWorkerProcessNum(4);
  }
  // Worker线程初始化完成
  onWorkerProcessDidInit(workerProcessIndex) {
    console.log('Worker Did Init');
  }
}
// 执行初始化
Core.cluster.initWithAppMain(AppMain);
```

<a id="3.11.4"></a>
#### 3.11.4 Core.cluster.start()
> **API说明:**  
> ```start()```**<font color="red">可在Master/Worker进程中使用</font>**，在Master进程中调用时，将会触发Master进程的初始化操作，Master进程初始化完成后将会调用[```Core.appMain.onMasterProcessDidInit()```](#3.12.2)；在Worker进程使用时，不执行任何操作。  

> **样例代码:**  
> 
```
// 需执行3.11.3的样例代码
// 执行后将触发Master线程初始化
Core.cluster.start();
```

<a id="3.11.5"></a>
#### 3.11.5 Core.cluster.shutdown()
> **API说明:**  
> ```shutdown()```**<font color="red">可在Master/Worker进程中使用</font>**，用来退出整个进程（组）。  

> **样例代码:**  
> 
```
let Core = require('Core.js');
// 退出进程(组)
Core.cluster.shutdown();
```

<a id="3.11.6"></a>
#### 3.11.6 Core.cluster.setGlobalObject(key, value, callBack)
> **API说明:**  
> ```setGlobalObject()```**<font color="red">可在Master/Worker进程中使用</font>**，用来在全局（进程组）对象中设置一个field。  

> **参数列表:**  
> **1. key\<String\>**  
> 待设置值的ID，**必传项**，为**字符串**。获取全局对象时需要使用此ID。  
> **2. value\<Object/Number/Boolean/String\>**  
> 待设置值，**必传项**，为**对象类型/数字/布尔/字符串**。  
> **3. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  
>> **globalObject\<Object\>：**设置后当前的全局（进程组）对象，为**对象类型**。  

> **样例代码:**  
> 
```
let Core = require('Core.js');
let key = 'GlobalObject1';
let value = {
  key1: 'value1'
};
// 写入key='GlobalObject1'的值
Core.cluster.setGlobalObject(key, value, (result, globalObject) => {
  console.log(result);
  console.log(globalObject);
});
```

<a id="3.11.7"></a>
#### 3.11.7 Core.cluster.getGlobalObject([key], callBack)
> **API说明:**  
> ```getGlobalObject()```**<font color="red">可在Master/Worker进程中使用</font>**，用来在全局（进程组）对象中获取一个field。  

> **参数列表:**  
> **1. key\<String\>**  
> 待获取值的ID，**非必传项**，为**字符串**。设置全局对象时使用的ID，若不传则为获取整个全局对象。  
> **2. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  
>> **objectInfo\<Object\>：**从全局（进程组）对象中获取到的field，为**对象类型**。  

> **样例代码:**  
> 
```
// 需执行3.11.6的样例代码
// 获取key='GlobalObject1'的值
Core.cluster.getGlobalObject(key, (result, objectInfo) => {
  console.log(result);
  console.log(objectInfo);
});
```

<a id="3.11.8"></a>
#### 3.11.8 Core.cluster.workers
> **API说明:**  
> ```Core.cluster.workers```**<font color="red">仅可在Master进程中使用</font>**，是一个属性，用来获取进程组中所有的Worker进程。  


> **结果说明:**  
> **1. workers\<Array\<Object\>\>**  
> 进程组中的Worker进程，为**数组类型<对象类型>**。
>> 字段说明：  
>> **index\<Integer\>：**Worker进程的索引，为**整型数字**。  
>> **pid\<Integer\>：**Worker进程的PID，为**整型数字**。  
>> **workerProcess\<Worker\>：**Worker进程的进程实例，为**Worker(NodeJS)类型**。  


> **样例代码:**  
> 
```
let Core = require('Core.js');
console.log(Core.cluster.workers);
```

<a id="3.11.9"></a>
#### 3.11.9 Core.cluster.forkWithWorkerProcessNum(workerProcessNum)
> **API说明:**  
> ```forkWithWorkerProcessNum()```**<font color="red">仅可在Master进程中使用</font>**，用来Fork指定数量的Worker进程，Worker进程初始化完成后将调用[```Core.appMain.onWorkerProcessDidInit()```](#3.12.7)。  

> **参数列表:**  
> **1. workerProcessNum\<Integer\>**  
Worker进程的数量，**必传项**，为**整型数字**。  

> **样例代码:**  
> 
```
let Core = require('Core.js');
Core.cluster.forkWithWorkerProcessNum(4);
```

<a id="3.11.10"></a>
#### 3.11.10 Core.cluster.sendDataToWorker(worker, data, callBack)
> **API说明:**  
> ```sendDataToWorker()```**<font color="red">仅可在Master进程中使用</font>**，用来从Master进程向Worker进程发起IPC通讯。**<font color="red">推荐通过AppMain中的HOOK方法对IPC通信消息进行捕获并处理</font>**。  

> **参数列表:**  
> **1. worker\<Object\>**  
IPC的目标Worker，**必传项**，为**对象类型**。可通过**[```Core.cluster.workers``` ](#3.11.8)**或**AppMain回调方法**获取。  
> **2. data\<Object/Number/Boolean/String\>**  
IPC传输的数据，**必传项**，为**对象/数字/布尔/字符串类型**。**<font color="red">推荐使用含有字段名为type的对象类型作为IPC通信消息，type格式为：[发起方]:[消息名]，例：```{ type: 'MASTER:CUSTOM_EVENT' }```</font>**。  
> **3. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  

> **样例代码:**  
> 
```
let Core = require('Core.js');
let worker = Core.cluster.workers[0];
let data = { key1: 'value1' };
Core.cluster.sendDataToWorker(worker, data, (result) => {
  console.log(result);
});
```

<a id="3.11.11"></a>
#### 3.11.11 Core.cluster.sendDataToMaster(data, callBack)
> **API说明:**  
> ```sendDataToMaster()```**<font color="red">仅可在Worker进程中使用</font>**，用来从Worker进程向Master进程发起IPC通讯。**<font color="red">推荐通过AppMain中的HOOK方法对IPC通信消息进行捕获并处理</font>**。  

> **参数列表:**  
> **1. data\<Object/Number/Boolean/String\>**  
IPC传输的数据，**必传项**，为**对象/数字/布尔/字符串类型**。**<font color="red">推荐使用含有字段名为type的对象类型作为IPC通信消息，type格式为：[发起方]:[消息名]，例：```{ type: 'WORKER:CUSTOM_EVENT' }```</font>**。    
> **2. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  

> **样例代码:**  
> 
```
let Core = require('Core.js');
let data = { key1: 'value1' };
Core.cluster.sendDataToMaster(data, (result) => {
  console.log(result);
});
```

<a id="3.12"></a>
### 3.12 Core.appMain
**<font color="red">在使用ClusterCore的情境下，应用程序执行后将会按照AppMain中指定的响应方式运行。</font>**
> **说明:**  
> 0. AppMain包含应用程序生命周期的HOOK函数，ClusterCore初始化时会实例化单例态的AppMain。  
> 1. 实现AppMain时推荐使用继承的方式，对其中原有的生命周期HOOK函数进行复写。  
> 2. AppMain中Master进程的HOOK函数中的代码将在Master进程运行。  
> 3. AppMain中Worker进程的HOOK函数中的代码将在Worker进程运行。  
> 3. AppMain中可以捕获到IPC通信的所有消息（包含ClusterCore和进程初始化必须进行的系统级别IPC）。  
> 4. AppMain中有完整的IPC通信生命周期，**<font color="red">IPC通信的HOOK中不建议使用AppMain.processIndex</font>**。  

```
// ClusterCore与AppMain联动模型

                                          +-----------------------+
                                          |  // Master中执行       |
                                          |  ClusterCore.start()  |
                                          +-----------+-----------+
                                                      |
                                Master进程执行初始化操作 |
                                                      |
                                                      v
                                +-------------------------------------------+
                                |      // 初始化执行完成后将在Master回调        |
                                |      AppMain.onMasterProcessDidInit()     |
                                +---------------------+---------------------+
                                                      |
                                   当Master成功初始化&& |
                           在Master执行Worker的Fork操作 |
                                                      |
                                                      v
                                +-------------------------------------------+
                                |      // 初始化执行完成后将在Worker回调        |
                                |      AppMain.onWorkerProcessDidInit()     |
                                +-------------------------------------------+
                                
// Master进程处理IPC通信模型

                                           +---------------------+
                                           | IPC Msg From Worker |
                                           +----------+----------+
                                                      |
                                                      |
                                                      |
                                                      v
                          +-------------------------------------------------------+
                          |          // 此函数执行的结果将决定此次IPC是否被舍弃         |
                          |          onMasterProcessWillReceiveMessage()          |
                          +-------------+-------------+-------------+-------------+
                                        |             |             |
                           消息未被舍弃&& |             |             |
                    消息Type非系统默认消息 |             |             |
                                        |             |             |
                                        v             |             |
       +------------------------------------------+   |             |
       | onMasterProcessDidReceiveCustomMessage() |   |             |
       +--------------------+---------------------+   |             |
                            |                         |             |
            自定义消息处理完成 |            消息未被舍弃&& |             |
                            |     消息Type为系统默认消息 |             |
                            |                         |             |
                            v                         v             |
                      +------------------------------------+        |      
                      | onMasterProcessDidReceiveMessage() |        |
                      +------------------------------------+        |
                                                                    |
                                                                    |
                                                         消息将被舍弃 |
                                                                    |
                                                                    v
                                                    +---------------------------------+                
                                                    | onMasterProcessDiscardMessage() |
                                                    +---------------------------------+
// Worker进程处理IPC通信模型


                                           +---------------------+
                                           | IPC Msg From Master |
                                           +----------+----------+
                                                      |
                                                      |
                                                      |
                                                      v
                          +-------------------------------------------------------+
                          |          // 此函数执行的结果将决定此次IPC是否被舍弃         |
                          |          onWorkerProcessWillReceiveMessage()          |
                          +-------------+-------------+-------------+-------------+
                                        |             |             |
                           消息未被舍弃&& |             |             |
                    消息Type非系统默认消息 |             |             |
                                        |             |             |
                                        v             |             |
       +------------------------------------------+   |             |
       | onWorkerProcessDidReceiveCustomMessage() |   |             |
       +--------------------+---------------------+   |             |
                            |                         |             |
            自定义消息处理完成 |            消息未被舍弃&& |             |
                            |     消息Type为系统默认消息 |             |
                            |                         |             |
                            v                         v             |
                      +------------------------------------+        |      
                      | onWorkerProcessDidReceiveMessage() |        |
                      +------------------------------------+        |
                                                                    |
                                                                    |
                                                         消息将被舍弃 |
                                                                    |
                                                                    v
                                                    +---------------------------------+                
                                                    | onWorkerProcessDiscardMessage() |
                                                    +---------------------------------+
                                                    
```

<a id="3.12.1"></a>
#### 3.12.1 AppMain.processIndex
> **API说明:**  
> ```AppMain.processIndex```是一个属性，用来表示当前AppMain运行的进程索引。**<font color="red">此属性在进程初始化完成后由ClusterCore传入，而IPC是进程初始化的重要阶段，故不推荐在IPC通信的生命周期HOOK函数中使用</font>**。

> **结果说明:**  
> **1. processIndex\<String/Interger\>**  
> 进程索引，为**字符串/整型数字**。当前运行进程为Master进程时，进程索引为**'M'**；当前运行进程为Worker时，进程索引为大于等于0的**整型数字**；当Worker进程尚未初始化时，进程索引为**'W:NULL'**。

> **样例代码:**  
> 
```
let Core = require('Core.js');
// 实现AppMain
class AppMain extends Core.appMain {
  // Master进程初始化完成
  onMasterProcessDidInit() {
    console.log(this.processIndex);
    Core.cluster.forkWithWorkerProcessNum(1);
  }
  // Worker进程初始化完成
  onWorkerProcessDidInit() {
    console.log(this.processIndex);
  }
}
// 初始化ClusterCore 
Core.cluster.initWithAppMain(AppMain);
Core.cluster.start();
```

<a id="3.12.2"></a>
#### 3.12.2 AppMain.onMasterProcessDidInit(masterProcessIndex)
> **API说明:**  
> ```onMasterProcessDidInit()```是Master进程初始化完成时将调用的HOOK函数，此后才可在```AppMain.processIndex```中可以获取到当前Master进程的索引。**<font color="red">此HOOK函数中的代码将会运行在Master进程，通常在此HOOK函数中执行[```Core.cluster.forkWithWorkerProcessNum()```](#3.11.9)</font>**。    

> **参数说明:**  
> **1. masterProcessIndex\<String\>**  
> Master进程的索引，为**字符串**，通常情况下为**'M'**。  

> **样例代码:**
> 
```
let Core = require('Core.js');
// 实现AppMain
class AppMain extends Core.appMain {
  // Master进程初始化完成
  onMasterProcessDidInit(masterProcessIndex) {
    console.log(masterProcessIndex);
  }
}
```

<a id="3.12.3"></a>
#### 3.12.3 AppMain.onMasterProcessWillReceiveMessage(worker, data)
> **API说明:**  
> ```onMasterProcessWillReceiveMessage()```是Master进程收到来自Worker进程IPC通信消息时的HOOK函数，此函数为纯函数，不推荐进行异步操作，可以通过控制返回值决定IPC消息是否向下传递或被舍弃。**<font color="red">其中代码将会运行在Master进程，不推荐在此方法中调用[```AppMain.processIndex```](#3.12.1)</font>**。  

> **流程说明:**  
>> 1.当此函数返回null时，则认为此次IPC通信被舍弃，**原IPC通信数据（即参数说明中的data）**将会被传入[```AppMain.onMasterProcessDiscardMessage()```](#3.12.5)。  

>> 2.当返回非null的值时，则认为此次IPC通信会被捕获。

>>> 2.1 如果IPC消息类型不为系统预留类型，则**新IPC通信数据（即结果说明中的nextData）**将会被传入[```AppMain.onMasterProcessDidReceiveCustomMessage()```](#3.12.6)进行自定义IPC消息处理，执行完成后**新IPC通信数据（即结果说明中的nextData）**还会被传入[```AppMain.onMasterProcessDidReceiveMessage()```](#3.12.4)进行最后的IPC消息处理。  

>>> 2.2 如果消息类型为系统预留类型，则会先进行系统默认的处理，结束后将**新IPC通信数据（即结果说明中的nextData）**传入[```AppMain.onMasterProcessDidReceiveMessage()```](#3.12.4)进行最后的IPC消息处理。  

>> 3.会被认为是来自Worker的系统默认IPC通讯消息类型为
>> 
```
[
  Core.macro.CLUSTER_WORKER_IPC_TYPE_GET_WORKER_INDEX,
  Core.macro.CLUSTER_WORKER_IPC_TYPE_SET_GLOBAL_OBJECT,
  Core.macro.CLUSTER_WORKER_IPC_TYPE_GET_GLOBAL_OBJECT,
  Core.macro.CLUSTER_WORKER_IPC_TYPE_SHUTDOWN
]
```

> **参数说明:**  
> **1. worker\<Object\>**  
> IPC通信发起方的Worker进程，为**对象类型**。此对象可以直接传入[```Core.cluster.sendDataToWorker()```](#3.11.10)。  
> **2. data\<Object/Number/Boolean/String\>**  
> IPC通信从Worker发来的数据，为**对象类型/数字/布尔/字符串**。  

> **结果说明:**  
> **1. nextData\<Object/Number/Boolean/String/Null\>**  
> IPC通信继续向下传递的数据，为**对象类型/数字/布尔/字符串/Null**。

> **样例代码:**
> 
```
let Core = require('Core.js');
// 实现AppMain
class AppMain extends Core.appMain {
  onMasterProcessWillReceiveMessage(worker, data) {
    if (data.type === 'WORKER:WILL_DISCARD_MSG') {
      return null;
    } else {
      return data;
    }
  }
}
```

<a id="3.12.4"></a>
#### 3.12.4 AppMain.onMasterProcessDidReceiveMessage(worker, data)
> **API说明:**  
> ```onMasterProcessDidReceiveMessage()```是Master进程处理被捕获的IPC消息最后的HOOK函数，可以在其中进行异步操作。**<font color="red">其中代码将会运行在Master进程，不推荐在此方法中调用[```AppMain.processIndex```](#3.12.1)</font>**。  

> **参数说明:**  
> **1. worker\<Object\>**  
> IPC通信发起方的Worker进程，为**对象类型**。此对象可以直接传入[```Core.cluster.sendDataToWorker()```](#3.11.10)。  
> **2. data\<Object/Number/Boolean/String\>**  
> IPC通信从Worker发来的数据，为**对象类型/数字/布尔/字符串**。<font color="red">此值为[```AppMain.onMasterProcessWillReceiveMessage()```](#3.12.3)的返回值</font>。  

> **样例代码:**
> 
```
let Core = require('Core.js');
// 实现AppMain
class AppMain extends Core.appMain {
  onMasterProcessDidReceiveMessage(worker, data) {
    console.log(`Master Did Receive: ${worker.index} -> ${JSON.stringify(data)}`);
  }
}
```

<a id="3.12.5"></a>
#### 3.12.5 AppMain.onMasterProcessDiscardMessage(worker, data)
> **API说明:**  
> ```onMasterProcessDiscardMessage()```是Master进程处理被舍弃的IPC消息最后的HOOK函数，可以在其中进行异步操作。**<font color="red">其中代码将会运行在Master进程，不推荐在此方法中调用[```AppMain.processIndex```](#3.12.1)</font>**。  

> **参数说明:**  
> **1. worker\<Object\>**  
> IPC通信发起方的Worker进程，为**对象类型**。此对象可以直接传入[```Core.cluster.sendDataToWorker()```](#3.11.10)。  
> **2. data\<Object/Number/Boolean/String\>**  
> IPC通信从Worker发来的数据，为**对象类型/数字/布尔/字符串**。<font color="red">此值为[```AppMain.onMasterProcessWillReceiveMessage()```](#3.12.3)传入的data</font>。  

> **样例代码:**
> 
```
let Core = require('Core.js');
// 实现AppMain
class AppMain extends Core.appMain {
  onMasterProcessDiscardMessage(worker, data) {
    console.log(`Master Discard: ${worker.index} -> ${JSON.stringify(data)}`);
  }
}
```

<a id="3.12.6"></a>
#### 3.12.6 AppMain.onMasterProcessDidReceiveCustomMessage(worker, data)
> **API说明:**  
> ```onMasterProcessDidReceiveCustomMessage()```是Master进程处理被捕获的非系统默认IPC消息的HOOK函数，不推荐在其中进行异步操作。**<font color="red">其中代码将会运行在Master进程，不推荐在此方法中调用[```AppMain.processIndex```](#3.12.1)，此函数执行结束后将会调用[```AppMain.onMasterProcessDidReceiveMessage()```](#3.12.4)</font>**。  

> **参数说明:**  
> **1. worker\<Object\>**  
> IPC通信发起方的Worker进程，为**对象类型**。此对象可以直接传入[```Core.cluster.sendDataToWorker()```](#3.11.10)。  
> **2. data\<Object/Number/Boolean/String\>**  
> IPC通信从Worker发来的数据，为**对象类型/数字/布尔/字符串**。<font color="red">此值为[```AppMain.onMasterProcessWillReceiveMessage()```](#3.12.3)的返回值</font>。  

> **样例代码:**
> 
```
let Core = require('Core.js');
// 实现AppMain
class AppMain extends Core.appMain {
  onMasterProcessDidReceiveCustomMessage(worker, data) {
    console.log(`Master Did Receive Custom: ${worker.index} -> ${JSON.stringify(data)}`);
  }
}
```

<a id="3.12.7"></a>
#### 3.12.7 AppMain.onWorkerProcessDidInit(workerProcessIndex)
> **API说明:**  
> ```onWorkerProcessDidInit()```是Worker进程初始化完成时将调用的HOOK函数，此后才可在```AppMain.processIndex```中可以获取到当前Worker进程的索引。**<font color="red">此HOOK函数中的代码将会运行在Worker进程，通常在此HOOK函数中执行应用程序核心的初始化操作</font>**。    

> **参数说明:**  
> **1. workerProcessIndex\<Integer\>**  
> Worker进程的索引，为**整型数字**。 

> **样例代码:**
> 
```
let Core = require('Core.js');
// 实现AppMain
class AppMain extends Core.appMain {
  // Worker进程初始化完成
  onWorkerProcessDidInit(workerProcessIndex) {
    console.log(workerProcessIndex);
  }
}
```

<a id="3.12.8"></a>
#### 3.12.8 AppMain.onWorkerProcessWillReceiveMessage(data)
> **API说明:**  
> ```onWorkerProcessWillReceiveMessage()```是Worker进程收到来自Master进程IPC通信消息时的HOOK函数，此函数为纯函数，不推荐进行异步操作，可以通过控制返回值决定IPC消息是否向下传递或被舍弃。**<font color="red">其中代码将会运行在Worker进程，不推荐在此方法中调用[```AppMain.processIndex```](#3.12.1)</font>**。  

> **流程说明:**  
>> 1.当此函数返回null时，则认为此次IPC通信被舍弃，**原IPC通信数据（即参数说明中的data）**将会被传入[```AppMain.onWorkerProcessDiscardMessage()```](#3.12.10)。  

>> 2.当返回非null的值时，则认为此次IPC通信会被捕获。

>>> 2.1 如果IPC消息类型不为系统预留类型，则**新IPC通信数据（即结果说明中的nextData）**将会被传入[```AppMain.onWorkerProcessDidReceiveCustomMessage()```](#3.12.11)进行自定义IPC消息处理，执行完成后**新IPC通信数据（即结果说明中的nextData）**还会被传入[```AppMain.onWorkerProcessDidReceiveMessage()```](#3.12.9)进行最后的IPC消息处理。  

>>> 2.2 如果消息类型为系统预留类型，则会先进行系统默认的处理，结束后将**新IPC通信数据（即结果说明中的nextData）**传入[```AppMain.onWorkerProcessDidReceiveMessage()```](#3.12.9)进行最后的IPC消息处理。  

>> 3.会被认为是来自Master系统默认IPC通讯消息类型为
>> 
```
[
  Core.macro.CLUSTER_MASTER_IPC_TYPE_GET_WORKER_INDEX_RESULT,
  Core.macro.CLUSTER_MASTER_IPC_TYPE_SET_GLOBAL_OBJECT,
  Core.macro.CLUSTER_MASTER_IPC_TYPE_SET_GLOBAL_OBJECT_RESULT,
  Core.macro.CLUSTER_MASTER_IPC_TYPE_GET_GLOBAL_OBJECT_RESULT
]
```

> **参数说明:**  
 > **1. data\<Object/Number/Boolean/String\>**  
> IPC通信从Master发来的数据，为**对象类型/数字/布尔/字符串**。  

> **结果说明:**  
> **1. nextData\<Object/Number/Boolean/String/Null\>**  
> IPC通信继续向下传递的数据，为**对象类型/数字/布尔/字符串/Null**。

> **样例代码:**
> 
```
let Core = require('Core.js');
// 实现AppMain
class AppMain extends Core.appMain {
  onWorkerProcessWillReceiveMessage(data) {
    if (data.type === 'MASTER:WILL_DISCARD_MSG') {
      return null;
    } else {
      return data;
    }
  }
}
```

<a id="3.12.9"></a>
#### 3.12.9 AppMain.onWorkerProcessDidReceiveMessage(data)
> **API说明:**  
> ```onWorkerProcessDidReceiveMessage()```是Worker进程处理被捕获的IPC消息最后的HOOK函数，可以在其中进行异步操作。**<font color="red">其中代码将会运行在Worker进程，不推荐在此方法中调用[```AppMain.processIndex```](#3.12.1)</font>**。  

> **参数说明:**   
> **1. data\<Object/Number/Boolean/String\>**  
> IPC通信从Master发来的数据，为**对象类型/数字/布尔/字符串**。<font color="red">此值为[```AppMain.onWorkerProcessWillReceiveMessage()```](#3.12.8)的返回值</font>。  

> **样例代码:**
> 
```
let Core = require('Core.js');
// 实现AppMain
class AppMain extends Core.appMain {
  onWorkerProcessDidReceiveMessage(data) {
    console.log(`Worker Did Receive : ${JSON.stringify(data)}`);
  }
}
```

<a id="3.12.10"></a>
#### 3.12.10 AppMain.onWorkerProcessDiscardMessage(data)
> **API说明:**  
> ```onWorkerProcessDiscardMessage()```是Worker进程处理被舍弃的IPC消息最后的HOOK函数，可以在其中进行异步操作。**<font color="red">其中代码将会运行在Worker进程，不推荐在此方法中调用[```AppMain.processIndex```](#3.12.1)</font>**。  

> **参数说明:**  
> **1. data\<Object/Number/Boolean/String\>**  
> IPC通信从Master发来的数据，为**对象类型/数字/布尔/字符串**。<font color="red">此值为[```AppMain.onWorkerProcessWillReceiveMessage()```](#3.12.8)传入的data</font>。  

> **样例代码:**
> 
```
let Core = require('Core.js');
// 实现AppMain
class AppMain extends Core.appMain {
  onWorkerProcessDiscardMessage(data) {
    console.log(`Worker Discard : ${JSON.stringify(data)}`);
  }
}
```

<a id="3.12.11"></a>
#### 3.12.11 AppMain.onWorkerProcessDidReceiveCustomMessage(data)
> **API说明:**  
> ```onWorkerProcessDidReceiveCustomMessage()```是Worker进程处理被捕获的非系统默认IPC消息的HOOK函数，不推荐在其中进行异步操作。**<font color="red">其中代码将会运行在Worker进程，不推荐在此方法中调用[```AppMain.processIndex```](#3.12.1)，此函数执行结束后将会调用[```AppMain.onWorkerProcessDidReceiveMessage()```](#3.12.9)</font>**。  

> **参数说明:**  
> **1. data\<Object/Number/Boolean/String\>**  
> IPC通信从Master发来的数据，为**对象类型/数字/布尔/字符串**。<font color="red">此值为[```AppMain.onWorkerProcessWillReceiveMessage()```](#3.12.8)的返回值</font>。  

> **样例代码:**
> 
```
let Core = require('Core.js');
// 实现AppMain
class AppMain extends Core.appMain {
  onWorkerProcessDidReceiveCustomMessage(data) {
    console.log(`Worker Did Receive Custom : ${JSON.stringify(data)}`);
  }
}
```

<a id="3.13"></a>
### 3.13 Core.checker
> **说明:**  
> 0. ```Core.checker```包含一组API，用来进行参数校验。  
> 1. ```Core.checker```进行参数校验时，需要设置参数模型(paramModel)或者参数限制(limit)。  
> 2. ```Core.checker```中参数模型(paramModel)和参数限制(limit)的关系是：参数模型 = 类型 + 参数限制，即```{type:'xxx',limit:'xxx'}```。  
> 3. ```Core.checker```可以用来校验Object、Array、String、Boolean、Number、Any类型。  
> 4. ```Core.checker```对值进行校验时，可以设置方法对值进行精确的校验，方法校验将在最后生效。  
> 5. ```Core.checker```校验Object类型的值时，支持校验值是否为空，field的个数，每个field各自的值(递归)。  
> 6. ```Core.checker```校验Array类型的值时，支持校验值是否为空，元素的个数，某范围元素的值(递归)。  
> 7. ```Core.checker```校验String类型的值时，支持校验值是否为空，字符串的长度，字符串正则。  
> 8. ```Core.checker```校验Boolean类型的值时，支持校验值是否为空，实际值。  
> 9. ```Core.checker```校验Number类型的值时，支持校验值是否为空，最大值最小值。  

<a id="3.13.1"></a>
#### 3.13.1 Core.checker.check(limit, value, callBack)
> **API说明:**  
> ```check()```将对传入的值与传入的参数限制进行校验。<font color="red">实际处理流程为，通过**[```Core.util.getType()```](#3.16.1)**推算值的类型，随后将该类型与传入的参数限制组装成为参数模型，使用**[```Core.checker.checkWithParamModel()```](#3.13.2)**进行实际校验</font>。

> **参数列表:**  
> **1. limit\<Object\>**
> 参数限制，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  

>> <font color="red">对于Object类型：</font>  
>>> **essential\<String\>：**必要性，**非必传项**，为**特定字符串**，可选值为**['y','n']**，默认值为**'n'**。当```essential === 'y'```时，若值为```null```或```undefined```则无法通过校验。  
>>> **length\<Object\>：**field的个数，**非必传项**，为**对象类型**，默认值为**{min:0,max:Core.macro.VALUE\_MAX}**，<font color="red">区间左右界均含等于</font>，field格式为：**{选项名:选项细节}**。
>>>> 可配置选项名有：  
>>>> **min\<Integer\>：**field个数的最小值，**非必传项**，为**整型数字**，默认值为**0**。  
>>>> **max\<Integer\>：**field个数的最大值，**非必传项**，为**整型数字**，默认值为**Core.macro.VALUE\_MAX**。

>>> **paramModels\<Object\>：**field的参数模型，**非必传项**，为**对象类型**，默认值为**{}**，field格式为：**{key名:参数模型}**。参数模型详解可见**[```Core.checker.checkWithParamModel()```](#3.13.2)**。  
>>> **checker\<Function\>：**校验器，**非必传项**，为**函数类型**，默认值为**(value, resultCB) => { resultCB(true) }**。
>>>> 参数列表为：  
>>>> **value\<Any\>：**传入值，为**泛型**。此值为将要进行校验的原值，可以通过实现checker校验器对值进行自定义校验。  
>>>> **resultCB\<Function\>：**结果回调，为**函数类型**。当校验通过时，执行```resultCB(true)```；校验不通过时，执行<font color="red">```resultCB(false, '不通过的Key', '不通过的原因')```</font>。   

>> <font color="red">对于Array类型：</font>
>>> **essential\<String\>：**必要性，**非必传项**，为**特定字符串**，可选值为**['y','n']**，默认值为**'n'**。当```essential === 'y'```时，若值为```null```或```undefined```则无法通过校验。  
>>> **length\<Object\>：**元素的个数，**非必传项**，为**对象类型**，默认值为**{min:0,max:Core.macro.VALUE\_MAX}**，<font color="red">区间左右界均含等于</font>，field格式为：**{选项名:选项细节}**。
>>>> 可配置选项名有：  
>>>> **min\<Integer\>：**元素个数的最小值，**非必传项**，为**整型数字**，默认值为**0**。  
>>>> **max\<Integer\>：**元素个数的最大值，**非必传项**，为**整型数字**，默认值为**Core.macro.VALUE\_MAX**。

>>> **paramModels\<Object\>：**field的参数模型，**非必传项**，为**对象类型**，默认值为**{}**，field格式为：**{元素范围:参数模型}**。<font color="red">**元素范围上下界均包含等于，元素范围的表示为[起始索引,终止索引]，例如第0-3个元素：[0,3]；单个元素表示为[元素索引]，例如第4个元素：[4]，范围至结尾的元素表示为[起始索引,e]，例如5至最后一个元素：[5,e]**</font>。参数模型详解可见**[```Core.checker.checkWithParamModel()```](#3.13.2)**。

>>> **checker\<Function\>：**校验器，**非必传项**，为**函数类型**，默认值为**(value, resultCB) => { resultCB(true) }**。
>>>> 参数列表为：  
>>>> **value\<Any\>：**传入值，为**泛型**。此值为将要进行校验的原值，可以通过实现checker校验器对值进行自定义校验。  
>>>> **resultCB\<Function\>：**结果回调，为**函数类型**。当校验通过时，执行```resultCB(true)```；校验不通过时，执行<font color="red">```resultCB(false, '不通过的索引', '不通过的原因')```</font>。   

>> <font color="red">对于String类型：</font>
>>> **essential\<String\>：**必要性，**非必传项**，为**特定字符串**，可选值为**['y','n']**，默认值为**'n'**。当```essential === 'y'```时，若值为```null```或```undefined```则无法通过校验。  
>>> **length\<Object\>：**字符串的长度，**非必传项**，为**对象类型**，默认值为**{min:0,max:Core.macro.VALUE\_MAX}**，<font color="red">区间左右界均含等于</font>，field格式为：**{选项名:选项细节}**。
>>>> 可配置选项名有：  
>>>> **min\<Integer\>：**字符串长度的最小值，**非必传项**，为**整型数字**，默认值为**0**。  
>>>> **max\<Integer\>：**字符串长度的最大值，**非必传项**，为**整型数字**，默认值为**Core.macro.VALUE\_MAX**。

>>> **regExp\<RegExp\>：**字符串的正则表达式，**非必传项**，为**正则表达式类型**，默认值为**//**。  
>>> **checker\<Function\>：**校验器，**非必传项**，为**函数类型**，默认值为**(value, resultCB) => { resultCB(true) }**。  
>>>> 参数列表为：  
>>>> **value\<Any\>：**传入值，为**泛型**。此值为将要进行校验的原值，可以通过实现checker校验器对值进行自定义校验。  
>>>> **resultCB\<Function\>：**结果回调，为**函数类型**。当校验通过时，执行```resultCB(true)```；校验不通过时，执行<font color="red">```resultCB(false, '不通过的原因')```</font>。   

>> <font color="red">对于Boolean类型：</font>
>>> **essential\<String\>：**必要性，**非必传项**，为**特定字符串**，可选值为**['y','n']**，默认值为**'n'**。当```essential === 'y'```时，若值为```null```或```undefined```则无法通过校验。  
>>> **value\<Boolean\>：**布尔值的值，**非必传项**，为**布尔类型**，默认值为**[无限制]**。  
>>> **checker\<Function\>：**校验器，**非必传项**，为**函数类型**，默认值为**(value, resultCB) => { resultCB(true) }**。  
>>>> 参数列表为：  
>>>> **value\<Any\>：**传入值，为**泛型**。此值为将要进行校验的原值，可以通过实现checker校验器对值进行自定义校验。  
>>>> **resultCB\<Function\>：**结果回调，为**函数类型**。当校验通过时，执行```resultCB(true)```；校验不通过时，执行<font color="red">```resultCB(false, '不通过的原因')```</font>。   

>> <font color="red">对于Number类型：</font>
>>> **essential\<String\>：**必要性，**非必传项**，为**特定字符串**，可选值为**['y','n']**，默认值为**'n'**。当```essential === 'y'```时，若值为```null```或```undefined```则无法通过校验。  
>>> **value\<Object\>：**数字的值，**非必传项**，为**对象类型**，默认值为**{min:Core.macro.VALUE\_MIN,max:Core.macro.VALUE\_MAX}**，<font color="red">区间左右界均含等于</font>，field格式为：**{选项名:选项细节}**。  
>>>> **min\<Integer\>：**数字的最小值，**非必传项**，为**整型数字**，默认值为**Core.macro.VALUE_MIN**。  
>>>> **max\<Integer\>：**数字的最大值，**非必传项**，为**整型数字**，默认值为**Core.macro.VALUE_MAX**。

>>> **checker\<Function\>：**校验器，**非必传项**，为**函数类型**，默认值为**(value, resultCB) => { resultCB(true) }**。  
>>>> 参数列表为：  
>>>> **value\<Any\>：**传入值，为**泛型**。此值为将要进行校验的原值，可以通过实现checker校验器对值进行自定义校验。  
>>>> **resultCB\<Function\>：**结果回调，为**函数类型**。当校验通过时，执行```resultCB(true)```；校验不通过时，执行<font color="red">```resultCB(false, '不通过的原因')```</font>。   

>> <font color="red">对于Any类型：</font>
>>> **essential\<String\>：**必要性，**非必传项**，为**特定字符串**，可选值为**['y','n']**，默认值为**'n'**。当```essential === 'y'```时，若值为```null```或```undefined```则无法通过校验。  
>>> **checker\<Function\>：**校验器，**非必传项**，为**函数类型**，默认值为**(value, resultCB) => { resultCB(true) }**。  
>>>> 参数列表为：  
>>>> **value\<Any\>：**传入值，为**泛型**。此值为将要进行校验的原值，可以通过实现checker校验器对值进行自定义校验。  
>>>> **resultCB\<Function\>：**结果回调，为**函数类型**。当校验通过时，执行```resultCB(true)```；校验不通过时，执行<font color="red">```resultCB(false, '不通过的原因')```</font>。  

> **2. value\<Any\>**
> 将要校验的值，**必传项**，为**泛型**。  

> **3. callBack\<Function\>**
> 执行回调，**必传项**，为**函数类型**。  
>> 参数列表为：
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  
>> **errInfo\<Object\>：**校验错误信息，为**对象类型**。  
>>> 字段说明：   
>>> **code\<String\>：**错误代码，为**特定字符串**，可选值为**['90','92','93','94','95','99']**。其中90表示类型不匹配，92表示长度不匹配，93表示正则不匹配，94表示值不匹配，95表示自定义校验器不匹配，99表示必填字段为空。  
>>> **errDesc\<String\>：**错误描述，为**字符串**。  
>>> **errIndex\<Integer\>：**未通过校验的索引，为**整型数字**。  
>>> **errKey\<String\>：**未通过校验的key，为**字符串**。  

> **样例代码:**
>
```
// 构建参数限制
let objectLimit = {
  essential: 'y', 									// 值不允许传入null
  length: { min: 5, max: 8 }, 						// 值的field的个数为大于等于5且小于等于8
  paramModels: {
    key1: {
      type: Core.macro.VALUE_TYPE_STRING, 			// [值.key1]为字符串
      limit: {
        essential: 'y', 							// [值.key1]不为null
        length: { min: 6, max: 8 }, 				// [值.key1]的长度[6,8]
        regExp: /^[a-z]*$/, 						// [值.key1]只能是小写字母
        checker(value, resultCB) { 					// [值.key1]不能为'aaaaaa'
          if (value === 'aaaaaa') {
            resultCB(false, `[key1]不能为[aaaaaa]`);
          } else {
            resultCB(true);
          }
        },
      },
    },
    key2: {
      type: Core.macro.VALUE_TYPE_NUMBER, 			// [值.key2]为数字
      limit: {
        essential: 'y', 							// [值.key2]不为null
        value: { min: 15, max: 18 }, 				// [值.key2]处于[15,18]
        checker(value, resultCB) { 					// [值.key2]不能为16
          if (value === 16) {
            resultCB(false, `[key2]不能为[16]`);
          } else {
            resultCB(true);
          }
        },
      },
    },
    key3: {
      type: Core.macro.VALUE_TYPE_ARRAY, 			// [值.key3]为数组
      limit: {
        essential: 'y', 							// [值.key3]不为null
        length: { min: 6, max: 8 }, 				// [值.key3]的元素个数[6,8]
        paramModels: {
          '[0,3]': { 								// 定义[值.key3]的0-3个元素
            type: Core.macro.VALUE_TYPE_NUMBER, 	// [值.key3]的0-3个元素为数字
            limit: {
              essential: 'y', 						// [值.key3]的0-3个元素不为null
              value: { min: 5, max: 8 }, 			// [值.key3]的0-3个元素处理[5,8]
            },
          },
          '[4]': { 									// 定义[值.key3]的第4个元素
            type: Core.macro.VALUE_TYPE_BOOLEAN, 	//[值.key4]为布尔
            limit: {
              essential: 'y', 						//[值.key4]不为null
              value: true 							//[值.key4]为true
            },
          },
          '[5,e]': { 								// 定义[值.key3]的第5-最后的元素
            type: Core.macro.VALUE_TYPE_OBJECT, 	// [值.key3]的第5-最后的元素为Object
            limit: {
              essential: 'y', 						// [值.key3]的第5-最后的元素不为null
              length: { min: 2, max: 2 }, 			// [值.key3]的第5-最后的元素中的field个数为2
            },
          },
        },
        checker(value, resultCB) { 					// [值.key3]的长度不为7
          if (value.length === 7) {
            resultCB(false, -1, `[key3]的长度不能为7`);
          } else {
            resultCB(true);
          }
        },
      },
    },
    key4: {
      type: Core.macro.VALUE_TYPE_OBJECT, 			// [值.key4]为Object
      limit: {
        essential: 'y', 							// [值.key4]不为null
        length: { min: 2, max: 3 }, 				// [值.key4]的field个数大于等于2小于等于3
        paramModels: {
          subKey1: {
            type: Core.macro.VALUE_TYPE_STRING, 	// [值.key4.subKey1]为字符串
            limit: {
              essential: 'y', 						// [值.key4.subKey1]不为null
              length: { min: 3, max: 3 }, 			// [值.key4.subKey1]的长度为3
              regExp: /^[0-9]*$/ 					// [值.key4.subKey1]为纯数字字符串
            },
          },
          subKey2: {
            type: Core.macro.VALUE_TYPE_STRING, 	// [值.key4.subKey2]为字符串
            limit: {
              essential: 'y', 						// [值.key4.subKey2]不为null
              length: { min: 3, max: 3 }, 			// [值.key4.subKey2]的长度为3
              regExp: /^[0-9]*$/ 					// [值.key4.subKey2]为纯数字字符串
            },
          },
        },
        checker(value, resultCB) { 					// [值.key4]不能包含subKey3的field
          if (value['subKey3']) {
            resultCB(false, 'key4', `[key4]不能包含[subKey3]的值`);
          } else {
            resultCB(true);
          }
        },
      },
    },
    key5: {
      type: Core.macro.VALUE_TYPE_BOOLEAN, 			// [值.key5]为布尔型
      limit: {
        essential: 'y', 							// [值.key5]不为null
        value: false, 								// [值.key5]为false
        checker(value, resultCB) { 					// [值.key5]不为true
          if (value) {
            resultCB(false, `[key5]这个值就没有卵用,一直会不过`);
          } else {
            resultCB(true);
          }
        },
      },
    },
    key6: {
      type: Core.macro.VALUE_TYPE_ANY, 				// [值.key6]为任意类型
      limit: {
        essential: 'y', 							// [值.key6]不为null
        checker(value, resultCB) { 					// [值.key6]不为字符串111111
          if (value === '111111') {
            resultCB(false, `[key6]不能为字符串[111111]`);
          } else {
            resultCB(true);
          }
        }
      }
    },
  },
  checker(value, resultCB) { 						// [值.key1]不为aaaaaaa
    if (value.key1 === 'aaaaaaa') {
      resultCB(false, 'key1', `[key1]不能为[aaaaaaa]`);
    } else {
      resultCB(true);
    }
  }
};
// 待校验的值
let objectValue = {
  key1: 'aaaaab',
  key2: 17,
  key3: [5, 5.5, 5.5, 5.5, true, { subKey1: '111', subKey2: '111' }, { subKey1: '111', subKey2: '111' }, { subKey1: '111', subKey2: '111' }],
  key4: {
    subKey1: '111',
    subKey2: '222',
    subKey4: '111',
  },
  key5: false,
  key6: 111111
};
// 执行校验
Core.checker.check(objectLimit, objectValue, (result, errInfo) => {
  console.log(result);
  console.log(errInfo);
});
```

<a id="3.13.2"></a>
#### 3.13.2 Core.checker.checkWithParamModel(paramModel, value, callBack)
> **API说明:**  
> ```checkWithParamModel()```将对传入的值与传入的参数模型进行校验。

> **参数列表:**  
> **1. paramModel\<Object\>**
> 参数模型，**必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **type\<String\>：**值的类型，**非必传项**，为**特定字符串**，默认值为**Core.macro.VALUE\_TYPE\_ANY**，可选值为
>> 
```
[Core.macro.VALUE_TYPE_OBJECT,
Core.macro.VALUE_TYPE_ARRAY,
Core.macro.VALUE_TYPE_STRING,
Core.macro.VALUE_TYPE_BOOLEAN,
Core.macro.VALUE_TYPE_NUMBER,
Core.macro.VALUE_TYPE_ANY]
```
>> **limit\<Object\>：**值的参数限制，**必传项**，为**对象类型**。详细描述见**[```Core.checker.check()```](#3.13.1)**的参数列表说明。

> **2. value\<Any\>**
> 将要校验的值，**必传项**，为**泛型**。  

> **3. callBack\<Function\>**
> 执行回调，**必传项**，为**函数类型**。  
>> 参数列表为：
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  
>> **errInfo\<Object\>：**校验错误信息，为**对象类型**。  
>>> 字段说明：   
>>> **code\<String\>：**错误代码，为**特定字符串**，可选值为**['90','92','93','94','95','99']**。其中90表示类型不匹配，92表示长度不匹配，93表示正则不匹配，94表示值不匹配，95表示自定义校验器不匹配，99表示必填字段为空。  
>>> **errDesc\<String\>：**错误描述，为**字符串**。  
>>> **errIndex\<Integer\>：**未通过校验的索引，为**整型数字**。  
>>> **errKey\<String\>：**未通过校验的key，为**字符串**。  

> **样例代码:**  
> 
```
// 参数模型
let paramModel = {
  type: Core.macro.VALUE_TYPE_STRING, // 值的类型为字符串
  limit: {
    essential: 'y', // 值不为null
    length: {
      min: 8, // 值的长度为8
      max: 8
    }
  },
};
// 进行校验
Core.checker.checkWithParamModel(paramModel, '11111111', (result, errInfo) => {
  console.log(result);
  console.log(errInfo);
});
```

<a id="3.14"></a>
### 3.14 Core.crypto
> **说明:**  
> 0. ```Core.crypto```包含一组API，用来进行加密解密编码。  
> 1. ```Core.crypto```支持AES加密解密，包含（AES-128-ECB、AES-128-CBC、AES-192-ECB、AES-192-CBC、AES-256-ECB、AES-256-CBC）。  
> 2. ```Core.crypto```支持RSA加解密（PKCS1、PKCS1_OAEP），且支持公钥加密私钥解密、私钥加密公钥解密。  
> 3. ```Core.crypto```支持RSA私钥加签、公钥验签及RSA密钥对生成。  
> 4. ```Core.crypto```支持Base64加解码、MD5等。  
> 5. ```Core.crypto```支持指定类型和长度的随机字符串、随机数字的生成。

<a id="3.14.1"></a>
#### 3.14.1 Core.crypto.aesEncrypt(originMsg, key[, opt])
> **API说明:**  
> ```aesEncrypt()```用来进行AES加密。

> **参数列表:**  
> **1. originMsg\<Buffer/String\>**  
> 要加密的明文数据，**必传项**，为**缓冲区类型/字符串**。  
> **2. key\<String\>**  
> AES密钥，**必传项**，为**字符串**。  
> **3. opt\<Object\>**  
> AES加密选项，**非必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **type\<String\>：**AES加密类型，**非必传项**，为**特定字符串**，默认值为**'aes-256-ecb'**，可选值为**['aes-128-ecb','aes-128-cbc','aes-192-ecb','aes-192-cbc','aes-256-ecb','aes-256-cbc']**。  
>> **iv\<Buffer/String\>：**AES-CBC加密初始偏移量，**非必传项**，为**缓冲区类型/字符串**，默认值为**[空字符串]**。
>> **inputEncoding\<String\>：**明文数据入参的编码方式，**非必传项**，为**特定字符串**，默认值为**'utf-8'**，可选值为**['utf-8','ascii','latin1']**。   
>> **outputEncoding\<String\>：**加密结果的编码方式，**非必传项**，为**特定字符串**，默认值为**'base64'**，可选值为**['base64','hex','latin1']**。   

> **结果说明:**  
> **1. result\<Buffer/String\>**  
> 加密结果，为**缓冲区类型/字符串**。

> **样例代码:**  
> 
```
let aesKey = '11111111111111111111111111111111';
let aesOpt = { type: 'aes-256-cbc', iv: '1111111111111111' };
let originMsg = '111111';
let result = Core.crypto.aesEncrypt(originMsg, aesKey, aesOpt);
```

<a id="3.14.2"></a>
#### 3.14.2 Core.crypto.aesDecrypt(cryptedMsg, key[, opt])
> **API说明:**  
> ```aesDecrypt()```用来进行AES解密。

> **参数列表:**  
> **1. cryptedMsg\<Buffer/String\>**  
> 要解密的密文数据，**必传项**，为**缓冲区类型/字符串**。  
> **2. key\<String\>**  
> AES密钥，**必传项**，为**字符串**。  
> **3. opt\<Object\>**  
> AES解密选项，**非必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **type\<String\>：**AES解密类型，**非必传项**，为**特定字符串**，默认值为**'aes-256-ecb'**，可选值为**['aes-128-ecb','aes-128-cbc','aes-192-ecb','aes-192-cbc','aes-256-ecb','aes-256-cbc']**。  
>> **iv\<Buffer/String\>：**AES-CBC解密初始偏移量，**非必传项**，为**缓冲区类型/字符串**，默认值为**[空字符串]**。
>> **inputEncoding\<String\>：**密文数据入参的编码方式，**非必传项**，为**特定字符串**，默认值为**'base64'**，可选值为**['base64','hex','latin1']**。   
>> **outputEncoding\<String\>：**解密结果的编码方式，**非必传项**，为**特定字符串**，默认值为**'utf-8'**，可选值为**['utf-8','ascii','latin1']**。   

> **结果说明:**  
> **1. result\<Buffer/String\>**  
> 解密结果，为**缓冲区类型/字符串**。

> **样例代码:**  
> 
```
let aesKey = '11111111111111111111111111111111';
let aesOpt = { type: 'aes-256-cbc', iv: '1111111111111111' };
let decryptedMsg = 'vNs3TW9uXq2uYt9zgXKPPA==';
let result = Core.crypto.aesDecrypt(decryptedMsg, aesKey, aesOpt);
```

<a id="3.14.3"></a>
#### 3.14.3 Core.crypto.rsaPublicEncrypt(originMsg, publicKey[, opt])
> **API说明:**  
> ```rsaPublicEncrypt()```用来进行RSA公钥加密。

> **参数列表:**  
> **1. originMsg\<String\>**  
> 要加密的明文数据，**必传项**，为**字符串**。  
> **2. publicKey\<Buffer/String\>**  
> RSA公钥，**必传项**，为**缓冲区类型/字符串**。  
> **3. opt\<Object\>**  
> RSA加密选项，**非必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **encryptType\<String\>：**RSA加密类型，**非必传项**，为**特定字符串**，默认值为**'pkcs1'**，可选值为**['pkcs1','pkcs1_oaep']**。  
>> **keyPaddingType\<String\>：**RSA密钥的填充类型，**非必传项**，为**特定字符串**，默认值为**'pkcs8'**，可选值为**['pkcs8','pkcs1']**。  
>> **keyType\<String\>：**RSA密钥的类型，**非必传项**，为**特定字符串**，默认值为**'pem'**，可选值为**['pem','der']**。   
>> **inputEncoding\<String\>：**明文数据入参的编码方式，**非必传项**，为**特定字符串**，默认值为**'utf-8'**，可选值为**['utf-8','hex','base64']**。   
>> **outputEncoding\<String\>：**加密结果的编码方式，**非必传项**，为**特定字符串**，默认值为**'base64'**，可选值为**['base64','buffer','binary','hex']**。     

> **结果说明:**  
> **1. result\<Buffer/String\>**  
> 加密结果，为**缓冲区类型/字符串**。

> **样例代码:**  
> 
```
let publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC06FHPJe3j6KHoJoOsHwKBXyev
HI5PTtiGbjbWUL7VVN5ZW4GhODHGCBuJHGku/kdQGznJ6ypdbc5OlcHqJ3dAChkP
esorh3VbI8eYDfJqxjNzVCOp2iBi84jLhYUBUlHINMvXK+7kyZZTFmwYQkBedbBq
as3L1PwxEmUM4S3NbQIDAQAB
-----END PUBLIC KEY-----`;
let originMsg = '111111';
let rsaOpt = {
  encryptType: 'pkcs1_oaep',
  keyPaddingType: 'pkcs8',
  keyType: 'pem'
};
let result = Core.crypto.rsaPublicEncrypt(originMsg, publicKey, rsaOpt);
```

<a id="3.14.4"></a>
#### 3.14.4 Core.crypto.rsaPrivateDecrypt(cryptedMsg, privateKey[, opt])
> **API说明:**  
> ```rsaPrivateDecrypt()```用来进行RSA私钥解密。

> **参数列表:**  
> **1. cryptedMsg\<Buffer/String\>**  
> 要解密的密文数据，**必传项**，为**缓冲区类型/字符串**。  
> **2. privateKey\<Buffer/String\>**  
> RSA私钥，**必传项**，为**缓冲区类型/字符串**。  
> **3. opt\<Object\>**  
> RSA解密选项，**非必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **encryptType\<String\>：**RSA解密类型，**非必传项**，为**特定字符串**，默认值为**'pkcs1'**，可选值为**['pkcs1','pkcs1_oaep']**。  
>> **keyPaddingType\<String\>：**RSA密钥的填充类型，**非必传项**，为**特定字符串**，默认值为**'pkcs8'**，可选值为**['pkcs8','pkcs1']**。  
>> **keyType\<String\>：**RSA密钥的类型，**非必传项**，为**特定字符串**，默认值为**'pem'**，可选值为**['pem','der']**。   
>> **inputEncoding\<String\>：**密文数据入参的编码方式，**非必传项**，为**特定字符串**，默认值为**'base64'**，可选值为**['base64','buffer','binary','hex']**。   
>> **outputEncoding\<String\>：**解密结果的编码方式，**非必传项**，为**特定字符串**，默认值为**'utf-8'**，可选值为**['utf-8','hex','base64']**。     

> **结果说明:**  
> **1. result\<String\>**  
> 解密结果，为**字符串**。

> **样例代码:**  
> 
```
let privateKey = `-----BEGIN PRIVATE KEY-----
MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBALToUc8l7ePooegm
g6wfAoFfJ68cjk9O2IZuNtZQvtVU3llbgaE4McYIG4kcaS7+R1AbOcnrKl1tzk6V
weond0AKGQ96yiuHdVsjx5gN8mrGM3NUI6naIGLziMuFhQFSUcg0y9cr7uTJllMW
bBhCQF51sGpqzcvU/DESZQzhLc1tAgMBAAECgYEAnzJyC6CNH6pwECMUbDs9sStT
eL3gXdo8oNAMYbzcsk7k/C2SfZU9987arGXcCgaqKsxKpm3T8jPXAUC4TJ4+SRdC
pdP8utinFSDaD8ILHGl8LrKEfSV/jwJSpnTN+cBfUOK9lKLQ3if6ha2rUKVPwIyt
zg3TKrHBXQoe7Un3TgECQQDx1eHuyOCKDpQIaE7KSjq/sFTIBPDrPpFHHLXx0lqc
yxjrTmiIPehUE+5I/G9Qc6GIYBPYJjBtDA17Z0A9AZIdAkEAv4DfrU2ckhQC1kVl
VdyJtMxgyAx4nRQ5kiL2nRaxTHq2PPYaFegGL3Fb2lKDQ6/OTsydePmHbUg/YSyk
J5RHkQJBAJwuinRhTQo8MgRgAQqJ9/kWUxq+fi0fQknP0/1x4c1DKTvGbqIWgTXT
jV+bj/RASUE+83Hz7/BtCUP6QbVkj00CQG79IyYPCEKFhItpFu0nb0ww85qd1726
Pg+bYfDzePiJWluEiuPNYOBYQ9MJ5XfySZDT+CRoAnxs1gbc15r0znECQDXU002x
qocZJoRfRFgWzotAXHxR4J3CO7TZ/mC9iZOF0iLUbG5fNyD6chpXJduX0LWptaFM
zw3Ry5U64KEkraQ=
-----END PRIVATE KEY-----`;
let rsaOpt = {
  encryptType: 'pkcs1_oaep',
  keyPaddingType: 'pkcs8',
  keyType: 'pem',
};
let decryptedMsg = 'TwW/acJX8fmshJ7JPrCL2N/9TXrBDOQmpAt2AzBBVqL8crXtXDup+SS3ZqVQaWbjz91i1vTi7LSJsLZp1RotzKM6c7HdIu4fHxXf9pcz3mHGiepw2+1e/oOD6Eq+M7g8LL5YGVkyCMhbVAC84mCTzn2bxTH5Iv3/yFn5eddT4JQ=';
let result = Core.crypto.rsaPrivateDecrypt(decryptedMsg, privateKey, rsaOpt);
```

<a id="3.14.5"></a>
#### 3.14.5 Core.crypto.rsaPrivateEncrypt(originMsg, privateKey[, opt])
> **API说明:**  
> ```rsaPrivateEncrypt()```用来进行RSA私钥加密。

> **参数列表:**  
> **1. originMsg\<String\>**  
> 要加密的明文数据，**必传项**，为**字符串**。  
> **2. privateKey\<Buffer/String\>**  
> RSA私钥，**必传项**，为**缓冲区类型/字符串**。  
> **3. opt\<Object\>**  
> RSA加密选项，**非必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **encryptType\<String\>：**RSA加密类型，**非必传项**，为**特定字符串**，默认值为**'pkcs1'**，可选值为**['pkcs1','pkcs1_oaep']**。  
>> **keyPaddingType\<String\>：**RSA密钥的填充类型，**非必传项**，为**特定字符串**，默认值为**'pkcs8'**，可选值为**['pkcs8','pkcs1']**。  
>> **keyType\<String\>：**RSA密钥的类型，**非必传项**，为**特定字符串**，默认值为**'pem'**，可选值为**['pem','der']**。   
>> **inputEncoding\<String\>：**明文数据入参的编码方式，**非必传项**，为**特定字符串**，默认值为**'utf-8'**，可选值为**['utf-8','hex','base64']**。   
>> **outputEncoding\<String\>：**加密结果的编码方式，**非必传项**，为**特定字符串**，默认值为**'base64'**，可选值为**['base64','buffer','binary','hex']**。     

> **结果说明:**  
> **1. result\<Buffer/String\>**  
> 加密结果，为**缓冲区类型/字符串**。

> **样例代码:**  
> 
```
let privateKey = `-----BEGIN PRIVATE KEY-----
MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBALToUc8l7ePooegm
g6wfAoFfJ68cjk9O2IZuNtZQvtVU3llbgaE4McYIG4kcaS7+R1AbOcnrKl1tzk6V
weond0AKGQ96yiuHdVsjx5gN8mrGM3NUI6naIGLziMuFhQFSUcg0y9cr7uTJllMW
bBhCQF51sGpqzcvU/DESZQzhLc1tAgMBAAECgYEAnzJyC6CNH6pwECMUbDs9sStT
eL3gXdo8oNAMYbzcsk7k/C2SfZU9987arGXcCgaqKsxKpm3T8jPXAUC4TJ4+SRdC
pdP8utinFSDaD8ILHGl8LrKEfSV/jwJSpnTN+cBfUOK9lKLQ3if6ha2rUKVPwIyt
zg3TKrHBXQoe7Un3TgECQQDx1eHuyOCKDpQIaE7KSjq/sFTIBPDrPpFHHLXx0lqc
yxjrTmiIPehUE+5I/G9Qc6GIYBPYJjBtDA17Z0A9AZIdAkEAv4DfrU2ckhQC1kVl
VdyJtMxgyAx4nRQ5kiL2nRaxTHq2PPYaFegGL3Fb2lKDQ6/OTsydePmHbUg/YSyk
J5RHkQJBAJwuinRhTQo8MgRgAQqJ9/kWUxq+fi0fQknP0/1x4c1DKTvGbqIWgTXT
jV+bj/RASUE+83Hz7/BtCUP6QbVkj00CQG79IyYPCEKFhItpFu0nb0ww85qd1726
Pg+bYfDzePiJWluEiuPNYOBYQ9MJ5XfySZDT+CRoAnxs1gbc15r0znECQDXU002x
qocZJoRfRFgWzotAXHxR4J3CO7TZ/mC9iZOF0iLUbG5fNyD6chpXJduX0LWptaFM
zw3Ry5U64KEkraQ=
-----END PRIVATE KEY-----`;
let originMsg = '111111';
let rsaOpt = {
  encryptType: 'pkcs1_oaep',
  keyPaddingType: 'pkcs8',
  keyType: 'pem',
};
let result = Core.crypto.rsaPrivateEncrypt(originMsg, privateKey, rsaOpt);
```

<a id="3.14.6"></a>
#### 3.14.6 Core.crypto.rsaPublicDecrypt(cryptedMsg, publicKey[, opt])
> **API说明:**  
> ```rsaPublicDecrypt()```用来进行RSA公钥解密。

> **参数列表:**  
> **1. cryptedMsg\<Buffer/String\>**  
> 要解密的密文数据，**必传项**，为**缓冲区类型/字符串**。  
> **2. publicKey\<Buffer/String\>**  
> RSA公钥，**必传项**，为**缓冲区类型/字符串**。  
> **3. opt\<Object\>**  
> RSA解密选项，**非必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **encryptType\<String\>：**RSA解密类型，**非必传项**，为**特定字符串**，默认值为**'pkcs1'**，可选值为**['pkcs1','pkcs1_oaep']**。  
>> **keyPaddingType\<String\>：**RSA密钥的填充类型，**非必传项**，为**特定字符串**，默认值为**'pkcs8'**，可选值为**['pkcs8','pkcs1']**。  
>> **keyType\<String\>：**RSA密钥的类型，**非必传项**，为**特定字符串**，默认值为**'pem'**，可选值为**['pem','der']**。   
>> **inputEncoding\<String\>：**密文数据入参的编码方式，**非必传项**，为**特定字符串**，默认值为**'base64'**，可选值为**['base64','buffer','binary','hex']**。   
>> **outputEncoding\<String\>：**解密结果的编码方式，**非必传项**，为**特定字符串**，默认值为**'utf-8'**，可选值为**['utf-8','hex','base64']**。     

> **结果说明:**  
> **1. result\<String\>**  
> 解密结果，为**字符串**。

> **样例代码:**  
> 
```
let publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC06FHPJe3j6KHoJoOsHwKBXyev
HI5PTtiGbjbWUL7VVN5ZW4GhODHGCBuJHGku/kdQGznJ6ypdbc5OlcHqJ3dAChkP
esorh3VbI8eYDfJqxjNzVCOp2iBi84jLhYUBUlHINMvXK+7kyZZTFmwYQkBedbBq
as3L1PwxEmUM4S3NbQIDAQAB
-----END PUBLIC KEY-----`;
let rsaOpt = {
  encryptType: 'pkcs1_oaep',
  keyPaddingType: 'pkcs8',
  keyType: 'pem',
};
let decryptedMsg = 'po6QSlWqX0dB08XKnbjbJxdQhxl0O4BnOk8ZDdDqWe/ufJga1oAt9gb7H8RfoDIZtkJPMkEGCZJkCN9p+idCdrAqzprB0MewDFDevxPnGLhp/JwsDr/Y/0ijXmajeYrSBSMmh7udxVJXvryqjmfZnIlLfv4EYmPOaYKYybRtkOE=';
let result = Core.crypto.rsaPublicDecrypt(decryptedMsg, publicKey, rsaOpt);
```

<a id="3.14.7"></a>
#### 3.14.7 Core.crypto.rsaPrivateSign(originMsg, privateKey[, opt])
> **API说明:**  
> ```rsaPrivateSign()```用来进行RSA私钥签名。

> **参数列表:**  
> **1. originMsg\<String\>**  
> 要签名的数据，**必传项**，为**缓冲区类型/字符串**。  
> **2. privateKey\<Buffer/String\>**  
> RSA私钥，**必传项**，为**缓冲区类型/字符串**。  
> **3. opt\<Object\>**  
> RSA签名选项，**非必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **signType\<String\>：**RSA签名类型，**非必传项**，为**特定字符串**，默认值为**'sha512'**，可选值为**['md5','ripemd160','sha1','sha256','sha512']**。  
>> **keyPaddingType\<String\>：**RSA密钥的填充类型，**非必传项**，为**特定字符串**，默认值为**'pkcs8'**，可选值为**['pkcs8','pkcs1']**。  
>> **keyType\<String\>：**RSA密钥的类型，**非必传项**，为**特定字符串**，默认值为**'pem'**，可选值为**['pem','der']**。   
>> **inputEncoding\<String\>：**原文入参的编码方式，**非必传项**，为**特定字符串**，默认值为**'utf-8'**，可选值为**['utf-8','hex','base64']**。   
>> **outputEncoding\<String\>：**签名的编码方式，**非必传项**，为**特定字符串**，默认值为**'base64'**，可选值为**['base64','buffer','binary','hex']**。     

> **结果说明:**  
> **1. signature\<Buffer/String\>**  
> 数字签名，为**缓冲区类型/字符串**。

> **样例代码:**  
> 
```
let privateKey = `-----BEGIN PRIVATE KEY-----
MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBALToUc8l7ePooegm
g6wfAoFfJ68cjk9O2IZuNtZQvtVU3llbgaE4McYIG4kcaS7+R1AbOcnrKl1tzk6V
weond0AKGQ96yiuHdVsjx5gN8mrGM3NUI6naIGLziMuFhQFSUcg0y9cr7uTJllMW
bBhCQF51sGpqzcvU/DESZQzhLc1tAgMBAAECgYEAnzJyC6CNH6pwECMUbDs9sStT
eL3gXdo8oNAMYbzcsk7k/C2SfZU9987arGXcCgaqKsxKpm3T8jPXAUC4TJ4+SRdC
pdP8utinFSDaD8ILHGl8LrKEfSV/jwJSpnTN+cBfUOK9lKLQ3if6ha2rUKVPwIyt
zg3TKrHBXQoe7Un3TgECQQDx1eHuyOCKDpQIaE7KSjq/sFTIBPDrPpFHHLXx0lqc
yxjrTmiIPehUE+5I/G9Qc6GIYBPYJjBtDA17Z0A9AZIdAkEAv4DfrU2ckhQC1kVl
VdyJtMxgyAx4nRQ5kiL2nRaxTHq2PPYaFegGL3Fb2lKDQ6/OTsydePmHbUg/YSyk
J5RHkQJBAJwuinRhTQo8MgRgAQqJ9/kWUxq+fi0fQknP0/1x4c1DKTvGbqIWgTXT
jV+bj/RASUE+83Hz7/BtCUP6QbVkj00CQG79IyYPCEKFhItpFu0nb0ww85qd1726
Pg+bYfDzePiJWluEiuPNYOBYQ9MJ5XfySZDT+CRoAnxs1gbc15r0znECQDXU002x
qocZJoRfRFgWzotAXHxR4J3CO7TZ/mC9iZOF0iLUbG5fNyD6chpXJduX0LWptaFM
zw3Ry5U64KEkraQ=
-----END PRIVATE KEY-----`;
let originMsg = '111111';
let rsaOpt = {
  signType: 'sha512',
  keyPaddingType: 'pkcs8',
  keyType: 'pem',
};
let signature = Core.crypto.rsaPrivateSign(originMsg, privateKey, rsaOpt);
```

<a id="3.14.8"></a>
#### 3.14.8 Core.crypto.rsaPublicVerify(originMsg, signature, publicKey[, opt])
> **API说明:**  
> ```rsaPublicVerify()```用来进行RSA私钥签名。

> **参数列表:**  
> **1. originMsg\<String\>**  
> 要验签的数据，**必传项**，为**缓冲区类型/字符串**。  
> **2. signature\<String\>**
> 数字签名，**必传项**，为**字符串**。
> **3. publicKey\<Buffer/String\>**  
> RSA公钥，**必传项**，为**缓冲区类型/字符串**。  
> **4. opt\<Object\>**  
> RSA签名选项，**非必传项**，为**对象类型**，field格式为：**{选项名:选项细节}**。  
>> 可配置选项名有：  
>> **signType\<String\>：**RSA签名类型，**非必传项**，为**特定字符串**，默认值为**'sha512'**，可选值为**['md5','ripemd160','sha1','sha256','sha512']**。  
>> **keyPaddingType\<String\>：**RSA密钥的填充类型，**非必传项**，为**特定字符串**，默认值为**'pkcs8'**，可选值为**['pkcs8','pkcs1']**。  
>> **keyType\<String\>：**RSA密钥的类型，**非必传项**，为**特定字符串**，默认值为**'pem'**，可选值为**['pem','der']**。   
>> **msgEncoding\<String\>：**原文入参的编码方式，**非必传项**，为**特定字符串**，默认值为**'utf-8'**，可选值为**['utf-8','hex','base64']**。   
>> **signatureEncoding\<String\>：**签名的编码方式，**非必传项**，为**特定字符串**，默认值为**'base64'**，可选值为**['base64','buffer','binary','hex']**。     

> **结果说明:**  
> **1. result\<Boolean\>**  
> 验签结果，为**布尔类型**。

> **样例代码:**  
> 
```
let publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC06FHPJe3j6KHoJoOsHwKBXyev
HI5PTtiGbjbWUL7VVN5ZW4GhODHGCBuJHGku/kdQGznJ6ypdbc5OlcHqJ3dAChkP
esorh3VbI8eYDfJqxjNzVCOp2iBi84jLhYUBUlHINMvXK+7kyZZTFmwYQkBedbBq
as3L1PwxEmUM4S3NbQIDAQAB
-----END PUBLIC KEY-----`;
let originMsg = '111111';
let rsaOpt = {
  signType: 'sha512',
  keyPaddingType: 'pkcs8',
  keyType: 'pem',
};
let signature = 'YBg6yxZrFgQmx4tnUZL2szx18yT2IKDopJe70RtPW3KlmNOas+1u2o7ufX4w/BHQO83cKTAiTWXcyp50HwywFJTMYhbrRoQmU/LccOTLhKFJWnfkqfQg1fV5/angIVCmkA7JPbWEChOaYZthxrbsoCVLDae6mzb5COC8SYtyCLI=';
let result = Core.crypto.rsaPublicVerify(originMsg, signature, publicKey, rsaOpt);
```

<a id="3.14.9"></a>
#### 3.14.9 Core.crypto.getRsaKeyPair(bit[, keyType])
> **API说明:**  
> ```getRsaKeyPair()```用来获取一对RSA密钥。

> **参数列表:**  
> **1. bit\<Integer\>**  
> RSA密钥的位数，**必传项**，为**整型数字**。  
> **2. keyType\<String\>**  
> 密钥类型，**非必传项**，为**特定字符串**，默认值为**'pem'**，可选值为**['pem','der']**。

> **结果说明:**  
> **1. result\<Object\>**  
> RSA密钥信息，为**对象类型**。
>> 字段说明：  
>> **private_pkcs1\<Buffer/String\>：**填充方式为PKCS1的RSA私钥，为**缓冲区类型/字符串**。  
>> **private_pkcs8\<Buffer/String\>：**填充方式为PKCS8的RSA私钥，为**缓冲区类型/字符串**。  
>> **public_pkcs1\<Buffer/String\>：**填充方式为PKCS1的RSA公钥，为**缓冲区类型/字符串**。  
>> **public_pkcs8\<Buffer/String\>：**填充方式为PKCS8的RSA公钥，为**缓冲区类型/字符串**。  

> **样例代码:**  
> 
```
let rsaInfo = Core.crypto.getRsaKeyPair(1024, 'der');
```

<a id="3.14.10"></a>
#### 3.14.10 Core.crypto.base64Encode(originMsg[, inputEncoding])
> **API说明:**  
> ```base64Encode()```用来进行base64编码。

> **参数列表:**  
> **1. originMsg\<String\>**  
> 需要编码的明文，**必传项**，为**字符串**。  
> **2. inputEncoding\<String\>**  
> 明文输入的编码方式，**非必传项**，为**特定字符串**，默认值为**'utf-8'**，可选值为**['utf-8','ascii','latin1','hex']**。

> **结果说明:**  
> **1. result\<String\>**  
> 编码结果，为**字符串**。

> **样例代码:**  
> 
```
let originMsg = '111111';
let result = Core.crypto.base64Encode(originMsg);
```

<a id="3.14.11"></a>
#### 3.14.11 Core.crypto.base64Decode(cryptedMsg[, outputEncoding])
> **API说明:**  
> ```base64Decode()```用来进行base64解码。

> **参数列表:**  
> **1. cryptedMsg\<String\>**  
> 需要解码的密文，**必传项**，为**字符串**。  
> **2. outputEncoding\<String\>**  
> 解码结果的编码方式，**非必传项**，为**特定字符串**，默认值为**'utf-8'**，可选值为**['utf-8','ascii','latin1','hex']**。

> **结果说明:**  
> **1. result\<String\>**  
> 解码结果，为**字符串**。

> **样例代码:**  
> 
```
let cryptedMsg = 'MTExMTEx';
let result = Core.crypto.base64Decode(cryptedMsg);
```

<a id="3.14.12"></a>
#### 3.14.12 Core.crypto.getRandomString(length[, type])
> **API说明:**  
> ```getRandomString()```用来获取指定长度和类型的随机字符串。

> **参数列表:**  
> **1. length\<Integer\>**  
> 随机字符串的长度，**必传项**，为**整型数字**。  
> **2. type\<String\>**  
> 随机字符串的类型，**非必传项**，为**字符串**，默认值为**'u+l+n+s'**。**<font color="red">'u'表示大写字母，'l'表示小写字母，'n'表示数字，'s'表示符号；若使用其中的一种或几种，中间使用'+'连接即可</font>**。

> **结果说明:**  
> **1. result\<String\>**  
> 生成的结果，为**字符串**。

> **样例代码:**  
> 
```
let result = Core.crypto.getRandomString(16, 'u+l');
```

<a id="3.14.13"></a>
#### 3.14.13 Core.crypto.getRandomInteger(rangeStr)
> **API说明:**  
> ```getRandomInteger()```用来获取指定范围内的随机整数。

> **参数列表:**  
> **1. rangeStr\<String\>**  
> 生成随机数的范围，**必传项**，为**字符串**。表示方式与区间表示相同，**<font color="red">[]表示包含区间界限，()表示不包含区间界限</font>**。

> **结果说明:**  
> **1. result\<Integer\>**  
> 生成的结果，为**整型数字**。

> **样例代码:**  
> 
```
let result = Core.crypto.getRandomInteger('[1,2)');
```

<a id="3.15"></a>
### 3.15 Core.time
> **说明:**  
> 0. ```Core.time```包含一组API，用来进行时间处理。  

<a id="3.15.1"></a>
#### 3.15.1 Core.time.format(date[, fmt])
> **API说明:**  
> ```format()```用来对Date类型的数据进行格式化。

> **参数列表:**  
> **1. date\<Date\>**  
> 需要解析的时间，**必传项**，为**日期类型**。
> **2. fmt\<String\>**  
> 解析格式的字符串，**非必传项**，为**字符串**，默认值为**yyyy-MM-dd HH:mm:ss.S**。**<font color="red">其中y表示年份，M表示月份，d表示天，q表示季度，E表示星期，H表示24小时制下的小时，h表示12小时制下的小时，m表示分钟，s表示秒，S表示毫秒</font>**。  

> **结果说明:**  
> **1. result\<String\>**  
> 解析结果，为**字符串**。

> **样例代码:**  
> 
```
let result = Core.time.format(new Date(),'yyyy-MM-dd HH:mm:ss.S EEE q');
```

<a id="3.15.2"></a>
#### 3.15.2 Core.time.getCurrentTimeString()
> **API说明:**  
> ```getCurrentTimeString()```用来获取当前的时间描述字符串。

> **结果说明:**  
> **1. timeString\<String\>**  
> 时间描述，为**字符串**。

> **样例代码:**  
> 
```
let result = Core.time.getCurrentTimeString();
```

<a id="3.15.3"></a>
#### 3.15.3 Core.time.getTimeInterval(startDate, endDate)
> **API说明:**  
> ```getTimeInterval()```用来获取两个时间之间的时间间隔。

> **参数列表:**  
> **1. startDate\<Date\>**  
> 起始时间，**必传项**，为**日期类型**。
> **2. endDate\<Date\>**  
> 结束时间，**必传项**，为**日期类型**。


> **结果说明:**  
> **1. interval\<Integer\>**  
> 时间间隔，为**整型数字**，单位为**秒**。

> **样例代码:**  
> 
```
let startDate = new Date('2011-11-11 11:11:11');
let endDate = new Date();
let interval = Core.time.getTimeInterval(startDate, endDate);
```

<a id="3.15.4"></a>
#### 3.15.4 Core.time.getTimestamp()
> **API说明:**  
> ```getTimestamp()```用来获取当前的时间戳。

> **结果说明:**  
> **1. timestamp\<Integer\>**  
> 时间戳，为**整型数字**。

> **样例代码:**  
> 
```
let timestamp = Core.time.getTimestamp();
```

<a id="3.16"></a>
### 3.16 Core.utils
> **说明:**  
> 0. ```Core.utils```是一组工具类API，主要用来处理通用数据。  

<a id="3.16.1"></a>
#### 3.16.1 Core.utils.getType(value)
> **API说明:**  
> ```getType()```用来获取目标值的类型。

> **参数列表:**  
> **1. value\<Any\>**  
> 将要计算类型的值，为**泛型**。

> **结果说明:**  
> **1. type\<String\>**  
> 值的类型，为**特定字符串**，可选值为
>
```
[Core.macro.VALUE_TYPE_OBJECT,
Core.macro.VALUE_TYPE_ARRAY,
Core.macro.VALUE_TYPE_STRING,
Core.macro.VALUE_TYPE_BOOLEAN,
Core.macro.VALUE_TYPE_NUMBER,
Core.macro.VALUE_TYPE_FUNCTION,
Core.macro.VALUE_TYPE_UNDEFINED,
Core.macro.VALUE_TYPE_NULL]
```

> **样例代码:**  
> 
```
let type = Core.utils.getType(()=>{});
```

<a id="3.16.2"></a>
#### 3.16.2 Core.utils.isNullOrUndefined(value)
> **API说明:**  
> ```isNullOrUndefined()```用来获取目标值是否为null或undefined。

> **参数列表:**  
> **1. value\<Any\>**  
> 将要判断类型的值，为**泛型**。

> **结果说明:**  
> **1. result\<Boolean\>**  
> 判断结果，为**布尔类型**。

> **样例代码:**  
> 
```
let type = Core.utils.getType(()=>{});
```

<a id="3.16.3"></a>
#### 3.16.3 Core.utils.mapSort(obj[, type])
> **API说明:**  
> ```mapSort()```用来对Object进行排序，仅针对第一层field的Key进行顺序。

> **参数列表:**  
> **1. obj\<Object\>**  
> 需要排序的对象，**必传项**，为**对象类型**。
> **2. type\<String\>**  
> 排序方式，**非必传项**，为**特定字符串**，默认值为**'asc'**，可选值为**['asc','desc']**。其中asc表示升序，desc表示降序。

> **结果说明:**  
> **1. result\<Object\>**  
> 排序结果，为**对象类型**。

> **样例代码:**  
> 
```
let obj = {
  key3: 'value3',
  key5: 'value5',
  key1: 'value1',
  key4: {
    subKey3: 'subValue3',
    subKey1: 'subValue1',
    subKey5: 'subValue5',
    subKey2: 'subValue2',
    subKey4: 'subValue4'
  },
  key2: {
    subKey2: 'subValue2',
    subKey5: 'subValue5',
    subKey1: 'subValue1',
    subKey4: 'subValue4',
    subKey3: 'subValue3'
  },
};
let result = Core.utils.mapSort(obj, 'desc');
```

<a id="3.16.4"></a>
#### 3.16.4 Core.utils.mapDeepSort(obj[, type])
> **API说明:**  
> ```mapDeepSort()```用来对Object进行排序，将对Object中所有的Object的field排序。

> **参数列表:**  
> **1. obj\<Object\>**  
> 需要排序的对象，**必传项**，为**对象类型**。
> **2. type\<String\>**  
> 排序方式，**非必传项**，为**特定字符串**，默认值为**'asc'**，可选值为**['asc','desc']**。其中asc表示升序，desc表示降序。

> **结果说明:**  
> **1. result\<Object\>**  
> 排序结果，为**对象类型**。

> **样例代码:**  
> 
```
let obj = {
  key3: 'value3',
  key5: 'value5',
  key1: 'value1',
  key4: {
    subKey3: 'subValue3',
    subKey1: 'subValue1',
    subKey5: 'subValue5',
    subKey2: 'subValue2',
    subKey4: 'subValue4'
  },
  key2: {
    subKey2: 'subValue2',
    subKey5: 'subValue5',
    subKey1: 'subValue1',
    subKey4: 'subValue4',
    subKey3: 'subValue3'
  },
};
let result = Core.utils.mapDeepSort(obj, 'desc');
```

<a id="3.17"></a>
### 3.17 Core.crossPlatform
> **说明:**  
> 0. ```Core.crossPlatform```是一组跨平台API，主要用来操作文件系统。  

<a id="3.17.1"></a>
#### 3.17.1 Core.crossPlatform.PATH_SEP
> **API说明:**  
> ```Core.crossPlatform.PATH_SEP```是一个跨平台的文件路径分隔符。在WinNT平台下，此值为**[\\]**；在POSIX平台下，此值为**[/]**。

> **样例代码:**  
> 
```
let Core = require('Core.js');
console.log(Core.crossPlatform.PATH_SEP);
```

<a id="3.17.2"></a>
#### 3.17.2 Core.crossPlatform.CMD_RM(sourcePath, callBack)
> **API说明:**  
> ```Core.crossPlatform.CMD_RM()```是一个跨平台异步删除文件或目录的API。

> **参数列表:**  
> **1. sourcePath\<String\>**  
> 待删除的文件或目录路径，**必传项**，为**字符串**。  
> **2. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  
>> **err\<Error\>：**错误原因，为**错误类型**。  

> **样例代码:**  
> 
```
let Core = require('Core.js');
let sourcePath = '/Users/Douzi/Desktop/Test';
Core.crossPlatform.CMD_RM_SYNC(sourcePath, (result, err) => {
  console.log(result);
  console.log(err);
});
```

<a id="3.17.3"></a>
#### 3.17.3 Core.crossPlatform.CMD\_RM\_SYNC(sourcePath)
> **API说明:**  
> ```Core.crossPlatform.CMD_RM_SYNC()```是一个跨平台同步删除文件或目录的API。

> **参数列表:**  
> **1. sourcePath\<String\>**  
> 待删除的文件或目录路径，**必传项**，为**字符串**。  

> **样例代码:**  
> 
```
let Core = require('Core.js');
let sourcePath = '/Users/Douzi/Desktop/Test';
Core.crossPlatform.CMD_RM_SYNC(sourcePath);
```

<a id="3.17.4"></a>
#### 3.17.4 Core.crossPlatform.CMD\_CP(sourcePath, targetPath, callBack)
> **API说明:**  
> ```Core.crossPlatform.CMD_CP()```是一个跨平台异步复制文件或目录的API。**<font color="red">注意：此API将会复制目录下所有内容及子目录，若在执行过程中，如果有文件冲突将覆盖原文件，可能会造成数据丢失！</font>**

> **参数列表:**  
> **1. sourcePath\<String\>**  
> 待复制的文件或目录的路径，**必传项**，为**字符串**。  
> **2. targetPath\<String\>**  
> 复制至的文件或目录的路径，**必传项**，为**字符串**。  
> **3. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  
>> **err\<Error\>：**错误原因，为**错误类型**。 

> **样例代码:**  
> 
```
let Core = require('Core.js');
let sourcePath = '/Users/Douzi/Desktop/Test';
let targetPath = '/Users/Douzi/Desktop/TestCopy';
Core.crossPlatform.CMD_CP(sourcePath, targetPath, (result, err) => {
  console.log(result);
  console.log(err);
});
```

<a id="3.17.5"></a>
#### 3.17.5 Core.crossPlatform.CMD\_CP\_SYNC(sourcePath, targetPath)
> **API说明:**  
> ```Core.crossPlatform.CMD_CP_SYNC()```是一个跨平台同步复制文件或目录的API。**<font color="red">注意：此API将会复制目录下所有内容及子目录，若在执行过程中，如果有文件冲突将覆盖原文件，可能会造成数据丢失！</font>**

> **参数列表:**  
> **1. sourcePath\<String\>**  
> 待复制的文件或目录的路径，**必传项**，为**字符串**。  
> **2. targetPath\<String\>**  
> 复制至的文件或目录的路径，**必传项**，为**字符串**。  

> **样例代码:**  
> 
```
let Core = require('Core.js');
let sourcePath = '/Users/Douzi/Desktop/Test';
let targetPath = '/Users/Douzi/Desktop/TestCopy';
Core.crossPlatform.CMD_CP_SYNC(sourcePath, targetPath);
```

<a id="3.17.6"></a>
#### 3.17.6 Core.crossPlatform.CMD_LS(dirPath, callBack)
> **API说明:**  
> ```Core.crossPlatform.CMD_LS()```是一个跨平台异步查看目录信息的API。显示的信息为其目录下的所有内容的信息列表。   

> **参数列表:**  
> **1. dirPath\<String\>**  
> 待查看信息目录的路径，**必传项**，为**字符串**。<font color="red">该值必须为一个已存在的目录。</font>  
> **2. callBack\<Function\>**  
> 调用回调，**必传项**，为**函数类型**。  
>> 参数列表为：  
>> **result\<Boolean\>：**执行结果，为**布尔类型**。  
>> **infos\<Array\<Object\>\>：**目录信息，为**数组类型<对象类型>**。  
>>> 字段说明：  
>>> **pathName\<String\>：**路径名，为**字符串**。  
>>> **realPath\<String\>：**在文件系统中的实际路径，为**字符串**。  
>>> **isDir\<Boolean\>：**是否为目录，为**布尔类型**。  
>>> **size\<String\>：**占用空间体积，为**整型数字**，单位为**Byte**。  
>>> **accessTime\<Date\>：**上一次访问时间，为**日期类型**。  
>>> **modifyTime:\<Date\>：**上一次内容修改时间，为**日期类型**。  
>>> **changeTime\<Date\>：**上一次状态更改时间，为**日期类型**。  
>>> **birthTime\<Date\>：**创建时间，为**日期类型**。  

>> **err\<Error\>：**错误原因，为**错误类型**。  

> **样例代码:**  
> 
```
let Core = require('Core.js');
let sourcePath = '/Users/Douzi/Desktop/Test';
Core.crossPlatform.CMD_LS(sourcePath, (result, dirInfos, err) => {
  console.log(result);
  console.log(dirInfos);
  console.log(err);
});
```

<a id="3.17.7"></a>
#### 3.17.7 Core.crossPlatform.CMD\_LS\_SYNC(dirPath)
> **API说明:**  
> ```Core.crossPlatform.CMD_LS()```是一个跨平台同步查看目录信息的API。显示的信息为其目录下的所有内容的信息列表。   

> **参数列表:**  
> **1. dirPath\<String\>**  
> 待查看信息目录的路径，**必传项**，为**字符串**。<font color="red">该值必须为一个已存在的目录。</font>    

> **结果说明:**  
> **1. infos\<Array\<Object\>\>**  
> 目录信息，为**数组类型<对象类型>**。  
>> 字段说明：  
>> **pathName\<String\>：**路径名，为**字符串**。  
>> **realPath\<String\>：**在文件系统中的实际路径，为**字符串**。  
>> **isDir\<Boolean\>：**是否为目录，为**布尔类型**。  
>> **size\<String\>：**占用空间体积，为**整型数字**，单位为**Byte**。  
>> **accessTime\<Date\>：**上一次访问时间，为**日期类型**。  
>> **modifyTime:\<Date\>：**上一次内容修改时间，为**日期类型**。  
>> **changeTime\<Date\>：**上一次状态更改时间，为**日期类型**。  
>> **birthTime\<Date\>：**创建时间，为**日期类型**。  

> **样例代码:**  
> 
```
let Core = require('Core.js');
let sourcePath = '/Users/Douzi/Desktop/Test';
Core.crossPlatform.CMD_LS_SYNC(sourcePath);
```

<a id="3.18"></a>
### 3.18 Core.macro
> **说明:**  
> 0. Core.macro包含了Core.js使用的所有宏。  

<a id="3.18.1"></a>
#### 3.18.1 Core.macro.VALUE
> **API说明:**  
> ```Core.macro.VALUE```为Checker模块值类型相关宏的集合。

<a id="3.18.1.1"></a>
##### 3.18.1.1 Core.macro.VALUE\_TYPE\_OBJECT
> **宏说明:**  
> Object（对象）值类型。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'object'**

<a id="3.18.1.2"></a>
##### 3.18.1.2 Core.macro.VALUE\_TYPE\_ARRAY
> **宏说明:**  
> Array（数组）值类型。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'array'**

<a id="3.18.1.3"></a>
##### 3.18.1.3 Core.macro.VALUE\_TYPE\_STRING
> **宏说明:**  
> String（字符串）值类型。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'string'**

<a id="3.18.1.4"></a>
##### 3.18.1.4 Core.macro.VALUE\_TYPE\_BOOLEAN
> **宏说明:**  
> Boolean（布尔）值类型。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'boolean'**

<a id="3.18.1.5"></a>
##### 3.18.1.5 Core.macro.VALUE\_TYPE\_NUMBER
> **宏说明:**  
> Number（数值）值类型。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'number'**

<a id="3.18.1.6"></a>
##### 3.18.1.6 Core.macro.VALUE\_TYPE\_FUNCTION
> **宏说明:**  
> Function（函数）值类型。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'function'**

<a id="3.18.1.7"></a>
##### 3.18.1.7 Core.macro.VALUE\_TYPE\_UNDEFINED
> **宏说明:**  
> Undefined（未定义）值类型。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'undefined'**

<a id="3.18.1.8"></a>
##### 3.18.1.8 Core.macro.VALUE\_TYPE\_NULL
> **宏说明:**  
> Null（空）值类型。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'null'**

<a id="3.18.1.9"></a>
##### 3.18.1.9 Core.macro.VALUE\_TYPE\_ANY
> **宏说明:**  
> Any（泛型）值类型。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'any'**

<a id="3.18.1.9"></a>
##### 3.18.1.9 Core.macro.VALUE\_TYPE\_ANY
> **宏说明:**  
> Any（泛型）值类型。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'any'**

<a id="3.18.1.10"></a>
##### 3.18.1.10 Core.macro.VALUE\_MAX
> **宏说明:**  
> 数字最大值。  

> **宏的值:**  
> 类型为：**数字类型\<Number\>**  
> 值为：**Number.MAX_VALUE**

<a id="3.18.1.11"></a>
##### 3.18.1.11 Core.macro.VALUE\_MIN
> **宏说明:**  
> 数字最小值。  

> **宏的值:**  
> 类型为：**数字类型\<Number\>**  
> 值为：**Number.MIN_VALUE**

<a id="3.18.2"></a>
#### 3.18.2 Core.macro.CODE\_CHECKER\_RESULT
> **API说明:**  
> ```Core.macro.CODE_CHECKER_RESULT```为Checker模块校验结果相关宏的集合。

<a id="3.18.2.1"></a>
##### 3.18.2.1 Core.macro.CODE\_CHECKER\_RESULT\_TYPE\_MISMATCH
> **宏说明:**  
> Checker校验时实际类型与期望类型不匹配。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'90'**

<a id="3.18.2.2"></a>
##### 3.18.2.2 Core.macro.CODE\_CHECKER\_RESULT\_VALUE\_EMPTY
> **宏说明:**  
> Checker校验时期望非空值为空。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'99'**

<a id="3.18.2.3"></a>
##### 3.18.2.3 Core.macro.CODE\_CHECKER\_RESULT\_LENGTH\_MISMATCH
> **宏说明:**  
> Checker校验时值实际长度与期望长度不匹配。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'92'**

<a id="3.18.2.4"></a>
##### 3.18.2.4 Core.macro.CODE\_CHECKER\_RESULT\_REGEXP\_MISMATCH
> **宏说明:**  
> Checker校验时实际值与期望正则不匹配。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'93'**

<a id="3.18.2.5"></a>
##### 3.18.2.5 Core.macro.CODE\_CHECKER\_RESULT\_VALUE\_MISMATCH
> **宏说明:**  
> Checker校验时实际值与期望值不匹配。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'94'**

<a id="3.18.2.6"></a>
##### 3.18.2.6 Core.macro.CODE\_CHECKER\_RESULT\_CHECKER\_MISMATCH
> **宏说明:**  
> Checker校验时未能通过自定义函数校验。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'95'**

<a id="3.18.3"></a>
#### 3.18.3 Core.macro.CODE\_TYPE\_NAME
> **API说明:**  
> ```Core.macro.CODE_TYPE_NAME```为ControlCore模块核心名称相关宏的集合。

<a id="3.18.3.1"></a>
##### 3.18.3.1 Core.macro.CORE\_TYPE\_NAME\_SERVER
> **宏说明:**  
> ServerCore的名称。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'server'**

<a id="3.18.3.2"></a>
##### 3.18.3.2 Core.macro.CORE\_TYPE\_NAME\_MONGODB
> **宏说明:**  
> MongodbCore的名称。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'mongodb'**

<a id="3.18.3.3"></a>
##### 3.18.3.3 Core.macro.CORE\_TYPE\_NAME\_MYSQL
> **宏说明:**  
> MysqlCore的名称。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'mysql'**

<a id="3.18.3.4"></a>
##### 3.18.3.4 Core.macro.CORE\_TYPE\_NAME\_FASTDFS
> **宏说明:**  
> FastDFSCore的名称。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'fastDFS'**

<a id="3.18.3.5"></a>
##### 3.18.3.5 Core.macro.CORE\_TYPE\_NAME\_MESSAGE
> **宏说明:**  
> MessageCore的名称。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'message'**

<a id="3.18.3.6"></a>
##### 3.18.3.6 Core.macro.CORE\_TYPE\_NAME\_OBJECT
> **宏说明:**  
> 托管Object时使用的名称。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'object'**

<a id="3.18.4"></a>
#### 3.18.4 Core.macro.MONGODB
> **API说明:**  
> ```Core.macro.MONGODB```为MongodbCore模块相关宏的集合。

<a id="3.18.4.1"></a>
##### 3.18.4.1 Core.macro.MONGODB\_EVENT\_NAME\_INIT
> **宏说明:**  
> MongodbCore初始化事件名称。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'init'**

<a id="3.18.4.2"></a>
##### 3.18.4.2 Core.macro.MONGODB\_DATASTRUCT\_TYPE
> **宏说明:**  
> 构建DataStructs时数据类型相关宏的集合，指向```mongoose.Schema.Types```。详情可参照mongoose文档的schematypes一节。  

> **宏的值:**  
> 类型为：**对象类型\<Object\>**  
> 值为：**```mongoose.Schema.Types```**

<a id="3.18.4.3"></a>
##### 3.18.4.3 Core.macro.CODE\_MONGODB\_CONNECT\_SUCCESS
> **宏说明:**  
> MongodbCore初始化时连接实例成功。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'00'**

<a id="3.18.4.4"></a>
##### 3.18.4.4 Core.macro.CODE\_MONGODB\_CONNECT\_DATABASE\_ERROR
> **宏说明:**  
> MongodbCore初始化时连接实例失败。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'11'**

<a id="3.18.4.5"></a>
##### 3.18.4.5 Core.macro.CODE\_MONGODB\_CONNECT\_DATABASE\_INVALID
> **宏说明:**  
> MongodbCore初始化时实例处于不可用状态。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'99'**

<a id="3.18.4.6"></a>
##### 3.18.4.6 Core.macro.CODE\_MONGODB\_EXECUTION\_SUCCESS
> **宏说明:**  
> MongodbCore执行指令成功。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'00'**

<a id="3.18.4.7"></a>
##### 3.18.4.7 Core.macro.CODE\_MONGODB\_EXECUTION\_DATA\_NO\_MATCH
> **宏说明:**  
> MongodbCore执行指令时没有匹配到数据。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'01'**

<a id="3.18.4.8"></a>
##### 3.18.4.8 Core.macro.CODE\_MONGODB\_EXECUTION\_DATA\_NO\_UPDATE
> **宏说明:**  
> MongodbCore执行指令时没有更新数据。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'02'**

<a id="3.18.4.9"></a>
##### 3.18.4.9 Core.macro.CODE\_MONGODB\_EXECUTION\_PRIMARY\_KEY\_EMPTY
> **宏说明:**  
> MongodbCore执行指令时主键为空。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'61'**

<a id="3.18.4.10"></a>
##### 3.18.4.10 Core.macro.CODE\_MONGODB\_EXECUTION\_PRIMARY\_KEY\_CONFLICT
> **宏说明:**  
> MongodbCore执行指令时主键冲突。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'62'**

<a id="3.18.4.11"></a>
##### 3.18.4.11 Core.macro.CODE\_MONGODB\_EXECUTION\_OTHER\_ERROR
> **宏说明:**  
> MongodbCore执行指令时出现不可预知的错误。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'66'**

<a id="3.18.4.12"></a>
##### 3.18.4.12 Core.macro.CODE\_MONGODB\_EXECUTION\_MODEL\_NO\_BUILD
> **宏说明:**  
> MongodbCore执行指令时数据模型尚未构建。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'99'**

<a id="3.18.5"></a>
#### 3.18.5 Core.macro.MYSQL
> **API说明:**  
> ```Core.macro.MYSQL```为MysqlCore模块相关宏的集合。

<a id="3.18.5.1"></a>
##### 3.18.5.1 Core.macro.MYSQL\_EVENT\_NAME\_INIT
> **宏说明:**  
> MysqlCore初始化事件名称。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'init'**

<a id="3.18.5.2"></a>
##### 3.18.5.2 Core.macro.CODE\_MYSQL\_CONNECT\_SUCCESS
> **宏说明:**  
> MysqlCore初始化时连接实例成功。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'00'**

<a id="3.18.5.3"></a>
##### 3.18.5.3 Core.macro.CODE\_MYSQL\_CONNECT\_DATABASE\_ERROR
> **宏说明:**  
> MysqlCore初始化时连接实例失败。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'11'**

<a id="3.18.5.4"></a>
##### 3.18.5.4 Core.macro.CODE\_MYSQL\_CONNECT\_DATABASE\_INVALID
> **宏说明:**  
> MysqlCore初始化时实例处于不可用状态。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'99'**

<a id="3.18.5.5"></a>
##### 3.18.5.5 Core.macro.CODE\_MYSQL\_EXECUTION\_SUCCESS
> **宏说明:**  
> MysqlCore执行指令成功。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'00'**

<a id="3.18.5.6"></a>
##### 3.18.5.6 Core.macro.CODE\_MYSQL\_EXECUTION\_OTHER\_ERROR
> **宏说明:**  
> MysqlCore执行指令时出现不可预知的错误。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'66'**

<a id="3.18.5.7"></a>
##### 3.18.5.7 Core.macro.CODE\_MYSQL\_EXECUTION\_TRANSACTION\_START\_ERROR
> **宏说明:**  
> MysqlCore执行指令时打开事务出错。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'67'**

<a id="3.18.5.8"></a>
##### 3.18.5.8 Core.macro.CODE\_MYSQL\_EXECUTION\_TRANSACTION\_COMMIT\_ERROR
> **宏说明:**  
> MysqlCore执行指令时提交事务出错。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'68'**

<a id="3.18.5.9"></a>
##### 3.18.5.9 Core.macro.CODE\_MYSQL\_EXECUTION\_TRANSACTION\_CANCEL
> **宏说明:**  
> MysqlCore执行指令时事务被取消。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'69'**

<a id="3.18.5.10"></a>
##### 3.18.5.10 Core.macro.CODE\_MYSQL\_EXECUTION\_GET\_CONNECTION\_ERROR
> **宏说明:**  
> MysqlCore执行指令时从连接池获取连接错误。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'88'**

<a id="3.18.5.11"></a>
##### 3.18.5.11 Core.macro.CODE\_MYSQL\_EXECUTION\_GET\_POOL\_ERROR
> **宏说明:**  
> MysqlCore执行指令时获取连接池错误。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'99'**

<a id="3.18.6"></a>
#### 3.18.6 Core.macro.FASTDFS
> **API说明:**  
> ```Core.macro.FASTDFS```为FastDFSCore模块相关宏的集合。

<a id="3.18.6.1"></a>
##### 3.18.6.1 Core.macro.FASTDFS\_EVENT\_NAME\_INIT
> **宏说明:**  
> FastDFSCore初始化事件名称。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'init'**

<a id="3.18.6.2"></a>
##### 3.18.6.2 Core.macro.CODE\_FASTDFS\_CONNECT\_SUCCESS
> **宏说明:**  
> FastDFSCore初始化时连接实例成功。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'00'**

<a id="3.18.6.3"></a>
##### 3.18.6.3 Core.macro.CODE\_FASTDFS\_CONNECT\_TRACKER\_ERROR
> **宏说明:**  
> FastDFSCore初始化时连接实例失败。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'11'**

<a id="3.18.6.4"></a>
##### 3.18.6.4 Core.macro.CODE\_FASTDFS\_CONNECT\_TRACKER\_INVALID
> **宏说明:**  
> FastDFSCore初始化时实例处于不可用状态。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'99'**

<a id="3.18.6.5"></a>
##### 3.18.6.5 Core.macro.CODE\_FASTDFS\_EXECUTION\_SUCCESS
> **宏说明:**  
> FastDFSCore执行指令成功。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'00'**

<a id="3.18.6.6"></a>
##### 3.18.6.6 Core.macro.CODE\_FASTDFS\_EXECUTION\_OTHER\_ERROR
> **宏说明:**  
> FastDFSCore执行指令时出现不可预知的错误。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'66'**

<a id="3.18.6.7"></a>
##### 3.18.6.7 Core.macro.CODE\_FASTDFS\_EXECUTION\_GET\_TRACKER\_ERROR
> **宏说明:**  
> FastDFSCore执行指令时获取实例失败。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'99'**

<a id="3.18.7"></a>
#### 3.18.7 Core.macro.SERVER
> **API说明:**  
> ```Core.macro.SERVER```为ServerCore模块相关宏的集合。

<a id="3.18.7.1"></a>
##### 3.18.7.1 Core.macro.CODE\_SERVER\_COMMON\_GET\_FOLDER\_INFO\_SUCCESS
> **宏说明:**  
> ServerCore的CommonAPI获取挂载器文件夹信息成功。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'00'**

<a id="3.18.7.2"></a>
##### 3.18.7.2 Core.macro.CODE\_SERVER\_COMMON\_GET\_FOLDER\_INFO\_INDEX\_INVALID
> **宏说明:**  
> ServerCore的CommonAPI获取挂载器时指定的索引无效。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'88'**

<a id="3.18.7.3"></a>
##### 3.18.7.3 Core.macro.CODE\_SERVER\_COMMON\_GET\_FOLDER\_INFO\_MOUNTER\_CLOSE
> **宏说明:**  
> ServerCore的CommonAPI获取挂载器时挂载器处于不可用状态。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'99'**

<a id="3.18.7.4"></a>
##### 3.18.7.4 Core.macro.CODE\_SERVER\_COMMON\_SAVE\_SUCCESS
> **宏说明:**  
> ServerCore的CommonAPI存储文件成功。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'00'**

<a id="3.18.7.5"></a>
##### 3.18.7.5 Core.macro.CODE\_SERVER\_COMMON\_SAVE\_FAILURE
> **宏说明:**  
> ServerCore的CommonAPI存储文件失败。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'66'**

<a id="3.18.8"></a>
#### 3.18.8 Core.macro.CLUSTER
> **API说明:**  
> ```Core.macro.CLUSTER```为ClusterCore模块相关宏的集合。

<a id="3.18.8.1"></a>
##### 3.18.8.1 Core.macro.CLUSTER\_TYPE\_MASTER
> **宏说明:**  
> ClusterCore执行```getType()```的结果之一，表示当前运行进程为Master（主进程）。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'master'**

<a id="3.18.8.2"></a>
##### 3.18.8.2 Core.macro.CLUSTER\_TYPE\_WORKER
> **宏说明:**  
> ClusterCore执行```getType()```的结果之一，表示当前运行进程为Worker（工作进程）。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'worker'**

<a id="3.18.8.3"></a>
##### 3.18.8.3 Core.macro.CLUSTER\_MASTER\_EVENT\_NAME\_INIT
> **宏说明:**  
> ClusterCore在完成Master（主进程）初始化时的在Master（主进程）发起的回调事件名。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'MASTER:EVENT\_INIT'**

<a id="3.18.8.4"></a>
##### 3.18.8.4 Core.macro.CLUSTER\_MASTER\_EVENT\_NAME\_SYNC\_GLOBAL\_OBJECT
> **宏说明:**  
> ClusterCore在Master（主进程）的全局对象被更新时在Master（主进程）发起的回调事件名。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'MASTER:EVENT\_SYNC\_GLOBAL\_OBJECT'**

<a id="3.18.8.5"></a>
##### 3.18.8.5 Core.macro.CLUSTER\_WORKER\_EVENT\_NAME\_INIT
> **宏说明:**  
> ClusterCore在完成Worker（工作进程）初始化时的在Worker（工作进程）发起的回调事件名。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'WORKER:EVENT\_INIT'**

<a id="3.18.8.6"></a>
##### 3.18.8.6 Core.macro.CLUSTER\_WORKER\_EVENT\_NAME\_SYNC\_GLOBAL\_OBJECT
> **宏说明:**  
> ClusterCore在Worker（工作进程）的全局对象被更新时在Worker（工作进程）发起的回调事件名。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'WORKER:EVENT\_SYNC\_GLOBAL\_OBJECT'**

<a id="3.18.8.7"></a>
##### 3.18.8.7 Core.macro.CLUSTER\_MASTER\_IPC\_TYPE\_GET\_WORKER\_INDEX\_RESULT
> **宏说明:**  
> ClusterCore进行IPC通信时，由Master（主进程）向Worker（工作进程）发送的Worker（工作进程）获取进程索引处理结果的消息类型  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'MASTER:IPC\_GET\_WORKER\_INDEX\_RESULT'**

<a id="3.18.8.8"></a>
##### 3.18.8.8 Core.macro.CLUSTER\_MASTER\_IPC\_TYPE\_SET\_GLOBAL\_OBJECT
> **宏说明:**  
> ClusterCore进行IPC通信时，由Master（主进程）向Worker（工作进程）发送的使Worker（工作进程）同步全局对象的消息类型  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'MASTER:IPC\_SET\_GLOBAL\_OBJECT'**

<a id="3.18.8.9"></a>
##### 3.18.8.9 Core.macro.CLUSTER\_MASTER\_IPC\_TYPE\_SET\_GLOBAL\_OBJECT\_RESULT
> **宏说明:**  
> ClusterCore进行IPC通信时，由Master（主进程）向Worker（工作进程）发送的Worker（工作进程）设置全局对象处理结果的消息类型  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'MASTER:IPC\_SET\_GLOBAL\_OBJECT\_RESULT'**

<a id="3.18.8.10"></a>
##### 3.18.8.10 Core.macro.CLUSTER\_MASTER\_IPC\_TYPE\_GET\_GLOBAL\_OBJECT\_RESULT
> **宏说明:**  
> ClusterCore进行IPC通信时，由Master（主进程）向Worker（工作进程）发送的Worker（工作进程）获取全局对象处理结果的消息类型  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'MASTER:IPC\_GET\_GLOBAL\_OBJECT\_RESULT'**

<a id="3.18.8.11"></a>
##### 3.18.8.11 Core.macro.CLUSTER\_WORKER\_IPC\_TYPE\_GET\_WORKER\_INDEX
> **宏说明:**  
> ClusterCore进行IPC通信时，由Worker（工作进程）向Master（主进程）发送的获取Worker（工作进程）进程索引的消息类型  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'WORKER:IPC\_GET\_WORKER\_INDEX'**

<a id="3.18.8.12"></a>
##### 3.18.8.12 Core.macro.CLUSTER\_WORKER\_IPC\_TYPE\_SET\_GLOBAL\_OBJECT
> **宏说明:**  
> ClusterCore进行IPC通信时，由Worker（工作进程）向Master（主进程）发送的设置全局对象的消息类型  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'WORKER:IPC\_SET\_GLOBAL\_OBJECT'**

<a id="3.18.8.13"></a>
##### 3.18.8.13 Core.macro.CLUSTER\_WORKER\_IPC\_TYPE\_GET\_GLOBAL\_OBJECT
> **宏说明:**  
> ClusterCore进行IPC通信时，由Worker（工作进程）向Master（主进程）发送的获取全局对象的消息类型  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'WORKER:IPC\_GET\_GLOBAL\_OBJECT'**

<a id="3.18.8.14"></a>
##### 3.18.8.14 Core.macro.CLUSTER\_WORKER\_IPC\_TYPE\_SHUTDOWN
> **宏说明:**  
> ClusterCore进行IPC通信时，由Worker（工作进程）向Master（主进程）发送的终止进程组的消息类型  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'WORKER:IPC\_SHUTDOWN'**

<a id="3.18.9"></a>
#### 3.18.9 Core.macro.LOGGER
> **API说明:**  
> ```Core.macro.LOGGER```为LogCore模块相关宏的集合。

<a id="3.18.9.1"></a>
##### 3.18.9.1 Core.macro.LOGGER\_NAME\_DEV
> **宏说明:**  
> LogCore在DEV环境下的输出器名称。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'[DEV LOG]'**

<a id="3.18.9.2"></a>
##### 3.18.9.2 Core.macro.LOGGER\_NAME\_PROD
> **宏说明:**  
> LogCore在PROD环境下的输出器名称。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'[PROD LOG]'**

<a id="3.18.9.3"></a>
##### 3.18.9.3 Core.macro.LOGGER\_NAME\_PROD\_HANDLER
> **宏说明:**  
> LogCore在PROD环境下的Handler输出器名称，实际不影响日志输出前缀。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**'[PROD HANDLER LOG]'**

<a id="3.18.10"></a>
#### 3.18.10 Core.macro.COMMON
> **API说明:**  
> ```Core.macro.COMMON```为CommonAPI(常用API)部分相关宏的集合。

<a id="3.18.10.1"></a>
##### 3.18.10.1 Core.macro.COMMON\_CURRENT\_PATH
> **宏说明:**  
> NodeJS执行时的工作目录，即process.cwd()。  

> **宏的值:**  
> 类型为：**字符串类型\<String\>**  
> 值为：**process.cwd()**

<a id="4"></a>
## 4. 其他说明（使用工程包时）
> **<font color="red">下述内容为使用工程包时才具有的功能描述。若采用只引入核心模块的方式，则不需要进行了解。</font>**

<a id="4.1"></a>
### 4.1 文件结构
> 
```
|-- Core    ------------------------------  核心模块目录
    |-- Core.js    -----------------------  核心模块文件
|-- Docs    ------------------------------  文档目录
    |-- README.md    ---------------------  Markdown格式文档
    |-- Preview    -----------------------  Web格式文档目录
        |-- index.html    ----------------  Web格式文档
|-- Source    ----------------------------  源码工作区
    |-- Build    -------------------------  构建指令目录
        |-- build.js    ------------------  打包脚本文件
        |-- clear.js    ------------------  清理脚本文件
    |-- Cert    --------------------------  证书目录
        |-- Build    ---------------------  构建所需证书目录
            |-- rsa_private_key.pem    ---  RSA签名私钥
            |-- rsa_public_key.pem    ----  RSA签名公钥
        |-- Server    --------------------  服务所需证书目录
            |-- certificate.crt    -------  SSL证书
            |-- privatekey.pem    --------  SSL私钥
    |-- Config    ------------------------  应用配置目录
        |-- ConfigFile    ----------------  配置文件目录
            |-- MongodbDataStructs.js    -  Mongodb数据模型配置文件
            |-- Services.js    -----------  服务配置文件
        |-- ServerConfig.js    -----------  应用配置文件
    |-- Func    --------------------------  底层API目录
        |-- TestModule    ----------------  模块目录
            |-- TestFuncs.js    ----------  底层API文件
    |-- Handle    ------------------------  Handler目录
        |-- IndexHandler.js    -----------  样例首页Handler文件
        |-- ModelHandler.js    -----------  样例模板Handler文件
        |-- TestHandler.js    ------------  样例综合Handler文件
    |-- AppMain.js    --------------------  Main文件
|-- UpdateInfo    ------------------------  核心模块更新日志详情
|-- index.js    --------------------------  入口文件
|-- package.json    ----------------------  package.json文件
|-- 框架更新日志    ------------------------  核心模块更新日志
```

<a id="4.2"></a>
### 4.2 操作指令
> **<font color="red">下述所有命令需要在工程根目录（即index.js所在目录）中执行。</font>**

<a id="4.2.1"></a>
#### 4.2.1 npm run build
> **说明:**  
> 0. ```[npm run build]```为打包指令，将会自动打包。  
> 1. ```[npm run build]```打包时的配置项可以在```/Source/Config/ServerConfig.js```中配置。  
> 2. ```[npm run build]```打包时的配置项详解可见[```Core.safe.configure()```](#3.10.1)。  
> 3. ```[npm run build]```打包时实际为执行```/Source/Build/build.js```打包脚本。  

<a id="4.2.2"></a>
#### 4.2.2 npm run clear
> **说明:**  
> 0. ```[npm run clear]```为清理指令，将会自动清理已打出来的包。  
> 1. ```[npm run clear]```将会从文件系统中删除配置项```/Source/Config/ServerConfig.js```中的生产文件夹。  
> 2. ```[npm run clear]```打包时实际为执行```/Source/Build/clear.js```清理脚本。

<a id="4.3"></a>
### 4.3 SSL证书
**此章节为创建自签名SSL证书的方法，需要在装有OpenSSL的环境下进行。**
> **指令参考如下:**
> 
```
# 创建并进入任意名称的目录
shell > mkdir Cert && cd Cert
# 创建SSL证书密钥
shell > openssl genrsa -out <SSL密钥文件名.pem> <密钥位数>
# 创建SSL证书请求文件
shell > openssl req -new -key <SSL密钥文件名.pem> -out <SSL证书请求文件名.csr>
# 创建SSL证书
shell > openssl req -x509 -days <有效期(天)> -key <SSL密钥文件名.pem> -in <SSL证书请求文件名.csr> -out <SSL证书文件名.crt>
# 此时将目录中的<SSL密钥文件名.pem>和<SSL证书文件名.crt>即为所得，可自行替换项目资源目录下的密钥和证书。
```

<a id="4.4"></a>
### 4.4 RSA密钥
**此章节为创建RSA密钥及各种类型密钥互相转换的办法，需要在装有OpenSSL的环境下进行。**  
> **密钥说明：**  
> RSA\_PKCS1私钥：以-----BEGIN RSA PRIVATE KEY-----/-----END RSA
PRIVATE KEY-----开头和结尾。  
> RSA\_PKCS8私钥：以-----BEGIN PRIVATE KEY-----/-----END PRIVATE KEY-----开头和结尾。  
> RSA\_PKCS1公钥：以-----BEGIN RSA PUBLIC KEY-----/-----END RSA PUBLIC KEY-----开头和结尾。  
> RSA\_PKCS8公钥：以-----BEGIN PUBLIC KEY-----/-----END PUBLIC KEY-----开头和结尾。  

> **指令参考如下:**
> 
```
# 生成PKCS1私钥
shell > openssl genrsa -out <PKCS1私钥文件名.pem> <密钥位数>
# PKCS1私钥 -> PKCS8私钥
shell > openssl pkcs8 -topk8 -in <PKCS1私钥文件名.pem> -nocrypt -out <PKCS8私钥文件名.pem>
# PKCS1/PKCS8私钥 -> PKCS8公钥
shell > openssl rsa -in <PKCS8私钥文件名.pem/PKCS1私钥文件名.pem> -pubout -out <PKCS8公钥文件名.pem>
# PKCS8公钥 -> PKCS1公钥
shell > openssl rsa -pubin -in <PKCS8公钥文件名.pem> -RSAPublicKey_out -out <PKCS1公钥文件名.pem>
# PKCS1公钥 -> PKCS8公钥
shell > openssl rsa -RSAPublicKey_in -in <PKCS1公钥文件名.pem> -pubout -out <PKCS8公钥文件名.pem>
```

<a id="4.5"></a>
### 4.5 注意事项
> **<font color="red">1. 在完成Handler构建后，需要到```/Source/Config/ConfigFiles/Services.js```绑定。否则服务无法挂载至ServerCore。</font>**  
>
> **<font color="red">2. ...</font>**  

<a id="5"></a>
## 5. 关于作者
> 
```
let author = {
  name: 'Douzi',
  qq: '303569528',
  wechat: 'Dashuaige_Douzi',
  mobile1: '13280503699',
  mobile2: '15666831188',
  email: 'shenshengdou@vip.qq.com',
  remark: '作者很酷很高冷'
};
```
