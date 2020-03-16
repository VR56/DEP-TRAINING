//Assignment 5
// Problem 4
// Prolem statement 
// http://www.codewars.com/kata/santaclausable-interface

// Solution

function isSantaClausable(obj) {
    return (
        (typeof obj.sayHoHoHo === 'function') &&
        (typeof obj.distributeGifts === 'function') &&
        (typeof obj.goDownTheChimney === 'function')
    );
}