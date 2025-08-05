"use strict";
// Type Annotations and Inference
function add(a, b) {
    return a + b;
}
const result = add(2, 3);
// add(2, "3") — TypeScript trow error: 
// Argument of type 'string' is not assignable to parameter of type 'number'.
