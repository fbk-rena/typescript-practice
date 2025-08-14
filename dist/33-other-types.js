"use strict";
//void
function logEvent(eventName, details) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Event: ${eventName}`, details || '');
}
logEvent("page_load", { page: "home" });
logEvent("click");
//unknown
function parseUserData(data) {
    if (typeof data === 'object' && data !== null) {
        const user = data;
        if (typeof user.name === 'string' && typeof user.age === 'number') {
            return { name: user.name, age: user.age };
        }
    }
    throw new Error("Invalid user data");
}
const userData = JSON.parse('{"name":"Ricardo","age":40}');
const usuario = parseUserData(userData);
console.log(user); // {name: "Ricardo", age: 40}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.side, 2);
        case "triangle":
            return (shape.base * shape.height) / 2;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
console.log(getArea({ kind: "circle", radius: 5 })); // ~78.54
