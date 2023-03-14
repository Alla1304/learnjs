"use strict";

let button = document.querySelector('button');
let ul = document.querySelector('ul');
let arrows = document.querySelectorAll('span');

function openUl() {
    ul.classList.toggle('open');
};

function closeArrow() {
    for (let arrow of arrows) {
        arrow.classList.toggle('close');
    }
}

button.addEventListener('click', openUl);
button.addEventListener('click', closeArrow);