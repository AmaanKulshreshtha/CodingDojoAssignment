$(document).ready(function()
{
  var x = 24.0;
  console.log(typeof x);
  printRange(2,10,4);
});

function printRange(_start,_end,_skip){

  for(var i=_start; i<_end; i=i+_skip)
  {
    console.log(i);
  }

}
