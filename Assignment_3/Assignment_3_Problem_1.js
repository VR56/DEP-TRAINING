//Assignment 3
// Problem 1
// Prolem statement 
// http://www.codewars.com/kata/prefill-an-array
// Solution

function prefill(n, v) {

    var flag = true;
    var errorMessage = n + " is invalid";
    if (typeof(n) === 'number') {
        if (Number.isInteger(n) == false || Math.sign(n) === -1) {
            flag = false;
        }
    } else if (typeof(n) === 'string') {
        if (+n === NaN || Number.isInteger(+n) === false) {
            flag = false;
        }
    } else {
        flag = false;
    }

    if (flag == false) {
        throw new TypeError(errorMessage);
    }
    var arrayToReturn = new Array(n);

    if (n === 0 || n === '0') {
        arrayToReturn = [];
    } else if (arguments[1] === null) {
        arrayToReturn.fill(undefined);
    } else {
        arrayToReturn.fill(v);
    }

    return arrayToReturn;
}