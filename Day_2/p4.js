const http = require('http');

const server = http.createServer((req, res) => {
    let data = [
        {
            "id": 1,
            "username": "admin",
            "password": "4563"
        },
        {
            "id": 2,
            "username": "user",
            "password": "34567"
        }
    ];

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
});

server.listen(9000, (err) => {
    if (err) 
        console.log("Error", err);
    else
        console.log("Server running on port 9000");
});
