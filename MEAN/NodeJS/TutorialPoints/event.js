var events = require ('events');
var http = require('http');

//create eventEmitter object
var eventEmitter = new events.EventEmitter();

//create event handler as follows
var connectHandler = function connected(){
  console.log('connection successful.');

  // Fire the data_received event
  eventEmitter.emit('data_received');
}

// Bind the connection event with the connectHandler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
  console.log('data received successfully.');
});

//creating a server using http module:
var server = http.createServer(function (request,response){
    console.log('client request URL:',request.url);
    // this is how we do routing:
    if(request.url==='/'){
      fs.readFile ('input.txt', function (err, data) {
         if (err)
         {
           console.log(err.stack);
           return;
         }
         console.log(data.toString());
      });
    }
      else{
        response.writeHead('404');
        response.end('File not found!!!');
      }
    });

console.log("Program Ended.");
