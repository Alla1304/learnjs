"use strict";

function fibVar1(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fibVar1(n - 1) + fibVar1(n - 2);
    }
}

alert(fibVar1(7));


function fib(n) {
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert(fib(77));
