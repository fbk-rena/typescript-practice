// Type Aliases and Intersections
type ID = number | string;

interface Animal {
  name: string;
}

interface Dog {
  breed: string;
}

type Pet = Animal & Dog;

const myDog: Pet = {
  name: "Max",
  breed: "Labrador"
};
