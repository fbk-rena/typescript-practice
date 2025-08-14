interface Person {
  firstName: string;
  lastName: string;
}

class Learner {
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

const estudiante = new Learner("Jane", "M.", "User");
