let fs = require('fs');
let read = require("readline-sync");

let id = read.questionInt("Enter your customer ID: ");
let name = read.question("Enter your name: ");
let salary = read.questionInt("Enter your sallary: ");
let email = read.questionEMail("Enter your email ID: ");

let user = [id,name,salary,email];
let jsonString= JSON.stringify(user);

fs.writeFileSync('users.json', jsonString.concat(",\n"), {flag: 'a+'});
console.log("successfully added to the file...!");