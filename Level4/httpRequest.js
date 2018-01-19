//the following code is a http request which will then be refactored into a module.
var http = require ('http');//http module

var message = "Here's looking at you kid";//message to be sent into the request
var options = {//options for the request
    host: "localhost", port: 8080, path: '/', method: 'POST'
}

var request = http.request(options, function(response) {//initialize the request
//and send in the options with a callback function which will be executed when the
//respone returns.
    response.on('data', function(data){//data event and when the data is received
    //simply log it out to the console. 
        console.log(data);//logs response body
    });
});

request.write(message);//begins request and writes data to the request.
request.end();//ends request.

//====================================================================
//encapsulate the above code by wrapping it inside another function.

var makeRequest = function(message) {//this function sends in a message that 
//is going to make the request. 
    var options = {//options for the request
     host: "localhost", port: 8080, path: '/', method: 'POST'
}

var request = http.request(options, function(response) {
     response.on('data', function(data){
         console.log(data);
     });
});

request.write(message);//begins request and writes data to the request.
request.end();
}
 
makeRequest("Here's looking at you kid!");//invoke the above function.
//=================================================================
//shrink the above code and encapsulate it inside a module.





