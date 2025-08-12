"use strict";
function exercise1(vehicle) {
    if ("wheels" in vehicle) {
        // vehicle is type Car
        console.log(`This vehicle has ${vehicle.wheels} wheels`);
    }
    else {
        // vehicle is type Boat
        console.log(`This vehicle has sails: ${vehicle.sails}`);
    }
}
function exercise2(person) {
    if ("grade" in person) {
        // person is Student
        console.log(`Student grade: ${person.grade}`);
    }
    else if ("subject" in person) {
        // person is Teacher
        console.log(`Teacher subject: ${person.subject}`);
    }
    else {
        // person is Administrator
        console.log(`Administrator office: ${person.office}`);
    }
}
