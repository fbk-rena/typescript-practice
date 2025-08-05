"use strict";
// String
// Function that takes a string and returns a greeting
function greeting(name) {
    return `Hello, ${name}!`;
}
console.log(greeting("Auani")); // Output: Hello, Auani!
//Boolean
//Function addition
function addition(a, b) {
    return a + b;
}
console.log("3 + 7 =", addition(3, 7)); // Output: 3 + 7 = 10
// Boolean
// Function that checks if a number is even
function isEven(n) {
    return n % 2 === 0;
}
console.log("Is 4 even?", isEven(4)); // true
console.log("Is 7 even?", isEven(7)); // false
// Function that returns a welcome message only if user is logged in
function getWelcomeMessage(username, isLoggedIn) {
    if (isLoggedIn) {
        return `Welcome back, ${username}!`;
    }
    else {
        return `Please log in, ${username}.`;
    }
}
console.log(getWelcomeMessage("Vero", true)); // Welcome back, Vero!
console.log(getWelcomeMessage("Ricardo", false)); // Please log in, Ricardo.
