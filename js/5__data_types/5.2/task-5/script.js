"use strict";

function random(min, max) {

    return min + Math.random() * (max - min);
}

let num;
console.log(random(8, 100));