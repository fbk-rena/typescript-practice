"use strict";
const suma = (x, y) => x + y;
const logMessage = (text) => console.log(text);
const getRandomBoolean = () => Math.random() > 0.5;
const formatPerson = (person) => {
    return `${person.name} (${person.age} years)`;
};
console.log(formatPerson({ name: "Valentina", age: 5 })); // "Valentina (5 years)"
