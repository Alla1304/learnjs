"use strict";

function truncate(str, maxlength) {
    let strLength = str.length;
    if (strLength <= maxlength) {
        return str;
    } else {
        let shortStr = str.slice(0, (maxlength - 1)) + "…";
        return shortStr;
    }
}
