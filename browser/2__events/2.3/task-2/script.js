"use strict";

let tree = document.getElementById('tree');

for (let li of tree.querySelectorAll('li')) {
    if (!li.children.length) continue;
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
};


tree.onclick = function (event) {

    if (event.target.tagName != 'SPAN') return;
    event.target.nextElementSibling.classList.toggle('close');
};
