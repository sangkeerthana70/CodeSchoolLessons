//this code creates an end point where we  send in a twitter username which calls 
//out to twitter and get the latest ten tweets and display them back to the user.


var options;
var get;
var request = require('request');
var url = require('url');

app.get('/tweets/:username', function(request,response) {//this is the get endpoint 
    var username = request.params.username;//calls out the dynamic user name and stores
    //it in this variable
    options = {
        protocol: "http:",
        host: "api.twitter.com",
        pathname: "'/1/statuses/user_timeline.json",
        query: { screen_name: username, count: 10}
    }
    
    var twitterUrl = url.format(options);//this calls our request with the url
    request(twitterUrl).pipe(response);//response gets returned from the callback 
    //function which will pipe the request to the response which goes back to the browser.
    
    
    
});