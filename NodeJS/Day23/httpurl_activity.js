let http = require('http');
let url1 = require('url');
let fs = require('fs');
let PORT_NO = 3001;


http.createServer((request, response) => {
    let urlString = request.url;
    console.log(urlString);
    if (urlString != '/favicon.ico') {
        let urlObject = url1.parse(urlString, true);
        let user = urlObject.query;
        console.log(user);
        //console.log(urlObject);
        let data = fs.readFileSync('emp.json');
        let dataString = data.toString();
        let jsArray = undefined;
        if (dataString.length < 1 || dataString == '') {
            jsArray = [];
        } else {
            jsArray = JSON.parse(dataString);
        }
        jsArray.push(user);
        jsonObjectArray = JSON.stringify(jsArray);
        console.log(jsonObjectArray);
        fs.writeFileSync('emp.json', jsonObjectArray);
        response.writeHead(200, { 'content-type': 'text/html' });
        response.write(`<h2>Hello ${user.name}, Your age is ${user.age}</h2>`);
    }
    response.end();
}).listen(PORT_NO, () => console.log(`Server running at ${PORT_NO}`))