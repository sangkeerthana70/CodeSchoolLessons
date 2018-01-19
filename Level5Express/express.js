var express = require ('express');
//npm install --save express; this installs the modules and adds the dependencies to the 
//package.json file.
var app = express();//This creates an instance of express by invoking the express function.

//now we define end points
app.get('/', function(request,response) {// here '/' is the root route 
    response.sendFile(__dirname + 'index.html');//__dirname is the current directory
});
//the above has a call back function which responds when invoked by sending back a file
//which it reads from our current directory
app.listen(8080);//the port to listen at

//finally run the curl command from the browser to call the browser
//$ curl http://localhost:8080/



