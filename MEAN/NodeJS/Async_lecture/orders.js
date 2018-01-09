function orderSupplies(item,callback){
  let warehouse;
  const deliveryTime = Math.random() * 3000;

  setTimeout(function(){
    warehouse = {
        paint: {
          product:"Neon Green paint",
          directions: function() { return 'mix it!' }
        },
        brush: {
          product:'Horsehair brush',
          directions:function()  { return 'start painting!'}
        }
      };

    callback(warehouse[item]); // take warehouse[key_name], key_name is from item parameter
    // do it doesn't matter what you put in orderSupplies anonymous function ( x y z)
  }, deliveryTime);
}


  orderSupplies('paint', function(doesnotmatter){
    console.log(doesnotmatter);
  });
