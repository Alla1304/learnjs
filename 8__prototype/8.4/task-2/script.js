"use strict";

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function () {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); //Rabbit
Rabbit.prototype.sayHi(); //undefind
Object.getPrototypeOf(rabbit).sayHi();//undefind
rabbit.__proto__.sayHi();//undefind
