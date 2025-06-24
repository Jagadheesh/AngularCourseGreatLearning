function add(num1 :number, num2: number):number {
    return num1 + num2;
}

console.log(add(10,20));

//arrow function
let sub = (num1:number, num2:number):number => {return num1 - num2;};
console.log("Subtraction "+ sub(10,5));