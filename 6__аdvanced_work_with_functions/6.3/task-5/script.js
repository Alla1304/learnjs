"use strict";

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return function (item) {
        return item >= a && item <= b;
    };
}

console.log(arr.filter(inBetween(3, 6)));

function inArray(array) {
    return function (item) {
        return array.includes(item);
    };
}

console.log(arr.filter(inArray([1, 2, 10])));