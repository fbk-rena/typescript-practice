type People = {
  first: string;
  last?: string; // optional
};

type Costumer = {
    username: string;
    email: string;
    phoneNumber?: string;
};
  
  function printUserInfo(costumer: Costumer) {
    console.log("Username:", costumer.username);
    console.log("Email:", costumer.email);
    
    if (costumer.phoneNumber) {
        console.log("Phone:", costumer.phoneNumber);
      }
  }
  
  printUserInfo({ username: "lorena", email: "lorena@example.com" });
  printUserInfo({ username: "david", email: "david@example.com", phoneNumber: "555-1234" });
  