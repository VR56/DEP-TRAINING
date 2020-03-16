//Assignment 2
// Problem 3
// Prolem statement 
// http://www.codewars.com/kata/partition-on

// Solution

function partitionOn(pred, items) {
    var acceptedNumberArray = [];
    var unacceptedNumberArray = [];

    for (var i = 0; i < items.length; i++) {
        if (pred(items[i]) == true) {
            acceptedNumberArray.push(items[i]);
        } else {
            unacceptedNumberArray.push(items[i]);
        }
    }

    items.splice(0, items.length); //Removing the elements from items

    for (var i = 0; i < unacceptedNumberArray.length; i++) //adding unaccepted array elements back
        items[i] = unacceptedNumberArray[i];

    for (var i = 0; i < acceptedNumberArray.length; i++) //adding the accepted array elements back
        items.push(acceptedNumberArray[i]);

    return unacceptedNumberArray.length;
}