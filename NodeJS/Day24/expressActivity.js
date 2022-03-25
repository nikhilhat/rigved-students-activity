let fs = require("fs");
data = fs.readFileSync("emp.json");
dataString = data.toString();
jsArray = JSON.parse(dataString);
console.log(jsArray);
//response json 
let express = require("express");
let app = express();
app.listen(1007, () => {
    console.log('Server is running on 1007');
});

app.get('/', (request, response) => {
    response.send("Hello world this is Nikhil and this is what is get from .get function ! ");
});
app.get('/employee', (request, response) => {
    response.json(jsArray)
});



// nikhilhatwar@Nikhils-MacBook-Air DAY24 % nodemon expressActivity.js 
// [nodemon] 2.0.15
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,json
// [nodemon] starting `node expressActivity.js`
// [
//   { id: 123, name: 'Nikhil', Salaray: 420000 },
//   { id: 234, name: 'Pankaj', Salaray: 350000 },
//   { id: 345, name: 'Vaibhav', Salaray: 325000 }
// ]
// Server is running on 1007
// [nodemon] restarting due to changes...
// [nodemon] starting `node expressActivity.js`
// 
                                           