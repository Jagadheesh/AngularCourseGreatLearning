"use strict";
let fname = 'John Doe';
let newname = fname.toUpperCase();
console.log(newname);
//integer and float will be treated as number in typescript
let num = 10;
num = 10.5;
console.log(num);
//Converting string to number
let Num = "25";
let age = parseInt(Num);
console.log(age);
//boolean
let isActive = false;
console.log(isActive);
//Array
let Emp = ['emp1', 'emp2', 'emp3'];
let elem;
elem = [1, 2, 3, 4, 5];
console.log(Emp);
//filter data
let modifiedElem = elem.filter((em) => { return em > 2; });
console.log(modifiedElem);
let n = elem.find((e) => e == 2);
console.log(n);
let sum = elem.reduce((acc, cur) => acc + cur);
console.log(sum);
let color = 1 /* Colors.Green */;
//Tuples
let swapNum;
function swap(f, s) {
    return [s, f];
}
swapNum = swap(10, 20);
swapNum[0];
console.log(swapNum[1]);
//any
let data;
data = 10;
data = "Hello";
console.log(data);
