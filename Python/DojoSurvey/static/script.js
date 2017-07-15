$(document).ready(function(){
  $('#back').click(function(){
    console.log('Go back button clicked.')
    history.back();
  });
});
