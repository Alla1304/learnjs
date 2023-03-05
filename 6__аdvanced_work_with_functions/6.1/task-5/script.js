"use strict";

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    let arr = [];
    arrUnshift(list);
    function arrUnshift(list) {
        arr.unshift(list.value);
        if (list.next) {
            arrUnshift(list.next);
        }
    }
    for (let item of arr) {
        console.log(item);
    }
}

printList(list);



function printListVar2(list) {
    let arr = [];
    while (list) {
        arr.unshift(list.value);
        list = list.next;
    }
    for (let item of arr) {
        console.log(item);
    }
}

printListVar2(list);