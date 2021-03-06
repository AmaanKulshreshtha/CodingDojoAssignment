var express = require("express");

var app = express(); // invoke var express and store the resulting application in var application
// lets handle the base route "/" and respond with "Hello Express"
app.get('/', function(request, response) {
  response.send("<h1>Hello Express</h1>");
})

app.use(express.static(__dirname + "/static"));

console.log(__dirname);
// Tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
