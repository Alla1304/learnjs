"use strict";

function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

console.log(randomInteger(5, 50));