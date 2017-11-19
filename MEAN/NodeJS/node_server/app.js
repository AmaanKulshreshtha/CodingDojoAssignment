var http = require('http');

//fs module allows us to read and write content for responses!!
var fs = require('fs');
//creating a server using http module:
var server = http.createServer(function (request,response){
    console.log('client request URL:',request.url);
    // this is how we do routing:
    if(request.url==='/'){
      //
      fs.readFile('./index.html','utf8',function(errors,contents){
        console.log(typeof(contents));
        console.log('passed begin');
        response.writeHead(200,{'Content-Type':'text/html'}); //send data about response
        console.log('passed writeHead');
        response.write(contents);//send response body
        console.log('passed writeContents');
        response.end();//finished
      });
    }
    else if(request.url==='/style.css'){ // we need to do this because
      // the style.css is actually stored on our server
      fs.readFile('./style.css','utf8',function(errors,contents){
        console.log('started process css...');
        response.writeHead(200,{'Content-Type':'text/css'});
        console.log('passed writeHead css');
        response.write(contents);
        response.end();
      });
    }
// request did match anything
    else{
      response.writeHead('404');
      response.end('File not found!!!');
    }
});

// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
