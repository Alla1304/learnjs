"use strict";

let buttons = document.querySelectorAll('.remove-button');
let panes = document.querySelectorAll('.pane');

for (let i = 0; i <= buttons.length; i++) {
    buttons[i].onclick = function () {
        panes[i].classList.add('close');
    };
}