class Animals {
    eat() {
      console.log("Eating...");
    }
  }
  
  class Dog extends Animals {
    bark() {
      console.log("Woof!");
    }
  }
  
  class Cat extends Animals {
    meow() {
      console.log("Meow!");
    }
  }
  
  function handlePet(pet: Animals) {
    pet.eat();
    
    if (pet instanceof Dog) {
      pet.bark(); // (parameter) pet: Dog
    } else if (pet instanceof Cat) {
      pet.meow(); // (parameter) pet: Cat
    }
  }

  /* When working with class hierarchies.
To differentiate between native objects (Date, Array, etc.).
Do not use it with plain types (string, number, generic object). */