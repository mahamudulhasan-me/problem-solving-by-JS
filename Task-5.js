// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const simpleCalculator = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Something Wrong";
  }
};

const num1 = 5;
const num2 = 3;
const operator = "+";
const result = simpleCalculator(num1, num2, operator);
console.log(result); // Output: 8
