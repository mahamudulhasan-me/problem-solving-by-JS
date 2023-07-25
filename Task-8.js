// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest = (arr) => {
  if (arr.length < 2) {
    return undefined;
  }

  arr.sort((a, b) => a - b);
  return arr[1];
};

const numbers = [3, 8, 1, 6, 2, 9, 5, 4];
const secondSmallest = findSecondSmallest(numbers);
console.log(secondSmallest); // Output: 2
