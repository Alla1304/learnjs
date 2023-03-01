"use strict";

function groupById(arr) {

    let obj = {}

    for (let i of arr) {
        let key = i.id;
        obj[key] = i;
    }

    return obj;
}

let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
