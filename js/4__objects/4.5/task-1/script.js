"use strict";

function A() {
    return;
}
function B() {
    return a;
}

let a = new A();
let b = new B();

alert(a == b); // true

console.log(a);
console.log(b);