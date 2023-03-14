"use strict";

function showNotification({ top = 0, right = 0, className, html }) {
    let div = document.createElement('div');
    div.innerHTML = html;
    document.body.prepend(div);
    div.className = "notification";
    div.classList.add(className);
    div.style.top = top + 'px';
    div.style.right = right + 'px';
    setTimeout(() => div.style.display = "none", 1500);
};


showNotification({
    top: 10,
    right: 10,
    html: "Hello!",
    className: "welcome"
});