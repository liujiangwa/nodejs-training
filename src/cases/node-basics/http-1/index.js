/*
	
请使用http模块编写一个http server

这个server需要在路径/add下面接受json格式的post请求

请求格式如下

{
    "v1": 123,
    "v2": 321
}

响应内容如下

{
    "result": 444
}

本用例没有断言, 请自行编写并测试


*/

let http = require('http');

module.exports = '';/*http.createServer(function (request, response) {
    if (request.url == '/add') {
        let data = JSON.parse(request.);
    } else {
        response.writeHead(404, {'Content-Type': 'application/json'});
        return response.end('not found');
    }
});
*/