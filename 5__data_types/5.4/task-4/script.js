"use strict";

function sumInput() {
    let sum = 0;
    let num;
    let arr = [];
    do {
        num = prompt('Введите число', '');
        if (isNaN(num) || num === '' || num === null) {
            break;
        } else {
            arr.push(num);
        }
    } while (!isNaN(num));

    for (let item of arr) {
        sum += +item;
    }
    return sum;
}



console.log(sumInput());