"use strict";

function formatDate(date) {
    let now = new Date();

    if ((now - date) < 1000) {
        return "прямо сейчас";
    } else if ((now - date) < 1000 * 60) {
        let n = (now - date) / 1000;
        return `${n} сек. назад`;
    } else if ((now - date) < 1000 * 60 * 60) {
        let n = (now - date) / 1000 / 60;
        return `${n} мин. назад`;
    } else {
        let day = String(date.getDate());
        if (day.length < 2) {
            day = "0" + day;
        }
        let month = String(date.getMonth() + 1);
        if (month.length < 2) {
            month = "0" + month;
        }
        let year = String(date.getFullYear()).slice(2);
        let hours = String(date.getHours());
        if (hours.length < 2) {
            hours = "0" + hours;
        }
        let minutes = String(date.getMinutes());
        if (minutes.length < 2) {
            minutes = "0" + minutes;
        }

        return `${day}.${month}.${year} ${hours}:${hours}`;
    }
}

alert(formatDate(new Date(new Date - 1)));
alert(formatDate(new Date(new Date - 30 * 1000)));
alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 1000)));