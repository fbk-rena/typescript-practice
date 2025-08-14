"use strict";
class Learner {
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
const estudiante = new Learner("Jane", "M.", "User");
