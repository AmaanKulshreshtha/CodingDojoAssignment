$(document).ready(function()
{
  billionaire();
});

function billionaire(){
  var base = 0.01;

  for (var day=2;;day++)
  {
    if(base>=100000000)
    {
      console.log("It tooks "+day+" for the servant to be a Billionaire !");
      break;
    }
    base *= 2;
    console.log("On day "+day+" Base is:",base);
  }
}
