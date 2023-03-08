"use strict";

function sumSalaries(salaries) {
    salaries = Object.values(salaries);
    let salariesSum = 0;
    for (let salary of salaries) {
        salariesSum = salariesSum + salary;
    }
    return salariesSum;
}



let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(sumSalaries(salaries));