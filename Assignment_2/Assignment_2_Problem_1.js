//Assignment 2
// Problem 1
// Prolem statement 
// http://www.codewars.com/kata/calculating-with-functions

// Solution

function zero(argument) {
    if (argument === undefined) {
        return 0;
    }
    return argument(0);
}

function one(argument) {
    if (argument === undefined) {
        return 1;
    }
    return argument(1);
}

function two(argument) {
    if (argument === undefined) {
        return 2;
    }
    return argument(2);
}

function three(argument) {
    if (argument === undefined) {
        return 3;
    }
    return argument(3);
}

function four(argument) {
    if (argument === undefined) {
        return 4;
    }
    return argument(4);
}

function five(argument) {
    if (argument === undefined) {
        return 5;
    }
    return argument(5);
}

function six(argument) {
    if (argument === undefined) {
        return 6;
    }
    return argument(6);
}

function seven(argument) {
    if (argument === undefined) {
        return 7;
    }
    return argument(7);
}

function eight(argument) {
    if (argument === undefined) {
        return 8;
    }
    return argument(8);
}

function nine(argument) {
    if (argument === undefined) {
        return 9;
    }
    return argument(9);
}

function plus(secondOperand) {
    return function(firstOperand) {
        return firstOperand + secondOperand;
    }
}

function minus(secondOperand) {
    return function(firstOperand) {
        return firstOperand - secondOperand;
    }
}

function times(secondOperand) {
    return function(firstOperand) {
        return firstOperand * secondOperand;
    }
}

function dividedBy(secondOperand) {
    return function(firstOperand) {
        return Math.floor(firstOperand / secondOperand);
    }
}