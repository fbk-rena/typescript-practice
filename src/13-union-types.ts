type Visitor = {
    role: "visitor";
    name: string;
  };
  
  type Admin = {
    role: "admin";
    username: string;
  };
  
  type User = Visitor | Admin;
  
  function greetUser(user: User) {
    if (user.role === "visitor") {
      console.log(`Hello, ${user.name}`);
    } else {
      console.log(`Hi, admin ${user.username}`);
    }
  }
  
  greetUser({ role: "visitor", name: "Lorena" });
  greetUser({ role: "admin", username: "admin123" });
  