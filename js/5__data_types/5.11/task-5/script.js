"use strict";

function getLastDayOfMonth(year, month) {

    let date = new Date(year, month + 1);

    let newDate = new Date(+date - 24 * 3600 * 1000);

    return newDate.getDate();

}

console.log(getLastDayOfMonth(2012, 1));