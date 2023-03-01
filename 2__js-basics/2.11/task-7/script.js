"use strict";

let age;

if (!(age >= 14 && age <= 90) && age != undefined) {
    console.log('Не в диапазоне 1');
}

if (age < 14 || age > 90) {
    console.log('Не в диапазоне 2');
}