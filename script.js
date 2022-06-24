let firstNumber = prompt('Enter first number')
console.log(firstNumber);
let operator = prompt('Enter an operator')
console.log(operator);
let secondNumber = prompt('Enter second number')
console.log(secondNumber);
let result = ''
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert('Incorect input, not a number')
} else {

    if (operator === '+') {
        result = parseInt(firstNumber) + parseInt(secondNumber)
    }
    
    if (operator === '-') {
        result = parseInt(firstNumber) - parseInt(secondNumber)
    }

    if (operator === '*') {
        result = parseInt(firstNumber) * parseInt(secondNumber)
    }

    if (operator === '/') {
        result = parseInt(firstNumber) / parseInt(secondNumber)
    }
alert(result)
}