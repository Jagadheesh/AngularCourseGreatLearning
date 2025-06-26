"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
let job = {
    name: "Bob",
    age: 25,
    email: "bob@example.com",
    salary: 50000
};
console.log(`User Name: ${user.name} , Age : ${user.age} , Email: ${user.email}`);
console.log(job);
//object destructuring
let { name: userName, age: userAge } = user;
console.log(`User Name: ${userName} , Age : ${userAge}`);
//array destructuring
let [user1, user2, ...remUsers] = [
    { name: "Charlie", age: 28, email: "charlie@example.com" },
    { name: "Diana", age: 32, email: "diana@example.com" },
    { name: "Ethan", age: 29, email: "ethan@example.com" },
    { name: "Fiona", age: 31, email: "fiona@example.com" },
];
console.log(user1);
console.log(user2);
console.log(remUsers);
