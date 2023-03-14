"use strict";

let field = document.getElementById('field');
let ball = document.getElementById('ball');

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset + ((elem.offsetHeight - elem.clientHeight) / 2),
        right: box.right + window.pageXOffset - ((elem.offsetWidth - elem.clientWidth) / 2),
        bottom: box.bottom + window.pageYOffset - ((elem.offsetHeight - elem.clientHeight) / 2),
        left: box.left + window.pageXOffset + ((elem.offsetWidth - elem.clientWidth) / 2)
    };
};

let coords = getCoords(field);

ball.style.position = 'absolute';
ball.style.top = coords.top + 'px';
ball.style.left = coords.left + 'px';
ball.style.transition = 'all 0.6s';

field.onclick = function () {
    if (event.clientX > coords.right - ball.clientWidth / 2) {
        ball.style.left = (coords.right - ball.clientWidth) + 'px';
    } else if (event.clientX < coords.left + ball.clientWidth / 2) {
        ball.style.left = coords.left + 'px';
    } else {
        ball.style.left = event.clientX - (ball.clientWidth / 2) + 'px';
    };
    if (event.clientY < coords.top + ball.clientHeight) {
        ball.style.top = coords.top + 'px';
    } else if (event.clientY > coords.bottom - ball.clientHeight) {
        ball.style.top = coords.bottom - ball.clientHeight + 'px';
    } else {
        ball.style.top = event.clientY - (ball.clientHeight / 2) + 'px';
    };
};