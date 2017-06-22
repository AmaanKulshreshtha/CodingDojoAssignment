$(document).ready(function()
{
  printRange(2,10,2);
});

function printRange(_start,_end,_skip){

  for(var i=_start; i<_end ; i+_skip)
  {
    console.log(i);
  }


}
