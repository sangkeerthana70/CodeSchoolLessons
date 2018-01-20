//Using the http module, create an new http server and pass the express app as the 
//listener for that new server.


var express = require('express');
var app = express();

//Setting Up socket.io Server-Side. Using the http module, create an new http server
//and pass the express app as the listener for that new server.
var server = require('http').createServer(app);

//Using the socket.io module, listen for requests on the http server. Store the return
//object of this operation in a variable called io.
var io = require('socket.io')(server);

//Use the object stored in io to listen for client 'connection' events. Remember, the 
//callback function takes one argument, which is the client object that has connected.
io.on('connection', function(client) {
//When a new client connects, log a message using console.log().
    console.log("Client connected...");

});
//Finally, we want to tell our http server to listen to requests on port 8080.
server.listen(8080);
//===============================================================================
var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(client) {
  console.log("Client connected...");
});
server.listen(8080);
//===============================================================================

/*Challenge-6.5
Broadcasting Questions 
When a question is submitted to our server, we want to broadcast it out to all the 
connected clients so they can have a chance to answer it.
task-1 In the server, listen for 'question' events from clients.
task-2 Now, emit the 'question' event on all the other clients connected, passing them
the question data.*/

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");
    client.on('question', function(question) {//task-1
     client.broadcast.emit('question', question);//task-2

});
  
});

server.listen(8080);
//============================================================================
/* Challenge-6.6
Saving Client Data 
In our real-time Q&A app, we want to allow each client only one question at a time,
but how do we enforce this rule? We can use socket.io's ability to save data on the 
client, so whenever a question is asked, we first want to check the question_asked 
value on the client.
Task-1 First, when a client emits a 'question' event, we want to set the value of question_asked to true.
Task-2 Finally, when a client emits a 'question' event, check to make sure question_asked is not already set to 
true. We only want to allow one question per user, so make sure that we only set the 
value of question_asked and broadcast the question to other clients when the value of question
_asked is not already true.*/
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");

  client.on('question', function(question) {
    
    if(!client.question_asked) {//task-2
    client.broadcast.emit('question', question);
    client.question_asked = true;
   }//task-2

}
    client.question_asked = true;//Task-1
  });
});

server.listen(8080);

//==========================================================================

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.sockets.on('connection', function(client) {
  console.log("Client connected...");

  // listen for answers here
  

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
    }
  });
});

server.listen(8080);
//==============================================================================
/* Challenge-6.7
Answering Questions 
Clients can also answer each other's questions, so let's build that feature by first
listening for the 'answer' event on the client, which will send us both the question 
and answer, which we want to broadcast out to the rest of the connected clients.
Task-1 With the client, listen for the 'answer' event from clients. This listener will
have both a question and answer to broadcast so make sure to include both as 
function parameters.
Task-2 Now, emit the 'answer' event on all the other clients connected, passing them
the question and answer data.*/

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.sockets.on('connection', function(client) {
  console.log("Client connected...");

  // listen for answers here
  client.on('answer', function(question, answer){//task-1
    client.broadcast.emit('answer', question, answer);//task-2

});
  

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
    }
  });
});

server.listen(8080);
//==================================================================================
/* Challenge-6.8 Answering Question Client 130 PTS
Now on the client, listen for the 'answer' event and then add the appropriate data 
to the DOM.












