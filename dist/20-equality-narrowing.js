"use strict";
function Status(status) {
    if (status === "success") {
        // status es "success"
        console.log("Operation succeeded!");
    }
    else if (status == null) {
        // status es null o undefined
        console.log("Status is null or undefined");
    }
    else {
        // status es "error" o "loading"
        console.log("Status is: ", status);
    }
}
function exercise3(user) {
    if (user.age != null) {
        // user.age is number
        console.log(`Next year you'll be ${user.age + 1}`);
    }
    else {
        console.log("Age not provided");
    }
}
