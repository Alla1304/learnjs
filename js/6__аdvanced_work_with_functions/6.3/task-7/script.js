"use strict";

function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () {
            alert(j);
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}

let army = makeArmy();


army[0]();
army[1]();
army[2]();
army[3]();
army[4]();
army[5]();