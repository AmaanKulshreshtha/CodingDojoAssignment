/*function Person(name, age){
   var self = this;
   var privateVariable = "This variable is private";
   var privateMethod = function(){
       console.log("this is a private method for " + self.name);
       console.log(self);
   }
   this.name = name;
   this.age =  age;

   this.greet = function(){
		console.log("We have "+this.name+" here! Age of "+this.age);
    console.log("Also my privateVariable SAYS: "+privateVariable)
    privateMethod();
   }

}

var Joe = new Person("Joe",32);
Joe.greet();
*/

var MyObjConstructor = function(name){
  var myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
  this.name = name; // but you can see the name!
  this.method = function(){
    console.log( "I am a method");
  };
}
var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');
console.log(obj1);
