// Solución:
type MathOperation = (x: number, y: number) => number;
type StringLogger = (text: string) => void;
type BooleanGenerator = () => boolean;

const suma: MathOperation = (x, y) => x + y;
const logMessage: StringLogger = (text) => console.log(text);
const getRandomBoolean: BooleanGenerator = () => Math.random() > 0.5;

//

type PersonFormatter = (person: {name: string, age: number}) => string;

const formatPerson: PersonFormatter = (person) => {
  return `${person.name} (${person.age} years)`;
};

console.log(formatPerson({name: "Valentina", age: 5})); // "Valentina (5 years)"