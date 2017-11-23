
//fs module allows us to read and write content for responses!!
var fs = require('fs');

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");


/* tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");*/
