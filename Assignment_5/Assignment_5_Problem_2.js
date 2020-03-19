//Assignment 5
// Problem 2
// Prolem statement 
// http://www.codewars.com/kata/extract-nested-object-reference

// Solution


Object.prototype.hash = function(string) {
    const properties = string.split(".");
    var myObj = this;
    for (let i = 0; i < properties.length; i++) {
        !!myObj && (myObj = myObj[properties[i]]);
    }
    return myObj;
}