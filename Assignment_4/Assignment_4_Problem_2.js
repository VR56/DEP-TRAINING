//Assignment 4
// Problem 2
// Prolem statement 
// http://www.codewars.com/kata/a-chain-adding-function
// Solution

function add(firstOperand) {
    const curry = (secondOperand) => {
        firstOperand += secondOperand;
        return curry;
    }
    curry.toString = () => firstOperand
    return curry;
}