$(document).ready(function()
{
  $('img').css('display','in-line'); // this is just a shortcut for set css style using jquery,
  //don't do this in real project

  $('img').click(function(){
    $(this).hide(1000);
  });

  $('#disappear').click(function(){
    $('img').show();
  });
  //  alert('Page fully loaded!');
   //
  //  $('a').click(function(){
  //    alert('you are now leaving the page!');
  //  });
   //
  //  $('#hide').click(function(){
  //    $('p').hide();
  //  });
   //
  //  $('#show').click(function(){
  //    $('p').show();
  //  });
   //
  //  $('h3').hover(function(){
  //    $('h2').text('H2 just changed to Austin, Texas');
  //  },
  //    function(){ alert("now you leaving H2!");});

});
