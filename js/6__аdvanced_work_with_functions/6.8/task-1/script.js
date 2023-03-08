"use strict";

function printNumbers(from, to) {
    let num = from;
    console.log(num);
    num++;
    let timerInterval = setInterval(function () {
        console.log(num);
        num++;
        if (num > to) {
            clearInterval(timerInterval);
        }
    }, 1000);

}

printNumbers(5, 10);

function printNumbersRecursive(from, to) {
    let num = from;
    console.log(num);
    num++;
    let timerTimeout = setTimeout(function timer() {
        console.log(num);
        num++;
        if (num > to) {
            clearTimeout(timerTimeout);
        } else {
            timerTimeout = setTimeout(timer, 1000);
        }

    }, 1000);
};

printNumbersRecursive(5, 10);
