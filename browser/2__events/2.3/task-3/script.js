"use strict";

let table = document.getElementById('grid');

table.addEventListener('click', function (event) {
    if (event.target.tagName != 'TH') {
        return;
    };
    let rows = table.querySelectorAll('tr');
    let tbody = table.querySelector('tbody');
    let sortedRows = Array.from(rows).slice(1);
    let i = event.target.cellIndex;
    if (event.target.dataset.type == 'number') {
        sortedRows = sortedRows.sort((rowA, rowB) => rowA.cells[i].innerHTML - rowB.cells[i].innerHTML);
    };
    if (event.target.dataset.type == 'string') {
        sortedRows = sortedRows.sort((rowA, rowB) => rowA.cells[i].innerHTML > rowB.cells[i].innerHTML ? 1 : -1);
    };
    tbody.append(...sortedRows);
});



