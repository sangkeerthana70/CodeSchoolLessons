var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
	response.writeHead(200, {"content-Type":"html/text"});
	var contents = fs.readFileSync('index.html');//sync means run a blocked code.
	console.log(contents);
	response.write("Hello, this is dog");
	response.end();
}).listen(8080);
//works fine(but make sure you create an html file in the same folder.