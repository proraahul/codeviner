// Create an array of numbers and find the sum of all even numbers in the array


// Create an array of numbers
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find the sum of all even numbers in the array
const sumOfEven = array.reduce((acc, curElement) => {
  if (curElement % 2 === 0) {
    acc += curElement;
  }
  return acc;
}, 0);

// Log the sum of all even numbers
console.log(sumOfEven); 