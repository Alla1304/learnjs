"use strict";

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

let container = document.getElementById('container');

function createTree(container, data) {
    container.append(createTreeDom(data));
}

function createTreeDom(data) {
    if (!Object.keys(data).length) return;
    let ul = document.createElement('ul');
    for (let item in data) {
        let li = document.createElement('li');
        li.textContent = item;
        let childrenUl = createTreeDom(data[item]);
        if (childrenUl) {
            li.append(childrenUl);
        }
        ul.append(li);
    }
    return ul;
}

createTree(container, data);