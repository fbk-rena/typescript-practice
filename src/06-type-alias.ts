// Type Aliases and Intersections
type tag = number | string;

interface Animales {
  name: string;
}

interface Dogs {
  breed: string;
}

type Pet = Animales & Dogs;

const myDog: Pet = {
  name: "Max",
  breed: "Labrador"
};
