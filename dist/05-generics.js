"use strict";
// Generics
function identity(value) {
    return value;
}
const str = identity("hello");
const num = identity(42);
function firstElement(arr) {
    return arr[0];
}
