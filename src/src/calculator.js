const { arrayBuffer } = require("stream/consumers");

// Addition
function addCalculator(a, b) {
    return a + b;
}

// Substraction
function substractTwoNumber(a, b) {
    return a - b;
}

function divideTwoNumbers(a, b) {
    return a / b;
}

function multiplyTwoNumbers(a, b) {
    return a * b;
}

const numbers = [5, 3, 2];
function addNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}


// Divide by zero
function Calculator(bell) {
    // store reference to the bell function
    this.bell = bell;
}

Calculator.prototype.divide = function(x, y) {
    if (y === 0) {
        // make the sound!
        this.bell();
    }

    return x / y;
};


// Divide by zero
const divide = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("This function expect 2 numbers");
    } 
    return a / b;
  };

module.exports = {addCalculator, substractTwoNumber, divideTwoNumbers, multiplyTwoNumbers, addNumbers, numbers, divide};