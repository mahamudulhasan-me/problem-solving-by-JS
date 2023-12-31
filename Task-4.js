// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

const findTwoNumbersWithSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  // If no such pair is found, return an empty array
  return [];
};
const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const output = findTwoNumbersWithSum(inputArray, targetValue);
console.log(output); // Output: [0, 3]
