//Assignment 3
// Problem 4
// Prolem statement 
// http://www.codewars.com/kata/can-you-keep-a-secret
// Solution

function createSecretHolder(secret) {
    return {
        getSecret: () => secret,
        setSecret: (value) => secret = value
    };
}