let fs = require('fs');
let data = fs.readFileSync("user.json");
let userInfo = data.toString();
let userItems = userInfo.split(":");
for(let j=0; j<userItems.length; j++){
    console.log(`Id: ${userItems}, name: ${userItems[1]}, Salary: ${userItems[2]}, Email: ${userItems[3]}`);
}