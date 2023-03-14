"use strict";


button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);

// Оба обработчика запустятся. Будет выведено 1 и 2