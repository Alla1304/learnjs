"use strict";

let ul = document.querySelector('ul');

while (true) {
    let liText = prompt('Введите текст для элемента списка', '');
    if (!liText) {
        break;
    }
    let li = document.createElement('li');
    li.textContent = liText;
    ul.append(li);
};