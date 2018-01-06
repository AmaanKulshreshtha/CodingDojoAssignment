class Ninja {
  constructor(_name){
    this.name = _name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }

  //getter
  get getname(){
    return this.name;
  }

  sayName(){
    console.log("Ninja's name is "+this.name);
  }
  showStats(){
    console.log(this.name+" strength= "+this.strength+" "+this.name+" speed= "+this.speed + " " +
     this.name + " health= " + this.health);
  }
  drinkSake(){
    this.health = this.health + 10;
  }
}

// Sensei classes
class Sensei extends Ninja{
  constructor(_name){
    super(_name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom(){
    super.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months.");
  }
}

let ninjaSensei = new Sensei('Yoda');
console.log(ninjaSensei.name);
ninjaSensei.sayName();
ninjaSensei.showStats();
ninjaSensei.speakWisdom();
ninjaSensei.showStats();
