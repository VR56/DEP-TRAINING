//Assignment 5
// Problem 1
// Prolem statement 
// http://www.codewars.com/kata/array-helpers

// Solution


Array.prototype.square = function() {
    let squaredResult = this.map(x => x ** 2);
    return squaredResult;
}

Array.prototype.cube = function() {
    let cubedResult = this.map(x => x ** 3);
    return cubedResult;
}

Array.prototype.average = function() {
    if (this.length !== 0) {
        var arraySum = this.reduce((a, b) => a + b, 0)
        return arraySum / this.length;
    } else
        return NaN;
}
Array.prototype.sum = function() {
    var arraySum = this.reduce((a, b) => a + b, 0)
    return arraySum;
}
Array.prototype.even = function() {
    var evenArray = this.filter(element => element % 2 === 0)
    return evenArray;
}
Array.prototype.odd = function() {
    var oddArray = this.filter(element => element % 2 === 1);
    return oddArray;
}