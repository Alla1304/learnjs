"use strict";

function sumToVar1(n) {
    let result = 0;
    for (let i = n; i > 0; i--) {
        result += i;
    }
    return result;
}

console.log(sumToVar1(1));
console.log(sumToVar1(2));
console.log(sumToVar1(3));
console.log(sumToVar1(4));
console.log(sumToVar1(100));

function sumToVar2(n) {
    if (n == 1) {
        return n;
    } else {
        return n + sumToVar2(n - 1);
    }
}

console.log(sumToVar2(1));
console.log(sumToVar2(2));
console.log(sumToVar2(3));
console.log(sumToVar2(4));
console.log(sumToVar2(100));

function sumToVar3(n) {
    return (n * (n + 1)) / 2;
}

console.log(sumToVar3(1));
console.log(sumToVar3(2));
console.log(sumToVar3(3));
console.log(sumToVar3(4));
console.log(sumToVar3(100));

//P.S Самый быстрый вариант 3, самый медленный вариант 2, так как необходимо хранить в памяти n контекстов
//P.P.S Нельзя, так как 100 000 вызовов за пределамы возможности движка JS