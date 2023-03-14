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
    if (position == "bottom") {
        elem.style.left = coords.left + "px";
        elem.style.top = coords.bottom + "px";
    }
    if (position == "top") {
        elem.style.left = coords.left + "px";
        elem.style.top = coords.top - elem.offsetHeight + "px";
    }
    if (position == "right") {
        elem.style.left = coords.right + "px";
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

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");
