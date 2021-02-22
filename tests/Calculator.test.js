const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let result = Calculator.Sum(9, 3);
    expect(result).toBe(12);
});

test('Calculator subtracting two numbers', () => {
    let result = Calculator.Difference(9, 3);
    expect(result).toBe(6);
});

test('Calculator multiplying two numbers', () => {
    let result = Calculator.Product(9, 3);
    expect(result).toBe(27);
});

test('Calculator dividing two numbers', () => {
    let result = Calculator.Quotient(9, 3);
    expect(result).toBe(3);
});

test('Calculator exponentiation with two numbers', () => {
    let result = Calculator.Exponentiation(9, 3);
    expect(result).toBe(729);
});

test('Calculator finding the root with two numbers', () => {
    let result = Calculator.Root(9, 2);
    expect(result).toBe(3);
});

test('Calculator adding to calculations', () => {
    let calculations = Calculator.Calculations;
    calculations.forEach(function (calc) {
       console.log(calc.GetResults());
    });
});


