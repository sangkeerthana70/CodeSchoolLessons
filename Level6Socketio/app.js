var express = require('express');//require express module
var app = express();//initialize the express application
//now create an http server and have it dispatch request to express
var server = require('http').createServer(app);
//require socket.io module and allow it to use the http server to listen for requests.
var io = require('socket.io') (server);//we require the socket.io module and allow it to
//use the http server to listen for requests. Now socket.io and express are sharing the same 
//http server.

io.on('connection', function(client) {//we listen for connection events inside socket.io
//and when a client connects we simply log out the message client connected.
    console.log("Client connected");
    client.emit('messages', {hello: 'world'});//emits the message event on the client
    //which in this case is the browser. Also note that we are sending the hello world 
    //in an object.
});

app.get('/', function(req,res) {//we give back the index.html file using the sendFile
//function.
    res.sendFile(__dirname + 'index.html');
});

server.listen(8080);