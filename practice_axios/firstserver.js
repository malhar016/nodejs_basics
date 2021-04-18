var http = require('http');

var server = http.createServer(function(req, res) {
    var body = "Hello World";
    res.writeHead( 200, {
        "Content-Length": body.length,
        "Content-Type": "text-plain"
    });
    res.end(body);
});

server.listen(8084);

console.log("this server is running on 8084");