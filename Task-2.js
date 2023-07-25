// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

function sumPositiveNumbers(arr) {
  const sum = arr
    .filter((num) => num > 0)
    .reduce((pre, current) => pre + current, 0);
  return sum;
}

const result = sumPositiveNumbers([2, -5, 10, -3, 7]);
console.log(result); //19
