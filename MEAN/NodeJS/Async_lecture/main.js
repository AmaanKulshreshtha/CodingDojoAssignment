
var person = 'Edward';

function printName(name){
  console.log(name);
}
/*
setTimeout(function( ){
  printName(person);
},2000);

console.log('here');*/

/* Goal here is to make */

function getThingsFromDB(query, callback){
  console.log(query);
  var data = ['1','2','cat'];

  setTimeout(function() {
    callback(data); // this executes function(things) , data -> things
  }, 2000);

}

getThingsFromDB('select * from things', function(things){
  console.log(things);

  for(var i=0; i<things.length;i++){
     console.log(things[i]);
  }
});



function map(array, callback){
  var results = [];
  for (var i = 0; i<array.length; i++){
     // console.log(callback(array[i])); // for each element in array, do whatever
     // the callback does, for dev and debug , suggest use log to see what it does
     results.push(callback(array[i]));    // we want to store it in results array.
  }
  return results;
}

var data = ['1','3','cat'];

//  try out the map function
var results = map(data,function(_element){
   return parseInt(_element, 10);
});

console.log(results);


console.log("Demo of FS:");
var fs = require('fs');

fs.readFile('file.txt',function(err, data){
    if (err) {
      throw err;
    }
    console.log('inside read file');
    console.log(err,data);
    console.log(data.toString());
});

try {
  // synchronous way of read a file, executes line after line
  var fileContent = fs.readFileSync('file.tx');

  console.log('after file');

  console.log(fileContent);

} catch (e) {
  console.log(e.message);
}
