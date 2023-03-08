"use strict";

function aclean(arr) {
    let map = new Map();
    arr.forEach(function (str) {
        let sortSrt = str.toLowerCase().split('').sort().join();
        map.set(sortSrt, str);
    })
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); 
