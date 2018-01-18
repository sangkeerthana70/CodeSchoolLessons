var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("Hello, this is dog");
	response.end();
	}).listen(process.env.PORT, process.env.I);
	
//yes code is fine.