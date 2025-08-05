"use strict";
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
