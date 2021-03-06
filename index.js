var http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const PORT = 8080;
var server;

fs.readFile('./index.html', function (err, html) {
    if (err) throw err;
    server = http.createServer(function (request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(PORT);
});

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function getAllBuckets(){
    document.getElementById('title').innerHTML = httpGet('http://35.172.135.0/getAllItems')
    console.log('Clicked button!')
}

// const getAllBuckets = async () => {
//     var response = await fetch('http://35.172.135.0/getAllItems')
//     document.getElementById('title').innerHTML = response
//     console.log('Clicked button!')
// }

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
