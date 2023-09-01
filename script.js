// Prompt the user for two numbers
const num1 = prompt("Enter the first number:");
const num2 = prompt("Enter the second number:");

// Convert the inputs to numbers (assuming the user enters numeric values)
const parsedNum1 = parseFloat(num1);
const parsedNum2 = parseFloat(num2);

// Check if the numbers are equal
const areEqual = parsedNum1 === parsedNum2;

// Display the result in an alert box
alert(`Are the numbers equal? ${areEqual}`);
