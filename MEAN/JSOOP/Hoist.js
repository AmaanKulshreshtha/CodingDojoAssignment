//var magicalUnicorns; // the declaration gets hoisted to the top of the scope by itself
//console.log(magicalUnicorns); // we log it as undefined
//let magicalUnicorns = "awesome"; // the assignment stays exactly <wh></wh>ere it was

var foo = "bar";
function magic(){
  foo = "hello world";
  console.log(foo);
  var foo;
}
magic();
console.log(foo);

// 理解 javascript Hoisting 即变量提前：
var x = 1;
console.log(x); // 1

if (true) {
   var x = 2;
   console.log(x); //2
}

console.log(x); // 2
// why we have result as 1 , 2, 2 not 1, 2, 1 ?? think
/*
在这段代码中，Firebug显示1，2,2。这是因为JavaScript是函数级作用域(function-level scope)。
这和C系语言是完全不同的。
块，就像if语句，并不会创建一个新的作用域。只有函数才会创建新的作用域*/

//if i want to want to use temp variable like those in c++ / java,
// i need to do create temporary function to do that:
function foo() {
  var x = 1;
  if (x) {
    (function () {
        var x = 2;
        // some other code
    }());
  }
  // x is still 1;
}
/* Key Rules of Hoisting
• Variable declarations rise to the top of their scope like hot air balloons.

• Functions create their own scope and act like cages, preventing declarations from rising out.

• Assignments, or = signs, act like anchors. They stay put, no matter how the code is rearranged.

• let and const will throw an error if called before they get assigned.*/
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);


/*var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}*/

/*mean();  // attempt to invoke something that is not defined yet will fail
console.log(food);  // undefined
var mean = function() {   // the definition of function cannot be hoisted
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);*/


console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre); // this cannot change the global/outside genre because scope is restricted to the function
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);



dojo = "san jose";
console.log(dojo); // san jose
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo); // seattle
	var dojo = "burbank";
	console.log(dojo); // burbank
}
console.log(dojo); // san jose
