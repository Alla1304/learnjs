"use strict";

let links = document.querySelectorAll('a');

for (let link of links) {
    let href = link.getAttribute('href');
    if (href != null) {
        if (href.includes('://') && !href.startsWith('http://internal.com')) {
            link.style.color = 'orange';
        };
    };
}