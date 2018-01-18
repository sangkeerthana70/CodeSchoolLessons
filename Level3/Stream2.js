//Reading and writing a file.
var fs = require('fs');
var file = fs.createReadStream("readme.md");//original file
var newFile = fs.createWriteStream("readme_copy.md");//destination file
file.pipe(newFile);