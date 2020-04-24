/*
	
请读取系统临时路径下的fs-1-test-file文件, 并以UTF-8格式编码返回文件内容字符串

可能用到的API

os.tmpdir
path.join
fs.readFile


*/


const fs = require('fs').promises;
const os = require('os');
const path = require('path');

module.exports = async () => {
    return await fs.readFile(path.join(os.tmpdir(), 'fs-1-test-file'), 'utf8');
};
