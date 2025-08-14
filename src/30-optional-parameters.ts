function greet(name?: string): string {
    return name ? `Holi, ${name}!` : "Hello, stranger!";
  }
  
  console.log(greet());       // "Hello, stranger!"
  console.log(greet("Ricardo")); // "Holi, Ricardo!"

  //

  function configure(options?: {
    timeout?: number;
    retries?: number;
    logger?: (msg: string) => void
  }): void {
    const settings = {
      timeout: options?.timeout ?? 1000,
      retries: options?.retries ?? 3,
      logger: options?.logger ?? ((msg) => console.log(msg))
    };
    console.log("Configuration applied:", settings);
  }
  
  configure();
  configure({ timeout: 2000 });
  configure({ logger: (msg) => console.error(msg) });