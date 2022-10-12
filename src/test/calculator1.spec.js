const calculator = require("../src/calculator1");

describe('Calculator', () => {
    it('sums up two numbers properly', () => {
        calculator = new Calculator();
        expect(calculator.add(2,2)).to.equal(4);
    });

    it('subtracts two numbers properly', () => {
        calculator = new Calculator();
        expect(calculator.subtract(4,2)).to.equal(2);
        expect(calculator.subtract(10,3)).to.equal(7);
        expect(calculator.subtract(-4,2)).to.equal(-6);
        expect(calculator.subtract(-4,-2)).to.equal(-2);
    });

    it('multiplies two numbers properly', () => {
        calculator = new Calculator();
        expect(calculator.subtract(2,2)).to.equal(4);
    });
    // ✅ test pass, feature is developed properly
    it('divides two numbers properly', () => {
        calculator = new Calculator();
        expect(calculator.divide(2,2)).to.equal(1);
        expect(calculator.divide(10,2)).to.equal(5);
        expect(calculator.divide(7,2)).to.equal(3.5);
        try{
            calculator.divide(7,0);
        } catch (e) {
            expect(e.toString()).to.equal("cannot divide by zero");
        }
    });
});