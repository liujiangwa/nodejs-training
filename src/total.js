function getTotal(...myArguments) {
    let total = 0;
    myArguments.forEach(element => {
        total = total + element;
    });

    return total;
}

let total = getTotal(1, 3, 4);
console.log(total);