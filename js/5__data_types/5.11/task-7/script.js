"use strict";

function getSecondsToTomorrow() {

    let now = new Date();

    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let seconds = (tomorrow - now) / 1000;

    return seconds;

}


console.log(getSecondsToTomorrow());