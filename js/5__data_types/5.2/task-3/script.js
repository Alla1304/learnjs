"use strict";

function readNumber(n) {
    do {
        n = prompt('Введите число', '');
        if (n == '' || n == null) {
            return null;
        }
    } while (isNaN(n));
    return +n;
}

let num = readNumber();

console.log(num);