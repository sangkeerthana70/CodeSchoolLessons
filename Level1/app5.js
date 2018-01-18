var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
	response.writeHead(200, {"content-Type":"html/text"});
	fs.readFile('index.html', function(){
		console.log(contents);
	}
	response.write("Hello, this is dog");
	response.end();
}).listen(8080);

/*C:\Users\anuradha\Desktop\Anu\Node.js>node app5.js
C:\Users\anuradha\Desktop\Anu\Node.js\app5.js:8
        }
        ^

SyntaxError: missing ) after argument list
    at createScript (vm.js:80:10)
    at Object.runInThisContext (vm.js:139:10)
    at Module._compile (module.js:599:28)
    at Object.Module._extensions..js (module.js:646:10)
    at Module.load (module.js:554:32)
    at tryModuleLoad (module.js:497:12)
    at Function.Module._load (module.js:489:3)
    at Function.Module.runMain (module.js:676:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3*/
	