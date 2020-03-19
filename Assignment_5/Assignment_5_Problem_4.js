//Assignment 5
// Problem 4
// Prolem statement 
// http://www.codewars.com/kata/santaclausable-interface

// Solution

function isSantaClausable(obj) {
    const comparer = "function";
    return (
        (typeof obj.sayHoHoHo === comparer) &&
        (typeof obj.distributeGifts === comparer) &&
        (typeof obj.goDownTheChimney === comparer)
    );
}