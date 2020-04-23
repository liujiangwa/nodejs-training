/*
	
使用给定格式对日期进行格式化

d是一个Date对象, f是一个字符串
f中可能包含的占位符:

yyyy, year
MM, month, 1,2,3,4, .... 12
dd, day of month, 1 .... 30 (31)

例如:
const d = new Date("2020-01-01")
const f = 'dd-dd-dd-yyyy'

formatDate(d, f) // 01-01-01-2020

please ref: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date


*/


/**
 * @param d {Date}
 * @param f {string}
 * @returns {string}
 */
module.exports = function formatDate(date, format) {
    let year = `${date.getFullYear()}`;
    let month = `${date.getMonth() + 1}`;
    if (month.length == 1) {
        month = '' + month;
    }
    let day = `${date.getDate()}`;
    if (day.length == 1) {
        day = '' + day;
    }

    let result = format.replace(/yyyy/g, year)
        .replace(/MM/g, month)
        .replace(/dd/g, day);
    return result;
};
