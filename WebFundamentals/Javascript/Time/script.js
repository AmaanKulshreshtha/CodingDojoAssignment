$(document).ready(function()
{
  Time(7,30,"PM");
});

function Time(HOUR,MINUTE,PERIOD){
  console.log('In Time.');
  var msg = "It's";

  if (MINUTE > 30)
  {
    msg += " amost " + (HOUR+1);
  }
  else if (MINUTE < 30)
  {
    msg += " just after " + HOUR;
  }
  else{
    msg += " half past " + HOUR;
  }

  if (PERIOD == "AM")
  {
    msg+=" in the morning.";
  }
  else{
    msg+=" in the evening.";
  }
  console.log(msg);
}
