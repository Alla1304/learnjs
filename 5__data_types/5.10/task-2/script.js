"use strict";

function topSalary(salaries) {
    let maxSalary = 0;
    let name = null;
    for (let value of Object.entries(salaries)) {
        maxSalary = value[1] > maxSalary ? value[1] : maxSalary;
        if (value[1] == maxSalary) {
            [name] = value;
        }
    }
    return name;
}



let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

topSalary(salaries);