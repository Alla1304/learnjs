"use strict";

let field = document.getElementById('field');
let ball = document.getElementById('ball');
let centerWidthField = field.clientWidth / 2;
let centerHeightField = field.clientHeight / 2;
let centerWidthBall = ball.clientWidth / 2;
let centerHeightBall = ball.clientHeight / 2;
ball.style.top = (centerHeightField - centerHeightBall) + 'px';
ball.style.left = (centerWidthField - centerWidthBall) + 'px';