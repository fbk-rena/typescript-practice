"use strict";
function greetUser(user) {
    if (user.role === "visitor") {
        console.log(`Hello, ${user.name}`);
    }
    else {
        console.log(`Hi, admin ${user.username}`);
    }
}
greetUser({ role: "visitor", name: "Lorena" });
greetUser({ role: "admin", username: "admin123" });
