"use strict";

function readNumber(num) {

    do {
        num = prompt('Введите число', '');

    } while (!isFinite(num) || num === '');
    if (num === null) {
        return;
    }


    return +num;
}

function calcSum(x, y) {
    if (x != undefined && y != undefined) {
        alert(x + y);
    }
}

function calculator() {
    let a = readNumber();
    let b = readNumber();
    calcSum(a, b);
}

calculator();

