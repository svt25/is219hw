const Calculation = require('../src/models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');
const Exponentiation = require('../src/Operations/Exponentiation');
const Root = require('../src/Operations/Root');

test('Test of Calculation instantiation', () => {
    let op = Sum;
    let calculation = new Calculation(9, 3, op);
    expect(calculation.a).toBe(9);
    expect(calculation.b).toBe(3);
    expect(calculation.op).toBe(op);
});

test('Test GetResults for Sum function', () => {
    let op = Sum;
    let calculation = new Calculation(9, 3, op);
    expect(calculation.GetResults()).toBe(12);
});

test('Test GetResults for Difference function', () => {
   let op = Difference;
   let calculation = new Calculation(9, 3, op);
   expect(calculation.GetResults()).toBe(6);
});

test('Test GetResults for Product function', () => {
    let op = Product;
    let calculation = new Calculation(9, 3, op);
    expect(calculation.GetResults()).toBe(27);
});

test('Test GetResults for Quotient function', () => {
    let op = Quotient;
    let calculation = new Calculation(9, 3, op);
    expect(calculation.GetResults()).toBe(3);
});

test('Test GetResults for Exponentiation function', () => {
    let op = Exponentiation;
    let calculation = new Calculation(9, 3, op);
    expect(calculation.GetResults()).toBe(729);
});

test('Test GetResults for Root function', () => {
    let op = Root;
    let calculation = new Calculation(9, 2, op);
    expect(calculation.GetResults()).toBe(3);
});