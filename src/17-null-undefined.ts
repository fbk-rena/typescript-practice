function printMessage(msg: string | undefined) {
    if (msg !== undefined) {
      console.log(msg);
    }
  }

printMessage("Hello"); // Prints: Hello
printMessage(undefined); // Does nothing


function shout(name: string | null) {
    if (name === null) {
      console.log("Missing name");
    } else {
      console.log(name.toUpperCase());
    }
  }

shout("auani");   // AUANI
shout(null);    // Missing name

