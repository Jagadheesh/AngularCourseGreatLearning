"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    // by default, properties are public
    //# symbol is used to make a property private
    //constructor
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    set Name(name) {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
    getWithAddress() {
        return `${this.name} lives at ${this.address}`;
    }
    //static method
    static getEmployeeCount() {
        return 50;
    }
    login() {
        return {
            name: this.name,
            age: 30, // hardcoded for example
            email: `${this.name.toLowerCase()}@example.com`
        };
    }
}
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let emp = new Manager("001", "John Doe", "123 Main St");
//normal value assignment
// emp.id = "001";
// emp.name = "John Doe";
// emp.address = "123 Main St";
console.log(`Employee ID: ${emp.id}, Name: ${emp.name}, Address: ${emp.address}`);
console.log(emp.getWithAddress());
console.log("Employee Count: " + Employee.getEmployeeCount());
emp.Name = "Jane Doe"; // using setter
console.log(`Updated Name: ${emp.Name}`); // using getter
console.log("Login User: ", emp.login());
