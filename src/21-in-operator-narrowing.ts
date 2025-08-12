type Car = { engine: string; wheels: number };
type Boat = { engine: string; sails: boolean };

function exercise1(vehicle: Car | Boat) {
  if ("wheels" in vehicle) {
    // vehicle is type Car
    console.log(`This vehicle has ${vehicle.wheels} wheels`);
  } else {
    // vehicle is type Boat
    console.log(`This vehicle has sails: ${vehicle.sails}`);
  }
}

//

type Student = { name: string; grade: number };
type Teacher = { name: string; subject: string };
type Administrator = { name: string; office?: string };

function exercise2(person: Student | Teacher | Administrator) {
  if ("grade" in person) {
    // person is Student
    console.log(`Student grade: ${person.grade}`);
  } else if ("subject" in person) {
    // person is Teacher
    console.log(`Teacher subject: ${person.subject}`);
  } else {
    // person is Administrator
    console.log(`Administrator office: ${person.office}`);
  }
}