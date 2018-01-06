function doSomething(possibleCallback){
  if(typeof(possibleCallback)==='function'){
    console.log('possibleCallback is a callback!');
    possibleCallback(); //we can invoke the callback!
  }
  else {
    console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
  }
}

doSomething(function myCallback(){console.log('yes, I am a callback!');});
doSomething('string');

function makePasta(pasta, makeSauce){
  console.log('Boiling water');
  console.log('putting '+pasta+' pasta in the water');
  console.log('pasta is done!');
  return pasta + "Pasta! Voila!";
}

makePasta("Penne");
makePasta("Farfalle");
