"use strict";

function camelize(str) {
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        let findIndex = arr.indexOf('-', i++);
        if (findIndex >= 0) {
            arr.splice(arr.indexOf('-', findIndex), 2, arr[++findIndex].toUpperCase());
        }
    }
    return arr.join('');
}


console.log(camelize(""));