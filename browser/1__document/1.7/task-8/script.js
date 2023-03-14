"use strict";

let timer;
function clockStart() {
    let now = new Date;
    let hoursClock = document.querySelector('.hours');
    let minutesClock = document.querySelector('.minutes');
    let secondsClock = document.querySelector('.seconds');
    let hoursNow, minutesNow, secondsNow;

    function timeSetting() {
        hoursNow = now.getHours().toString();
        if (hoursNow.length < 2) { hoursNow = '0' + hoursNow; }
        minutesNow = now.getMinutes().toString();
        if (minutesNow.length < 2) { minutesNow = '0' + minutesNow; }
        secondsNow = now.getSeconds().toString();
        if (secondsNow.length < 2) { secondsNow = '0' + secondsNow; }
        hoursClock.textContent = hoursNow;
        minutesClock.textContent = minutesNow;
        secondsClock.textContent = secondsNow;
    }

    timeSetting();

    timer = setInterval(() => {
        now = new Date(+now + 1000);
        timeSetting();
    }, 1000);
}

function clockStop() {
    clearInterval(timer);
}