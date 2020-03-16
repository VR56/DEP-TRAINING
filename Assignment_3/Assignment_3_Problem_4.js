//Assignment 3
// Problem 4
// Prolem statement 
// http://www.codewars.com/kata/can-you-keep-a-secret
// Solution

function createSecretHolder(secret) {

    let objectToReturn = {

        getSecret: function() {
            return secret;
        },

        setSecret: function(value) {
            secret = value;
        }
    };
    return objectToReturn;
}