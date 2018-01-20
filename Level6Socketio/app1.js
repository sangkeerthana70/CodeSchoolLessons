/*browser is listening for messages, but we want to send messages from the browser when 
someone types something in the chat room back to our server.
also we want our server to listen to the message events and when it does we will log it
out to the console.*/

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io') (server);

io.on('connection', function(client) {
    client.on('messages', function(data) {//listen for messages events
        console.log(data);
    });
});