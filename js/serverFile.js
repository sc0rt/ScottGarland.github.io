var http = require('http');
var fs = require('fs');

function send404Response(res) {
    res.writeHead(404, {"Content-Type" : "text/plain"});
    res.write("Error 404: Page Not Found");
    res.end();
}

function onRequest(req, res) {
    if(req.method == 'GET' && req.url == '/') {
        res.writeHead(200,{"Content-Type" : "text/html"});
        fs.createReadStream("../html/portfolio.html").pipe(res);
    }

    else {
        send404Response(res);
    }
}

var server = http.createServer(onRequest);
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');