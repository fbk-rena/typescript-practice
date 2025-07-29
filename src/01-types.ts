// Type Annotations and Inference
function add(a: number, b: number): number {
  return a + b;
}

const result: number = add(2, 3);
// add(2, "3") — TypeScript trow error: 
// Argument of type 'string' is not assignable to parameter of type 'number'.
