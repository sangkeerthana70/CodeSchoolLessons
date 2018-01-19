//exports defines what require returns
var hello = require('./custom_hello');//require the hello module.
var gb = require('./custom_goodbye');//require the goodbye module.

hello();//to call the custom_hello method
gb.goodbye();//to call the custom_goodbye method

//to call the goodbye method in one line and to call it only once.
require('./custom_goodbye').goodbye();//this requires and also calls it.

//the below code is to require this makeRequest module in app.js
var makeRequest = require('./makeRequest');
makeRequest("Here's looking at you, kid!");
makeRequest("Hello, this is dog");

