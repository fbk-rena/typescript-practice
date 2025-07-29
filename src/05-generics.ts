// Generics
function identity<T>(value: T): T {
  return value;
}

const str = identity<string>("hello");
const num = identity<number>(42);

function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}
