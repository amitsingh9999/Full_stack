const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url==='/getdata' && req.method==='GET'){
        res.end(JSON.stringify(Users));
        }

    if(req.url==='/setdata' && req.method==='POST'){
        let body='';
        req.on('data',chunk=>{
            body += chunk;
        });

        req.on('end',() =>{
            let data = JSON.parse(body);
            console.log(data);
        res.end(JSON.stringify({message:'data recevied'}));
        });
    }
});

server.listen((9000),(err) =>{
    if(err)
        console.log("Error starting error",err);
    else
        console.log("server sterted on port 9000")
})
