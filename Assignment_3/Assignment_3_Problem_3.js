//Assignment 3
// Problem 3
// Prolem statement 
// http://www.codewars.com/kata/closures-and-scopes/train/javascript
// Solution

function createFunctions(n) {
    var callbacks = [];

    for (var i = 0; i < n; i++) {
        callbacks.push((i => () => i)(i));
    }

    return callbacks;
}