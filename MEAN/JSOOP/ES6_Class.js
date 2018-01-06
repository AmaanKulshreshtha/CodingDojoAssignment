
// New ES6 way
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log("You created a Dot!");
    }
    showLocation() {
        // ES6 String Interpolation!
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
}

let dot1 = new Dot(10, 10);

const dot2 = new Dot(5, 13);

dot2.showLocation();

class Circle extends Dot{
  constructor(x,y,radius){
    super(x, y);
    this.radius = radius;
  }
}

// we can now create Circles
const circle1 = new Circle(33, 33, 33);
// same attributes as a Dot, plus a radius
console.log(circle1);
// and Circles can access Dot methods
circle1.showLocation();

// ES6 class demo with more features
class Polygon{
  constructor(height,width){
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  sayName(){
    console.log("Hi, i am a "+ this.name + ".");
  }

  sayHistory(){
    console.log(' "Polygon" is derived from the Greek polus (many) '+' and gonia (angle).');
  }
}

let p = new Polygon(300, 400);
p.sayName();
console.log('Thie width of this polygon is ' + p.width);

// derived class in ES6
class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }

  // ES6 getter and setter example
  get area() {
    return this.height * this.width;
  }
  set area(value){
    this.area = value;
  }
}
// ES6 call constructor and getter
var mySqr = new Square(10);
console.log('Area = '+mySqr.area);
