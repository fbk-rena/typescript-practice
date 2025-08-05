"use strict";
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}
function greeter(person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}
const student = new Student("Jane", "M.", "User");
console.log(greeter(student)); // ➝ "Hello, Jane User"
