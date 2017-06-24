var arr=["Ragnar","Lagertha","Rollo","Bjorn","Floki"];

$(document).ready(function()
{
  printArr(arr,"=>",true);
});

function printArr(_arr,_separator,_reverse){

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
