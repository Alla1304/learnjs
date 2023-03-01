"use strict";

function getLocalDay(date) {
    let days = [7, 1, 2, 3, 4, 5, 6];
    return days[date.getDay()];
}

let date = new Date(2012, 0, 3);
alert(getLocalDay(date)); 