const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello world');
})

server.listen((9000),(err) =>{
    if(err)
        console.log("Error starting error",err);
    else
        console.log("server sterted on port 9000")
})