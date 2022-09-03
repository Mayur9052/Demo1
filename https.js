const n1 = require('./https');
const http = require('http');
const fs = require('fs');
const { response } = require('express');
const port = process.env.PORT || 9000;

function onRequest(request, response)  {
    response.writeHead(200,{'content-type' : 'text/html'});
    fs.readFile('./simple.html', null, (err, simple) => {
        if(err) {
            console.log(err);
            response.writeHead(404);
            response.write("Not FOUND");
        }else {
            response.write(simple);
            response.write("Hello World!");
            response.write(n1);
        }
    response.end()
    });
    // response.write("Hello World!");
    // response.end();
}

http.createServer(onRequest).listen(port, (err) => {
    if(err) {
        console.log("Something went wrong....");
    } else {
        console.log(`The port number is ${port}`);
    }
});