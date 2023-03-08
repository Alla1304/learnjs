"use strict";

function filterRange(arr, a, b) {
    let newArr = [];
    for (let item of arr) {
        if (item >= a && item <= b) {
            newArr.push(item);
        }
    }
    return newArr;
}


console.log(filterRange([5, 3, 8, 1], 1, 4));