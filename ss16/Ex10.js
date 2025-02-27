let firstNum = parseFloat(prompt("Enter first number: "));
let secondNum = parseFloat(prompt("Enter second number: "));
let min = Math.min(firstNum, secondNum);
let max = Math.max(firstNum, secondNum);
let firstRandom = Math.random()*(max -min)+min;
console.log(firstRandom);