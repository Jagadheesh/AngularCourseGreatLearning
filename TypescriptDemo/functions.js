function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(10, 20));
//arrow function
var sub = function (num1, num2) { return num1 - num2; };
console.log("Subtraction " + sub(10, 5));
var mul = function (num1, num2) {
    return num1 * num2;
};
console.log(add(10, 20, 30));
