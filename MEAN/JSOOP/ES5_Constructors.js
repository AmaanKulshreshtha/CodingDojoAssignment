// function personConstructor(name, age) {
//     // an object literal that will be returned
//     const person = {};
//     // attributes of a person
//     person.name = name;
//     person.age = age;
//     // when attached to an object or instance, functions are called 'methods'.
//     // this is our first method, greet
//     person.greet = function(){
//         console.log("Hello my name is " + person.name + " and I am " + person.age + " years old!");
//     }
//     // finally, this function must return an instance
//     return person;
// }
// // create the 'steve' instance, run greet
// const steve = personConstructor("Steve", 27);
// steve.greet();
// // create the 'anika' instance, run greet. note that it is different.
// const anika = personConstructor("Anika", 33);
// anika.greet();
// // finally note how we can refine the greet method for any particular instance
// const emily = personConstructor("Emily", 22);
// emily.greet = function() {
//     console.log("I am the greatest, ever!");
// };
// emily.greet();

function personConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
// the 'new' keyword causes our constructor to return the object we expected.
const anika = new personConstructor('Anika', 33);
anika.greet();
console.log(anika);


// the naming convention for Classes and Object Constructors is that they're capitalized and singular
function Person(name, age) {
    const privateVariable = "This variable is private";
    const privateMethod = function() {
        console.log(this);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
const eliza = new Person("Eliza", 48);
console.log(eliza.privateVariable);
// undefined!

// function Person(name, age) {
//     const privateVariable = "This variable is private";
//     const privateMethod = function() {
//         console.log(this);
//     }
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//         // we can access our attributes within the constructor!
//         console.log("Also my privateVariable says: " + privateVariable)
//         // we can access our methods within the constructor!
//         privateMethod(); // the problem here is that this always refer to the window not the object passed to
//         // the Constructor
//     }
// }
// const joe = new Person("Joe", 23);
// joe.greet();

function Person(name, age) {
    // create a private variable that stores a reference to the new object we create
    const self = this;
    const privateVariable = "This variable is private";
    const privateMethod = function() {
        console.log("this is a private method for " + self.name + ' whose age is '+self.age);
        console.log(self);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        // we can access our attributes within the constructor!
        console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
        privateMethod();
    }
}
const joe = new Person("Joe", 23);
joe.greet();
