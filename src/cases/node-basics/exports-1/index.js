/*
	
请编写一个模块，这个模块会exports三个属性

host: string
port: number
addr: string

addr由host:port拼接而成

三个属性的值任意但不为null, undefined或NaN


*/


const host = "host";
const port = 1;
const addr = host + ':' + port;

module.exports = {host, port, addr};
