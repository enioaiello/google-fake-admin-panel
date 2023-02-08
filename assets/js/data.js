const fs = require("fs");

const users = require("./user.json");

let user = {
    name: "New User",
    age: 30,
    language: ["PHP", "Go", "JavaScript"]
};
   

users.push(user);
   
fs.writeFile("./user.json", JSON.stringify(users), err => {
    if (err) throw err; 
   
    console.log("Done writing");
});