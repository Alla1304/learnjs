"use strict";

let login = prompt('Кто там?', '');
let parol;

if (login == 'Админ') {
    parol = prompt('Пароль?', '');
    if (parol == 'Я главный') {
        alert('Здравствуйте!');
    } else if (parol == null || parol == '') {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (login == null || login == '') {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}
