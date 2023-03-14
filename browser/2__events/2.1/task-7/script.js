"use strict";

let arrowBack = document.querySelector('.back');
let arrowForth = document.querySelector('.forth');
let ul = document.querySelector('ul');

arrowBack.onclick = function () {
    ul.scrollLeft -= 390;
};

arrowForth.onclick = function () {
    ul.scrollLeft += 390;
};