var fname = 'John Doe';
var newname = fname.toUpperCase();
console.log(newname);
//integer and float will be treated as number in typescript
var num = 10;
num = 10.5;
console.log(num);
//Converting string to number
var Num = "25";
var age = parseInt(Num);
console.log(age);
//boolean
var isActive = false;
console.log(isActive);
//Array
var Emp = ['emp1', 'emp2', 'emp3'];
var elem;
elem = [1, 2, 3, 4, 5];
console.log(Emp);
//filter data
var modifiedElem = elem.filter(function (em) { return em > 2; });
console.log(modifiedElem);
// let n = elem.find((e)=> e==2);
// console.log(n);
var sum = elem.reduce(function (acc, cur) { return acc + cur; });
console.log(sum);
var color = 1 /* Colors.Green */;
//Tuples
var swapNum;
function swap(f, s) {
    return [s, f];
}
swapNum = swap(10, 20);
swapNum[0];
console.log(swapNum[1]);
//any
var data;
data = 10;
data = "Hello";
console.log(data);
