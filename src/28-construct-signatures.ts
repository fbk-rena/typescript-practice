type PersonConstructor = {
    new (name: string, age: number): {
      getName(): string;
      getAge(): number;
    };
  };

  class Person {
    constructor(public name: string, public age: number) {}
    
    getName() { return this.name; }
    getAge() { return this.age; }
  }
  
  function createPerson(ctor: PersonConstructor, name: string, age: number) {
    return new ctor(name, age);
  }
  
  const person = createPerson(Person, "Ricardo", 40);
