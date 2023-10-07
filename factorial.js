// Write a function in any programming language that calculates the factorial of a given number.

function factorial(n) {
  if (n === 0) {
    return 1; // The factorial of 0 is defined as 1.
  } else if (n < 0) {
    return "Undefined"; // Factorial is not defined for negative numbers.
  } else {
    return n * factorial(n - 1); // Recursive call to calculate factorial.
  }
}


const num = 5;
const result = factorial(num);
console.log(`The factorial of ${num} is ${result}`);
