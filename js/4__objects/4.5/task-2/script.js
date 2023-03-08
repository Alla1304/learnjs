"use strict";

function Calculator() {
    this.read = () => {
        this.a = +prompt('Введите a', '');
        this.b = +prompt('Введите b', '');
    };

    this.sum = () => this.a + this.b;
    this.mul = () => this.a * this.b;
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());