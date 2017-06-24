$(document).ready(function()
{
  billionaire();
});

function billionaire(){
  var base = 0.01;

  for (var day=2;day<=30;day++)
  {

    base += base * 2;
    console.log("At the end of day "+day+" servant has:",base);
  }
}
