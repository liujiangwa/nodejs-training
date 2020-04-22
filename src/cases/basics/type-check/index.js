/*
	
check the input parameter type

input   output

1       'number'
'2'     'string'
null    'null'
NaN     'NaN'
[]      'array'
{}      'object'

*/


module.exports = (value) => {
    if (value === null) {
        return 'null';
    } else if (typeof value == 'number') {
        if (isNaN(value)) {
            return 'NaN';
        } else {
            return 'number';
        }
    } else if (Array.isArray(value)) {
        return 'array';
    } else {
        return typeof value;
    }
};
