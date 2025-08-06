"use strict";
// Any, which disables type checking for a value “Trust me, I know what I’m doing.”
let obj = { x: 0 };
// All of these are allowed — no type errors:
obj.foo(); // ok
obj(); // ok
obj.bar = 100; // ok
obj = "hello"; // ok
const n = obj; // also ok (but risky!)
/* tsconfig.json
To avoid this, enable the compiler flag:

{
    "compilerOptions": {
      "noImplicitAny": true
    }
  }

    Useful short-term, but avoid relying on it long-term.
    Use noImplicitAny to write safer code.
*/
// Unsafe version using `any` — allows anything and may cause surprises
function unsafeSum(a, b) {
    return a + b;
}
// Safe version using strict `number` types
function safeSum(a, b) {
    return a + b;
}
// Test
console.log("unsafeSum('3', 4):", unsafeSum("3", 4)); // ➡️ "34" (string concatenation, not math)
console.log("safeSum(3, 4):", safeSum(3, 4)); // ➡️ 7 (number addition)
