const interface = require('readline-sync');
const calculator = require('./app/calculator');

const firstNumStr = interface.question("Enter the first number: ");
const secondNumStr = interface.question("Enter the second number: ");

const a = parseInt(firstNumStr);
const b = parseInt(secondNumStr);

if (isNaN(a) || isNaN(b)) {
    console.log("Invalid input. Please enter valid numbers.");
    process.exit(1);
}

console.log(`Result of ${a} + ${b} = ${calculator.add(a, b)}`);
console.log(`Result of ${a} - ${b} = ${calculator.subtract(a, b)}`);
console.log(`Result of ${a} * ${b} = ${calculator.multiply(a, b)}`);

try {
    console.log(`Result of ${a} / ${b} = ${calculator.divide(a, b)}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}

if (a < 0) {
    console.log(`Cannot calculate the square root of a negative number: ${a}`);
} else {
    try {
        console.log(`Result of square root of ${a} = ${calculator.squareRoot(a)}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}