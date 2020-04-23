/*
	

persons是一个object数组, 格式如下

const persons = [
    {
        name: 'Pszrwnvkv Qtvpumc Mfehdyjvq Uvxpop Vewvbiacm',
        age: 61,
        enabled: false
    },
    {
        name: 'Cgye Diqjru Bhomstt Yxddebqz Oqtism',
        age: 27,
        enabled: true
    }
];

其中name, age与enabled属性都是mandatory的

请返回一个array, 这个array中包含enabled == true并且age >= 30的person name

['Cgye Diqjru Bhomstt Yxddebqz Oqtism']

请确保name出现的先后顺序与其在原array中的先后顺序一致


*/


/**
 * @param persons {Array<{name:string,age:number,enabled:boolean}>}
 */
module.exports = function arrayProcess1(persons) {
    return persons
        .filter(item => item.enabled == true && item.age >= 30)
        .map(item => item.name);
};
