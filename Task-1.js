// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
// Example Input: "hello world" Example Output: "dlrow olleh"

function reverseString(str) {
  let afterReverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    afterReverse += str[i];
  }
  return afterReverse;
}
const result = reverseString("hello world");
console.log(result); //output: dlrow olleh
