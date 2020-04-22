/*
	
is less than

input       output

1,2         true
'1','2'     true
'1','1'     false
'1',-1      false

*/


/**
 * @param value1 {number|string}
 * @param value2 {number|string}
 */
module.exports = (value1, value2) => {
    let number1 = value1;
    if (typeof value1 == 'string') {
        number1 = Number(value1);
    }

    let number2 = value2;
    if (typeof value2 == 'string') {
        number2 = Number(value2);
    }
    return number1 < number2;
};
