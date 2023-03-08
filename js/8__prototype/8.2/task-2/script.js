"use strict";

let obj2 = new obj.constructor(); // Можем, если мы знаем, что у obj есть свойство constructor и оно ссылается на функцию-конструктор

function F() { }
//сработает с функцией, у которой prototype по умолчанию

function Fun() {
    prototype: obj1;
}
//Не сработает с функцией с измененным prototype
