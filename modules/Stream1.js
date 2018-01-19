var http = require('http');
//var fs = require('fs');
// let's print what we receive from the request(which is also the data from the client).
http.createServer(function(request, response) {
	response.writeHead(200);
	request.on('readable', function() {
		var chunk = null;
		while (null !== (chunk = request.read())) {
			//console.log(chunk.toString());replace this with this.
			response.write(chunk);
			}
	});
	request.on('end', function() {
		response.end();
	});
}).listen(8080);