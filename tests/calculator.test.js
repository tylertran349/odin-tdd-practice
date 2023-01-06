const calculator = require('../functions/calculator');

test('6 plus 7 equals 13', () => {
    expect(calculator.add(6, 7)).toBe(13);
    expect(calculator.subtract(17, 5)).toBe(12);
    expect(calculator.multiply(2, 8)).toBe(16);
    expect(calculator.divide(100, 25)).toBe(4);
});