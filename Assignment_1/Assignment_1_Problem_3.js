// Problem 3
// Prolem statement 
// http://www.codewars.com/kata/basic-mathematical-operations

// Solution

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
            break;

        case '-':
            return value1 - value2;
            break;

        case '*':
            return value1 * value2;
            break;

        case '/':
            return value1 / value2;
            break;

        default:
            return null;
            break;
    }
}