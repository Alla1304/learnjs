"use strict";

function createCalendar(elem, year, month) {
    let table = document.createElement('table');
    elem.prepend(table);
    let tr = document.createElement('tr');
    table.prepend(tr);
    for (let i = 1; i <= 7; i++) {
        let th = document.createElement('th');
        tr.prepend(th);
    };
    let thArr = tr.querySelectorAll('th');
    thArr[0].textContent = 'пн';
    thArr[1].textContent = 'вт';
    thArr[2].textContent = 'ср';
    thArr[3].textContent = 'чт';
    thArr[4].textContent = 'пт';
    thArr[5].textContent = 'сб';
    thArr[6].textContent = 'вс';
    for (let i = 1; i <= 6; i++) {
        let tr = document.createElement('tr');
        table.append(tr);
        for (let i = 1; i <= 7; i++) {
            let td = document.createElement('td');
            tr.prepend(td);
        };
    };
    let tdArr = table.querySelectorAll('td');
    let date = new Date(year, month - 1);
    let day = date.getDay() - 1;
    if (day == -1) day = 6;
    function getLastDayOfMonth(year, month) {
        let date = new Date(year, month, 0);
        return date.getDate();
    };
    let lastDay = getLastDayOfMonth(year, month);
    for (let i = day, num = 1; num <= lastDay; i++, num++) {
        tdArr[i].textContent = num;
    }
};

createCalendar(calendar, 2023, 3);