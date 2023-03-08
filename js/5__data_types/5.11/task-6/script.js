"use strict";

function getSecondsToday() {

    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let seconds = (+now - +today) / 1000;

    return seconds;
}

console.log(getSecondsToday());