// Create a class called MathOperations, more convenient way to export all of the methods within the class

class MathOperations {
    // Make methods static so you don't have to instantiate them before calling
    static Sum(a, b) {
        return a + b;
    }
}

// module.exports to take this out of the file and place somewhere else
// Add name of function or class to export

module.exports = MathOperations;