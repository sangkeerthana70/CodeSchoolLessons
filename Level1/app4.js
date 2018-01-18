var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200, {"content-Type":"html/text"});
	response.write("Hello, this is dog");
	response.end();
	}).listen(8080);
	
	//creates a file and then downloads it.