const calc = require("../src/calculator");

// Addition
test("addition of 2 and 3 to equal 5", () => {
  expect(calc.addCalculator(2, 3)).toBe(5);
});

// Subtraction
test("subtruction of 5 and 3 is 2", () => {
  expect(calc.substractTwoNumber(5, 3)).toBe(2);
})

// Division
test("divide of 10 and 5 is 2", () => {
  expect(calc.divideTwoNumbers(10, 5)).toBe(2);
})

// Multiplication
test("multiply 10 and 2 to get 20", () => {
  expect(calc.multiplyTwoNumbers(10, 2)).toBe(20);
})


// Divide by zero
describe("Test divide operator", () => {
  it("Check the divide function", () => {
    expect(calc.divide(10, 0)).toBe(Infinity);
    expect(calc.divide(0, 0)).toBe(NaN);
    expect(calc.divide(Infinity, Infinity)).toBe(NaN);
    expect(calc.divide(10, Infinity)).toBe(0);
  });
});