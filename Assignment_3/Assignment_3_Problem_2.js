//Assignment 3
// Problem 2
// Prolem statement 
// http://www.codewars.com/kata/a-function-within-a-function
// Solution

function always(n) {
    return function() {
        return n;
    }
}