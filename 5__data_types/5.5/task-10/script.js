"use strict";

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

}

let arr = [1, 2, 3, 4, 5, 6];

shuffle(arr);

console.log(arr);

