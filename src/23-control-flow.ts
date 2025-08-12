function analyzeInput(input: string | number | boolean) {
    if (typeof input === "string") {
      console.log(input.trim()); // (A)
    } else if (typeof input === "number") {
      console.log(input.toFixed(2)); // (B)
    } else {
      console.log(input.valueOf()); // (C)
    }
    // (D) Type is `never` if all cases are covered
  }