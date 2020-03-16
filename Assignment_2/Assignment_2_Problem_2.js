//Assignment 2
// Problem 2
// Prolem statement 
// http://www.codewars.com/kata/get-the-middle-character

// Solution

function getMiddle(string) {

    var length = string.length;
    var middleElement;

    if (length % 2 === 0) { //if even length string is encountered
        middleElement = (string.charAt((length / 2) - 1) + string.charAt(length / 2));
    } else if (length % 2 === 1) { //if odd length string encountered
        middleElement = string.charAt((length / 2));
    }
    return middleElement;
}