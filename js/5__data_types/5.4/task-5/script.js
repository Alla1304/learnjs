"use strict";

function getMaxSubSum(arr) {

    for (let n of arr) {
        if (n >= 0) {
            let maxArr = [];
            let arrLangth = arr.length;
            for (let j = 0; j < arrLangth; j++) {
                let sum = 0;
                let subArr = [];
                for (let i of arr) {
                    sum = sum + i;
                    subArr.push(sum);
                }
                let maxSum = Math.max(...subArr);
                arr.shift();
                maxArr.push(maxSum);
            }
            return Math.max(...maxArr);
            break;
        }
    }
    return 0;
}


console.log(getMaxSubSum([-1, -2, -3]));