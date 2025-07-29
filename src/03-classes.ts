interface Person {
  firstName: string;
  lastName: string;
}

class Student {
  fullName: string;

  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

function greeter(person: Person): string {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

const student = new Student("Jane", "M.", "User");

console.log(greeter(student)); // ➝ "Hello, Jane User"
