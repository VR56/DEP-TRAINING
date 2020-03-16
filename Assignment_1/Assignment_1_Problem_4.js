// Problem 4
// Prolem statement 
// http://www.codewars.com/kata/transportation-on-vacation

// Solution

function rentalCarCost(days) {

    var totalPrice = days * 40;
    var discountedPrice;
    if (days >= 3 && days < 7) { //If days are more than or equal to 3 and less than 7
        discountedPrice = totalPrice - 20; //Discounted price
    } else if (days >= 7) { //If days are greate than equal to 7
        discountedPrice = totalPrice - 50; //Discounted price
    } else if (days < 3) { //If days are less than 3
        discountedPrice = totalPrice; //Price
    }

    return discountedPrice;
}