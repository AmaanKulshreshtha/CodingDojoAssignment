function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

var arr = [ 'Ace',2,3,4,5,6,7,8,9,10,'Jack','Queen','King'];
shuffle(arr);
console.log(arr);

class Deck{
  constructor(){
    // first init a empty deck array
    this.deck=[];
  }
  // place card in deck acending order Ace, 1,2,3
  reset(){
     this.deck=[]; // empty Deck
     const suits = ['Clubs','Hearts','Diamonds','Spades'];
     const values = ['Ace',2,3,4,5,6,7,8,9,10,'Jack','Queen','King'];

     for (const suit of suits){
       for (const value of values) {
         this.deck.push(`${value} of ${suit}`);
         // the trick of `${ variable }` is very useful
       }
     }
     return this;
  }

  shuffle() {
    let m = this.deck.length, t, i;

    // While there are remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }
    return this;
  }

  deal(){
    return this.deck.pop(); // remove the last element from deck
  }
}

class Player{
  constructor(_name){
    this.name = _name;
    this.hand = [];
  }

  // 相当于摸牌 从扑克牌堆顶端摸一张
  draw(deck){
    this.hand.push(deck.deal());
    return this;
  }

  discard(){
    this.hand.pop();
    return this;
  }
}

const deck2 = new Deck();
console.log(deck2);
deck2.reset().shuffle();
console.log(deck2);

const player2 = new Player("Ronnel");
player2.draw(deck2).draw(deck2);
console.log(player2);
console.log(deck2);
