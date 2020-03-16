//Assignment 2
// Problem 4
// Prolem statement 
// http://www.codewars.com/kata/word-count

// Solution

function countWords(string) {
    string = string.trim(); //trimming the stringing from both ends

    if (string.length === 0) {
        return 0;
    } else {
        return string.split(/[\s]+/).length; //Regex to check multiple spaces
    }
}