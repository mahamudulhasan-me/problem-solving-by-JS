// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const mostFrequentElement = (arr) => {
  let obj = {};
  for (const element of arr) {
    obj[element] ? obj[element]++ : (obj[element] = 1);
  }

  let mostFrequent;
  let maxCount = 0;

  for (const num in obj) {
    if (obj[num] > maxCount) {
      maxCount = obj[num];
      mostFrequent = Number(num);
    }
  }
  return mostFrequent;
};
const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = mostFrequentElement(arr);
console.log(result); //output: 3
