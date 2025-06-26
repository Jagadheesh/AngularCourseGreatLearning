function add(num1 :number, num2: number, num3?:number ):number {
    return num3? num1 + num2 + num3 : num1 + num2;
}

console.log(add(10,20));

//arrow function
let sub = (num1:number, num2:number):number => {return num1 - num2;};
console.log("Subtraction "+ sub(10,5));

let mul = (num1:number, num2:number) :number => {
    return num1 * num2;
}

console.log(add(10,20,30));
