const Calculation = require('./models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');
const Exponentiation = require('../src/Operations/Exponentiation');
const Root = require('../src/Operations/Root');

class Calculator {
    static Calculations = [];
    static Sum(a, b) {
        let calculation = new Calculation(a, b, Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Difference(a, b) {
        let calculation = new Calculation(a, b, Difference);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Product(a, b) {
        let calculation = new Calculation(a, b, Product);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Quotient(a, b) {
        let calculation = new Calculation(a, b, Quotient);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Exponentiation(a, b) {
        let calculation = new Calculation(a, b, Exponentiation);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Root(a, b) {
        let calculation = new Calculation(a, b, Root);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
}

module.exports = Calculator;