const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    if (req.url==='/home'){
        res.end(`<h1> welcome to home</h1>`);
    }
    else if(req.url==='/about'){
        res.end(`<h1>About page</h1>`);
    }
    else if(req.url==='/contact'){
        res.end(`<h1>welcome to contact page</h1>`);
    }
    else{
        res.end(`<h1>page not found</h1>`);
    }
});

server.listen((9000),(err) =>{
    if(err)
        console.log("Error starting error",err);
    else
        console.log("server sterted on port 9000")
});