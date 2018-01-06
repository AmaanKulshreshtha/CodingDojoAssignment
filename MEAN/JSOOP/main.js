
function Person(name, items){
    if (!(this instanceof Person)){
      return new Person(name, items); // if argument is not personMaker ,
      //recall this constructor to make a new personMaker object
    }

    /*const person = {
      // item: items, // ES5  create a property array
      items,  // ES6  you can simply do this to create property array with name 'items'
    };*/

    this.name = name;
    this.items = items;
    //this.take = take; // make take a property of person
}

// create a prototype, advantage is that when u run the program, take no longer need to be re-created for each instance
Person.prototype.take = function take(item, target){
  if(!target && !Array.isArray(target.items)){
    console.log("Target.items is not array");
    throw new Error('target must have an items array');
 }

 for (let i=0; i < target.items.length; i++){
   if(item===target.items[i]){
     //console.log();
         // slice
    target.items.splice(i,1);   // splice 1 element at index i
    this.items.push(item); // store the item to someone
    return true;
   }
 }
 return false;
}

Person.prototype.toString = function () {
  return 'This is a person object.';
};


const jason = new Person('Jason', ['gum', 'keys', 'wallet']);
const someone = Person('Someone',['money','lint']);
const backpack = {
  items:['compass','map'],
};

//console.log('someone',someone.take('keys',jason));
//console.log(jason);
//console.log(someone);
//console.log(Object.prototype.toString.call(jason.items));
//console.log('take',take('keys', jason));
console.log('take',someone.take('map',backpack));
console.log('jason',jason.toString());
console.log('someone',someone.toString());

class User(){
  constructor( name, items ) {
    this.name = name;
    this.items = items;
  }

  take(){
    //do things
  }
}

/*
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myString;
myString = 'some other value';
// myString = 5;
var myNum = 456;
var myArr = ['1', '2', '3', 5, 'cat', 7];
myArr.push('1');
myArr.push(5);
var str = myArr[0];
str.toUpperCase();
var strOrNum;
strOrNum = 5;
strOrNum = '5';
var o = {
    a: 'a',
    b: 'b'
};
// const user: IUser = {
//   name: 'Jason'
// };
var User = (function () {
    // name: string;
    // private age: number;
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.sayHello = function () {
        return "hello " + this.name;
    };
    return User;
}());
var Person = (function (_super) {
    __extends(Person, _super);
    function Person(name, age, color) {
        var _this = _super.call(this, name, age) || this;
        _this.color = color;
        return _this;
    }
    return Person;
}(User));
var person = new Person('Jason', 99, 'brown');
console.log(person.sayHello());
// user.age;
var arr = ['1', '2', '3', '5', 'cat', '7', 'dog'];
function map(array, callback) {
    var results = [];
    for (var index = 0; index < array.length; index++) {
        results.push(callback(array[index], index));
    }
    return results;
}
var result = map(arr, function (element) {
    return parseInt(element, 10);
});
console.log(result);
*/
