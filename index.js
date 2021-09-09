var http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;
var server;

fs.readFile('./index.html', function (err, html) {
    if (err) throw err;
    server = http.createServer(function (request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(PORT);
});

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
