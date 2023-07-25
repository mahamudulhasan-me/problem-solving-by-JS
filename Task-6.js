// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const categories = [
    uppercaseLetters,
    lowercaseLetters,
    numbers,
    specialCharacters,
  ];
  const getRandomChar = (str) => str[Math.floor(Math.random() * str.length)];
  console.log(getRandomChar);

  let password = "";
  for (let i = 0; i < categories.length; i++) {
    password += getRandomChar(categories[i]);
  }

  for (let i = password.length; i < length; i++) {
    const randomCategoryIndex = Math.floor(Math.random() * categories.length);
    password += getRandomChar(categories[randomCategoryIndex]);
  }

  return password;
}

const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);
