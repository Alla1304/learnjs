"use strict";

let form = document.forms.calculator;
let moneyBefore = document.getElementById('money-before');
let result = Math.round(form.money.value * (1 + (form.interest.value / 100) ** (form.months.value / 12)));
let heightAfter = document.getElementById('height-after');
heightAfter.style.height = result / (form.money.value / 100) + 'px';

moneyBefore.textContent = form.money.value;

let moneyAfter = document.getElementById('money-after');

moneyAfter.textContent = result;

function calculator(event) {
    let target = event.target;

    if (!target) return;

    result = Math.round(form.money.value * (1 + (form.interest.value / 100) * (form.months.value / 12)));
    moneyAfter.textContent = result;

    let heightAfterValue = result / (form.money.value / 100);
    heightAfter.style.height = heightAfterValue + 'px';
};

form.money.onchange = calculator;
form.months.onchange = calculator;
form.interest.onchange = calculator;