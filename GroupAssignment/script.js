$(document).ready(function()
{
   var array=[1,2,3,4,5,6,-12];
   Group2One(array);

   var array=[-4,-3,-12,-8];
   Group2Two(array);
});

function Group2One(_array){
    for(var i=0;i<_array.length;i++)
    {
      if(i%2==0){
        console.log(_array[i]);
      }
    }
  }

function Group2Two(_array){
  var min,max,avg;

  if(_array.length==1){
    min = _array[0];
    max = _array[0];
    avg = _array[0];
  }
  else {
    var sum = min = max = _array[0];;
    for(var i=1; i<_array.length;i++){
       if(_array[i] > max){
          max = _array[i];
       }
       if(_array[i] < min )
       {
          min = _array[i];
       }
       sum += _array[i];
       console.log('sum='+sum);
    }
    avg = sum / _array.length;
  }

  console.log('Max= '+max);
  console.log('Min= '+min);
  console.log('Avg= '+avg);
}
