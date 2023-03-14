"use strict";

// 1. getComputedStyle(elem).width зависит от box-sizingж
// 2. elem.clientWidth вернёт фактическую ширину инлайновых блоков
// 3. getComputedStyle(elem).width в разных браузерах по разному учитывается ширина полосы прокрутки
// 4. elem.clientWidth возвращает число, а getComputedStyle(elem).width строку
