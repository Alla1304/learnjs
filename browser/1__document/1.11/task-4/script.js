'use strict';

function positionAt(anchor, position, elem) {
    function getCoords(anchor) {
        let box = anchor.getBoundingClientRect();
        return {
            top: box.top + window.pageYOffset,
            right: box.right + window.pageXOffset,
            bottom: box.bottom + window.pageYOffset,
            left: box.left + window.pageXOffset
        };
    };
    let coords = getCoords(anchor);
    if (position == "bottom-out") {
        elem.style.left = coords.left + "px";
        elem.style.top = coords.bottom + "px";
    }
    if (position == "top-out") {
        elem.style.left = coords.left + "px";
        elem.style.top = coords.top - elem.offsetHeight + "px";
    }
    if (position == "right-out") {
        elem.style.left = coords.right + "px";
        elem.style.top = coords.top + "px";
    }
    if (position == "bottom-in") {
        elem.style.left = coords.left + "px";
        elem.style.top = coords.bottom - elem.offsetHeight + "px";
    }
    if (position == "top-in") {
        elem.style.left = coords.left + "px";
        elem.style.top = coords.top + "px";
    }
    if (position == "right-in") {
        elem.style.left = coords.right - elem.offsetWidth + "px";
        elem.style.top = coords.top + "px";
    }
};

function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-out", "note above");
showNote(blockquote, "right-out", "note at the right");
showNote(blockquote, "bottom-out", "note below");
showNote(blockquote, "top-in", "note above");
showNote(blockquote, "right-in", "note at the right");
showNote(blockquote, "bottom-in", "note below");
