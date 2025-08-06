// Type Aliases and Intersections
type tag = number | string;

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
