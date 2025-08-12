console.log(typeof "Women First");       // "string"
console.log(typeof 123);             // "number"
console.log(typeof undefined);       // "undefined"
console.log(typeof null);            // "object" 
console.log(typeof [1, 2, 3]);       // "object" -arrays are objects on JS
console.log(typeof function() {});   // "function"
//console.log(typeof 9007199254740991n); // "bigint"

function printAll(strs: string[] | string | null) {
    if (typeof strs === "object" && strs !== null) {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
  
  printAll(["a", "b", "c"]); // a, b, c
  printAll("ballon");        // ballon
  printAll(null);            // don't print anything
  