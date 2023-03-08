"use strict";

let n = 10;
let result;

for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        result = i % j;
        if (result === 0) {
            break;
        }
    }
    if (result !== 0) {
        console.log(i);
    }
}