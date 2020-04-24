/*
	
请编写一个异步函数, 这个函数会传入一个emitter

请让这个emitter监听多个事件

* data: (string) => void
* end: () => void

当emitter接收到end事件时, 请将之前接收到的data数组按顺序返回(resolve)


*/

const { EventEmitter } = require('events');

module.exports = async (emitter) => {
    emitter.on('data', function (data) {
        if (this.elements === undefined) {
            this.elements = [];
        }
        this.elements.push(data);
    });


    return new Promise((resolve, reject) => {

        emitter.on('end', function () {
            if (this.elements.length > 0) {
                resolve(this.elements);
            } else {
                reject(null);
            }
        });
    });

};
