$(document).ready(function()
{
  birthday();
});

function birthday(){
  var daysUntilMyBirthday = 241;

  while(daysUntilMyBirthday!=0)
  {
    if(daysUntilMyBirthday < 5)
    {
      console.log(daysUntilMyBirthday+' days UNTIL MY BIRTDAY!!!');
    }
    else if (daysUntilMyBirthday < 30) {
      console.log("Its almost there, only "+daysUntilMyBirthday+" days left!");
    }
    else{
      console.log(daysUntilMyBirthday+' until my birthday, such a long time...:(');
    }
    daysUntilMyBirthday--;
  }

    console.log(
  "♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*\n"+
  "♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪\n"+
  "*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");

}
