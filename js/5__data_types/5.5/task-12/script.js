"use strict";

function unique(arr) {

    let newArr = [];

    for (let str of arr) {
        if (!newArr.includes(str)) {
            newArr.push(str);
        }
    }

    return newArr;
}



let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings));