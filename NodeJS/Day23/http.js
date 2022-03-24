let http = require('http');
const { Http2ServerRequest } = require('http2');
let PORT_NO = 3001;
http.createServer((request, response) => {
    let username = 'Nikhil Hatwar';
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(`<h2>Hello application</h2>`);
    response.write(`<h3>Username :${username}</h3>`);
    response.end();
})
    .listen(PORT_NO, () => console.log(`Server is running in ${PORT_NO}`));