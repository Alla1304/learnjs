"use strict";

let fieldset = document.getElementById('contents');

fieldset.addEventListener('click', function () {
    let targrtLink = event.target.closest('a');
    if (!targrtLink) return;

    let leave = confirm('Вы действительно хотите покинуть страницу?');

    if (leave) return;

    event.preventDefault();
});