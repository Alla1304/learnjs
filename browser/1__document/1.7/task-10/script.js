"use strict";

let tbody = document.querySelector('tbody');
let srcRows = tbody.querySelectorAll('tr');

let rows = Array.from(srcRows);
rows.sort((a, b) => {
    if (a.querySelector('td').textContent > b.querySelector('td').textContent) {
        return 1;
    } else {
        return -1;
    }
}
);

tbody.append(...rows);


