"use strict";

let arr = ["a", "b"];

arr.push(function () {
    alert(this);
});

arr[2](); // выведет массив в виде строки