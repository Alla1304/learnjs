"use strict";

document.addEventListener('mouseover', function (event) {

    if (!event.target.dataset.tooltip) return;

    if (document.querySelector('.tooltip')) {
        document.querySelector('.tooltip').remove();
    }

    let coords = event.target.getBoundingClientRect();
    let tooltip = document.createElement('span');
    tooltip.classList.add('tooltip');
    tooltip.innerHTML = event.target.dataset.tooltip;
    event.target.after(tooltip);

    if ((coords.left - tooltip.offsetWidth / 2 + coords.width / 2) < 0) {
        tooltip.style.left = 0 + 'px';
    } else {
        tooltip.style.left = (coords.left - tooltip.offsetWidth / 2 + coords.width / 2) + 'px';
    };

    if ((coords.top - tooltip.offsetHeight - 5) < 0) {
        tooltip.style.top = (coords.bottom + 5) + 'px';
    } else {
        tooltip.style.top = (coords.top - tooltip.offsetHeight - 5) + 'px';
    };
});

document.addEventListener('mouseout', function (event) {
    if (!event.target.dataset.tooltip) return;

    if (event.target.nextElementSibling.classList.contains('tooltip')) {
        event.target.nextElementSibling.remove();
    };
});
