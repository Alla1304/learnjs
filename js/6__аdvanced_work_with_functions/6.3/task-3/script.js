"use strict";

let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}

sayHi(); // Ошибка, нельзя вызвать извне функцию, находящуюся внутри блока if