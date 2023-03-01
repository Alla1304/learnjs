"use strict";

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(function (item) {
    let fullName = item.name + ' ' + item.surname;
    item.fullName = fullName;
    delete item.name;
    delete item.surname;
    return item;
});


console.log(usersMapped);