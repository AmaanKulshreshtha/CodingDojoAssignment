var http = require('http');

//fs module allows us to read and write content for responses!!
var fs = require('fs');
//creating a server using http module:
var server = http.createServer(function (request,response){
    console.log('client request URL:',request.url);
    // this is how we do routing:
    if(request.url==='/'){
      //
      fs.readFile('./views/index.html','utf8',function(errors,contents){
        console.log(typeof(contents));
        console.log('passed begin');
        response.writeHead(200,{'Content-Type':'text/html'}); //send data about response
        console.log('passed writeHead');
        response.write(contents);//send response body
        console.log('passed writeContents');
        response.end();//finished
      });
    }
    else if(request.url==='/cars'){ // we need to do this because
      // the style.css is actually stored on our server
      fs.readFile('./views/cars.html','utf8',function(errors,contents){
        console.log('started processing ninjas...');
        response.writeHead(200,{'Content-Type':'text/html'});
        console.log('passed write head ninjas');
        response.write(contents);
        response.end();
      });
    }
    else if(request.url==='/cats.html'){ // we need to do this because
      // the style.css is actually stored on our server
      fs.readFile('./views/cats.html','utf8',function(errors,contents){
        console.log('started processing dojos...');
        response.writeHead(200,{'Content-Type':'text/html'});
        console.log('passed writeHead dojos');
        response.write(contents);
        response.end();
      });
    }

	//route for images
	else if(request.url==='/images/accord.jpg'){
		fs.readFile('./images/accord.jpg',function(erros,contents){
			response.writeHead(200,{'Content-type':'image/jpg'});
      response.write(contents);
      response.end();
		});
	}

//route for stylesheets
 else if(request.url==='/stylesheets/cars.css'){
   fs.readFile('./style')
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
