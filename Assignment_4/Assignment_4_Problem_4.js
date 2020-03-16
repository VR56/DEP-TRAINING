//Assignment 4
// Problem 4
// Prolem statement 
// http://www.codewars.com/kata/function-composition
// Solution

function compose(f, g) {
    return function(...val) {
        return f(g(...val));
    };
}