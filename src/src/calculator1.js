class Calculator {

    add(firstAddend, secondAddend) {
        return firstAddend + secondAddend;
    }

    subtract(minuend, subtrahend) {
        return minuend - subtrahend;
    }

    multiply(firstFactor, secondFactor) {
        return firstFactor * secondFactor;
    }

    divide(dividend, divisor) {
        if (divisor === 0) {
            throw Error("cannot divide by zero")
        }
        return dividend / divisor;
    }
}

module.exports = {Calculator, add, subtract, multiply, divide, describe, it};