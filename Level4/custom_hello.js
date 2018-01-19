//Let's create our own module.
//this module only sets one object equal to module.exports

var hello = function() {
    console.log('hello!');
}

module.exports = hello;//to expose this method(which has only one object)
//and make it public add this syntax.
//also exports defines what the require returns 