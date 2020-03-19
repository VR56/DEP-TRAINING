//Assignment 3
// Problem 1
// Prolem statement 
// http://www.codewars.com/kata/prefill-an-array
// Solution

function prefill(n, v) {

    let flag = false;
    let errorMessage = `${n} is invalid`;
    if (typeof(n) === 'number') {
        if ((Number.isInteger(n) === true && Math.sign(n) === 1) || n === 0) {
            flag = true;
        }
    } else if (typeof(n) === 'string') {
        if (n === '0') {
            flag = true;
        }
    }
    if (!flag) {
        throw new TypeError(errorMessage);
    }
    var arrayToReturn = new Array(n);

    if (n === 0 || n === '0') {
        arrayToReturn = [];
    } else if (v === null) {
        arrayToReturn.fill(undefined);
    } else {
        arrayToReturn.fill(v);
    }

    return arrayToReturn;
}