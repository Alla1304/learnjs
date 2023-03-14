"use strict";

let container = document.getElementById('container');

container.onclick = function (event) {
    let paneTarget = event.target.closest('div');
    if (!paneTarget) return;
    if (!container.contains(paneTarget)) return;
    closePane(paneTarget);
};

function closePane(pane) {
    pane.classList.add('close');
};