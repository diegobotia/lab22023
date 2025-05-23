'use strict';

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function squareRoot(a) { return Math.sqrt(a); }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    } else {
        return a / b;
    }
}

module.exports = {
    add,
    subtract,
    squareRoot,
    multiply,
    divide
}