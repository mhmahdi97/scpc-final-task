// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(inputString) {
  let reversedString = '';

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  return reversedString;
}


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

















// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function simpleCalculator(num1, num2, operator) {
    if (operator === '+') return num1 + num2
    if (operator === '-') return num1 - num2
    if (operator === '*') return num1 * num2
    if (operator === '/') return num1 / num2

    else return 'error'
}








// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(roman) {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentSymbolValue = romanNumerals[roman[i]];
    const nextSymbolValue = romanNumerals[roman[i + 1]];

    if (nextSymbolValue > currentSymbolValue) {
      result += nextSymbolValue - currentSymbolValue;
      i++; 
    } else {
      result += currentSymbolValue;
    }
  }

  return result;
}









// console.log(reverseString("Hi, darling"))
// console.log(simpleCalculator(4, 5, '-'))
// console.log(romanToInteger('V'))