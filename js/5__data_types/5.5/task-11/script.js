"use strict";

function getAverageAge(users) {

    let usersAge = users.map(item => item.age);
    let sum = usersAge.reduce((sum, current) => (sum + current) / users.length, 0);
    let value = sum / users.length;
    return value;

}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

alert(getAverageAge(arr));