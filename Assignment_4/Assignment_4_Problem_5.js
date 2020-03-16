//Assignment 4
// Problem 5
// Prolem statement 
// http://www.codewars.com/kata/function-composition-1
// Solution

compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);