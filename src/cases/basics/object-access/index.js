/*
	
访问object中的属性

input       output

{a:1},'a'   1
{a:1},'b'   null    // not undefined

*/


module.exports = (value, property) => {
    if (value.hasOwnProperty(property)) {
        return value[property];
    }
    return null;
};
