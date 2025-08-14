//void

function logEvent(eventName: string, details?: object): void {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Event: ${eventName}`, details || '');
}

logEvent("page_load", { page: "home" });
logEvent("click");

//unknown

function parseUserData(data: unknown): { name: string, age: number } {
  if (typeof data === 'object' && data !== null) {
    const user = data as { name?: unknown, age?: unknown };
    if (typeof user.name === 'string' && typeof user.age === 'number') {
      return { name: user.name, age: user.age };
    }
  }
  throw new Error("Invalid user data");
}

const userData = JSON.parse('{"name":"Ricardo","age":40}');
const usuario = parseUserData(userData);
console.log(user); // {name: "Ricardo", age: 40}

//never 

type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "triangle"; base: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "triangle":
      return (shape.base * shape.height) / 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

console.log(getArea({ kind: "circle", radius: 5 })); // ~78.54