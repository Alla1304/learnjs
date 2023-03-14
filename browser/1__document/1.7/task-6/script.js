"use strict";

for (let li of document.querySelectorAll('li')) {
    let count = li.getElementsByTagName('li').length;
    if (count) {
        li.firstChild.after(' [' + count + ']');
    };
};