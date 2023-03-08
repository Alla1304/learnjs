"use strict";

let calculator = {
    read() {

        this.a = +prompt('Введите число', '');
        this.b = +prompt('Введите число', '');
    },
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());