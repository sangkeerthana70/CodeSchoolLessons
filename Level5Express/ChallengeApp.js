//Ex
var express = require('express');
var app = express();

app.get('/tweets', function(req, res) {//Create a GET route for '/tweets' and give it the proper callback. The callback function should accept two arguments: the request and the response.
  res.sendFile(__dirname + "/tweets.html");//Send back the file tweets.html, which lives under the project's root path. Remember to use __dirname to locate tweets.html.
});

app.listen(8080);//Finally, have the express app listen on port 8080.
//========================================================================
//Ex-1  Route Params=
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.GET('/quotes/:name', function(req,res) {//Start by creating a GET route for 
// '/quotes' that takes a name parameter as part of the URL path.

//Now, use the name parameter from the URL to retrieve a quote from the quotes
//object and write it out to the response. Note: No piping here, just write the 
//quote string to the response like you did in previous levels (and then close the response).
    res.end(quotes[req.params.name]);  
    });
app.listen(8080);
//Ex-2Rendering ==================================================================================
/* Instead of just writing out the quote to the response, let's try using an
EJS template to render the response.*/

//First, render the quote.ejs template to the response.

var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(req, res) {
  var quote = quotes[req.params.name];
  res.render('quote.ejs', {//First, render the quote.ejs template to the response.
  //Next, make the name and the quote data available to the template.
  res.render('quote.ejs', {//Inside quote.ejs, add the code needed to render the data you passed to the template.
    name: req.params.name,
    quote: quote  
  });
  
});
app.listen(8080); 
//================================
//challenge-5.5
// URL Building
/*Let's create a page which calls the Twitter search API and displays the last few
results for Code School. The first step is to construct the proper URL, which is 
all you need to do in this challenge.

Complete the URL options which will be sent into the the url module's format method.
The URL you'll want to construct is the 
following: http://search.twitter.com/search.json?q=codeschool*/

var url = require('url');

options = {
  // add URL options with the following format here http://search.twitter.com/search.json?q=codeschool
  protocol: "http:",//Step-1 Add the protocol attribute to options.
  host: "search.twitter.com",//Step-2 Add the host attribute to options.
  pathname: '/search.json',//Step-3 Add the pathname attribute to options.
  query: {
  q: "codeschool"
    }//Add an attribute which takes an object of query parameters, in this case we 
      //only need q to search Twitter.
          
};

var searchURL = url.format(options);

//=========================================================================
/*Challenge-5.6 Doing the Request 
Next, we'll use the request module to make a simple web request and log the 
response to the console. You can use this example in the README.*/

var url = require('url');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);
var request = require('request');//To start, require the request module and assign
//the return function to a variable.

//Next, issue a request to searchURL. Remember, the callback function for the 
//request function takes three arguments: error, response and body.
request(searchURL, function(err, response, body) {
  console.log(body);//Finally, log the response body to the console using console.log().
});
//=======================================================================
/*Challenge 5.7 Express Server
Now, let's create an Express server which queries out for the search term and 
then returns the JSON.*/

//Step-1 Require the express module.
var express = require('express');
//Step-2 Create the Express server and name it app.
var app = express();
var url = require('url');
var request = require('request');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);

var app; // Create server here
//Step-3 Create a route for GET requests to / (root path). Remember, the callback 
//function takes two arguments: a request req and a response res.
app.get('/', function(req, res) {
//Step-4 In our new route, issue a request to searchURL and pipe the results
//into the response.
  request(searchURL).pipe(res);
});

//Step-5 Finally, tell app to listen on port 8080
app.listen(8080);









