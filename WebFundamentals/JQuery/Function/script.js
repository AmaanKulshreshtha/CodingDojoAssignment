$(document).ready(function()
{
  $('#addClass').click(function(){
    $('.addClass > p').addClass("red");
  });

  $('#toggle').click(function(){
    $('.toggle > img').toggle(2000,
        function(){
           alert("toggle complete!");
        });
  });

  $('#slideDown').click(function(){
     $('.toggle > img').slideDown(1000,function(){
       alert("Slided down!");
     })
  });

  $('#slideUp').click(function(){
     $('.toggle > img').slideUp(1000,function(){
       alert("Slided up!");
     })
  });

  $('#slideToggle').click(function(){
    $('.toggle > img').slideToggle(2000,
        function(){
           alert("Slide toggle complete!");
        });
  });

  $('#fadeIn').click(function(){    /*in css, we use display: none to let the div invisible
    so we can see fadeIn affect*/
    console.log("clicked fadeIn button.");
    $('.fade').fadeIn("slow",
        function(){
           alert("Fade In complete!");
        });
  });

  $('#fadeOut').click(function(){
    console.log("clicked fadeOut button.");
    $('.fadeOut > p').fadeOut("slow",
        function(){
            alert("Fade Out complete!");
        });
  });

  $('#before').click(function(){
    console.log("clicked before button.");
    $('.before > p').before("<h1>H1 Title added before paragraph</h1>");
  });

  $('#before').click(function(){
    console.log("clicked before button.");
    $('.before > p').before("<h1>H1 Title added before paragraph</h1>");
  });

  $('#after').click(function(){
    console.log("clicked after button.");
    $('.after > p').after("<h3>H3 Title added after paragraph</h3>");
  });

  $('#getHTML').click(function(){
    var htmlString = $('.content > p').html();
    $('.content > p').after("<h3>htmlString</h3>")
  });

  $('#value').click(function(){
    console.log($('#box1').val());
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
