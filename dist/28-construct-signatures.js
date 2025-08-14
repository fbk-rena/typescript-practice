"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() { return this.name; }
    getAge() { return this.age; }
}
function createPerson(ctor, name, age) {
    return new ctor(name, age);
}
const person = createPerson(Person, "Ricardo", 40);
