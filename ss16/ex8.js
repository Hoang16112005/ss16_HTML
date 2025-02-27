
let firstNum = parseFloat(prompt("Enter first digit: "));
let secondNum = parseFloat(prompt("Enter second digit: "));
let thirdNum = parseFloat(prompt("Enter third digit: "));

if (firstNum === secondNum|| secondNum === thirdNum || thirdNum === firstNum) {
    alert("Vui lòng nhập ba số khác nhau!");
} else {
    let biggestNum = Math.max(firstNum, secondNum, thirdNum);
    alert("The biggest digit is: " + biggestNum);
}