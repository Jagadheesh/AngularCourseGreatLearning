"use strict";
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
//arrow function
let sub = (num1, num2) => { return num1 - num2; };
console.log("Subtraction " + sub(10, 5));
//function with default parameter
function subtract(num1, num2, num3 = 5) {
    return num1 - num2 - num3;
}
//if the argument num3 is not passed, it will take the default value of 5
console.log("Subtraction with default parameter " + subtract(20, 5, 15));
//function with rest parameter
function multiply(num1, num2, ...num3) {
    let mul = num1 * num2;
    for (let i = 0; i < num3.length; i++) {
        mul *= num3[i];
    }
    return mul;
}
console.log("Multiplication with rest parameter " + multiply(2, 3, ...[4, 5, 6]));
// it also accept the following syntax
// console.log("Multiplication with rest parameter " + multiply(2, 3, 4, 5, 6));
//Generic function
function getItems(items) {
    return new Array().concat(items);
}
console.log(getItems([1, 2, 3, 4, 5]));
console.log(getItems(["apple", "banana", "cherry"]));
