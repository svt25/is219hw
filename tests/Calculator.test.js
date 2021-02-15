const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    // Assigning the results of the calculator sum method to an object, calculator returns an object
    let calculation = Calculator.Sum(1, 2);
    // Assert: Asserting the result will be 3
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe("Sum");
    expect(calculation.GetResults()).toBe(3);
});

