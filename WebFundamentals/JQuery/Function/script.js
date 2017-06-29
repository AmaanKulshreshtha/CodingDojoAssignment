$(document).ready(function()
{
  $('#addClass').click(function(){
    $('.addClass > p').addClass("red");
  });

  $('#toggle').click(function(){
    $('.toggle > img').slideToggle(2000,
        function(){
           alert("image toggle complete!");
        });
  });
  
  $('img').click(function(){
    console.log('data-alt-src value is',$(this).attr('data-alt-src'));
    var alt_src = $(this).attr('data-alt-src');  //getter retrieve relative path of cat0
    var src = $(this).attr('src');
    console.log('src= '+src);
    $(this).attr('src',alt_src);      //trick to swap src attribute with data-alt-src
    $(this).attr('data-alt-src',src);

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
