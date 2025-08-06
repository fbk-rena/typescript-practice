//const sibilings = ["Karla", "Carlos", "Andres", "Angel", "Emanuel" ];

// Contextual typing for function - parameter s inferred to have type string
sibilings.forEach(function (s) {
    console.log(s.toUpperCase());
  });

// Arrow functions
sibilings.forEach((s) => {
    console.log(s.toUpperCase());
  });