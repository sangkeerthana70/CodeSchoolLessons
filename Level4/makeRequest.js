var makeRequest = function(message) {
    ...
}
modules.exports = makeRequest;

//to require this module type the following code in the app.js file.

var makeRequest = require('./makeRequest');
makeRequest("Here's looking at you, kid!");
makeRequest("Hello, this is dog");

//Where does require look for modules.

var makeRequest = require('./makeRequest');//look for modules in the same directory
var makeRequest = require('../makeRequest');//look for modules in the parent directory
var makeRequest = require('/Users/Anu/Nodes/makeRequest');//look for modules in the same directory 
//of the specified path

//to install the request package use the following command
npm install request

//to search for a module search in git hub or npm.js or use the below command in 
//the command line.
npm search <module name>

//package.json is important to be created while creating a module
//it explains about the dependencies it has used to develop the module.





