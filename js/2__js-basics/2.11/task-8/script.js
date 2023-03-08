"use strict";

if (-1 || 0) alert('first'); // -1 - выполнится
if (-1 && 0) alert('second'); // 0  - не выполнится
if (null || -1 && 1) alert('third'); // 1 - выполнится