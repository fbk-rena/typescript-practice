interface Animal {
    name: string;
  }
  
  interface Bear extends Animal {
    honey: boolean;
  }
  
  const bear: Bear = {
    name: "Baloo",
    honey: true,
  };
  
  /*
  When to use interface or type?
Use interface by default, especially for objects and extensible structures.

Use type when:
    Need unions (string | number)
    Want to define tuples, functions, or complex types
    Prefer more flexibility
  */