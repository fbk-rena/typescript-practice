type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      // Aquí TypeScript sabe que `shape` es `never`
      const _exhaustiveCheck: never = shape;
      throw new Error(`Shape type not supported: ${_exhaustiveCheck}`);
  }
}
