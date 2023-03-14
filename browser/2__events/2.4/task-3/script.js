"use strict";

let thumbs = document.getElementById('thumbs');
let image = document.getElementById('largeImg');

thumbs.addEventListener('click', function () {
    let link = event.target.closest('a');
    if (!link) return;

    event.preventDefault();
    image.src = link.href;
})