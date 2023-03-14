"use strict";

let elem = document.querySelector('div');

let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

console.log(scrollBottom);