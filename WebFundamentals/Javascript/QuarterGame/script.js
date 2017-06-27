var base = Math.random();
console.log(base);
var quarters = Math.floor(base);
console.log(quarters);

$(document).ready(function()
{
  randomChance();
});

function randomChance(){

  if(_reverse)
  {
    for(var i=_arr.length-1;i>=0;i--)
    {
      console.log(_separator+_arr[i]);
    }
  }

  else{
    for(var i=0; i<arr.length;i++)
    {
      console.log(_separator+_arr[i]);
    }
  }


}
