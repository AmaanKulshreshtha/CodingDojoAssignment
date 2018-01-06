function OrderSupplies(item, callback){
  let warehouse;
  const deliverTime = Math.random() * 3000;
  console.log('Delivery Time= ', deliverTime);

  return new Promise(function(resolve,reject){
    /* now we should be able to PUT ThIS PART with promises*/
    setTimeout(function(){
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions:  function(){ return 'mix it!'}
        },
        brush:{
          product: 'Horsehair brush',
          directions: function(){ return 'start painting!' }
        },
        tarp:{
          product: 'A Larget Tarp',
          directions: function(){ return 'cover the floor' }
        }
      };

       if(warehouse[item]){  // if item not exist, this will be undefined
         resolve(warehouse[item]);
       } else {
         reject(new Error(`${item} does not exist !`));
       }
   //   resolve(warehouse[item])
   // }, deliverTime);
   },deliverTime);
 });

}

function receivedItem(item){
  console.log(`Received ${ item.product }, time to ${ item.directions() }`);
  // console.log(`Received ${ paint.product }, time to ${ paint.directions }`);   here we are uing it as property of brush, but directions
  // in its nature is a fuction so need to use ( )
}

const paint = OrderSupplies('paint');

const brush = OrderSupplies('brush');

const roller = OrderSupplies('roller');

OrderSupplies('tarp')
  .then(function(tarp){
    receivedItem(tarp);
    return paint;
  })

paint
  .then(function(item){
    receivedItem(item);

    return brush;
  })
  .then(function(item){
    receivedItem(item);

    return roller;
  })
  .catch(function(error){
    console.log(error.message);
  })
/*student solution using promises
const paint = new Promises(function(resolve,reject){
   OrderSupplies('paint',resolve);
});

const brush = new Promises(function(resolve,reject){
  OrderSupplies('brush',resolve);
});

paint.then(function(){
  paint.then(receivedItem);
  })
  .then(function(){
    brush.then(receivedItem);
  })
  .catch();
*/


/* Bad Solution 1
OrderSupplies('brush', function(item){
  receivedItem(item);
  //  this is bad because we have to wait to receive brush first
  OrderSupplies('paint',receivedItem);
}); */


/* better Solution 2 */
// let havePaint = false;
// OrderSupplies('paint',function(item){
//   havePaint = true;
//   receivedItem(item);
// });

// OrderSupplies('brush', function(item){
//   if(havePaint){
//   return receivedItem(item);
//   }
//
//   const timer = setInterval(function(){
//     console.log('checking for paint...');
//     if(havePaint){
//       clearInterval(timer);
//
//       receivedItem(item)
//     }
//   },500);
// });

/*solution 3,  still not scalable */
// let havePaint = false;
// let haveBrush = false;
//
// OrderSupplies('paint', function(item){
//   receivedItem(item);
//
//   if(haveBrush){ // if haveBrush='brush', the line
//     //below will execute cuz haveBrush object
//     //return
//     return receivedItem(haveBrush);
//   }
//   // if we don't have brush,
//   havePaint = item;
// });
//
// OrderSupplies('brush', function(item){
//   console.log('we got brush !');
//   if (havePaint) {
//     return receivedItem(item);
//   }
//
//   haveBrush = item; // here if we already got brush,
//   // we simply assign global variable haveBrush as 'brush'
// });

// solution # 4 is the ideal one ,
// const paint = new Promise(function(resolve,reject){
//   // resolve happens when promise went successful,
//   // reject happens when promise broke
//   OrderSupplies('paint',resolve)
// });
//
// const brush = new Promise(function(resolve,reject){
//   OrderSupplies('brush',resolve)
// });
//
// console.log(paint); // output: mPromise { <pending> } pending means its neight resolved
// // nor rejected
// paint
//  .then(function(item){
//    receivedItem(item); //
//    return brush.then(receivedItem);
//  })
//  .catch(function(error){
//    console.log("we had an error");
//  })
