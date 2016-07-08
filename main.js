// Create a constructor that builds objects representing generic playing cards.
// The playing card should keep track of its suit and value (Ace, 2, 3, ... Jack, Queen, King).

function CardGame(suit, value) {
  this.suit = suit;
  this.value = value;
}

var card1 = new CardGame('Hearts', 'Ace');
console.log(card1);

var card2 = new CardGame('Spades', '3');
console.log(card2);

// // Create a constructor that builds objects representing a six sided dice.
// The die should keep track of the current value that it shows (1-6) and have a
// roll method that will simulate rolling the die. Rolling the die should change the current number.

function SixSidedDice() {
  this.roll = function() {
    this.value = Math.floor(Math.random() * 6) + 1;
    //calculates a random number between 1-6
    return this.value;
  };
}
// Create a function called getProbabilities that will simulate rolling two dice 1000
// times. The function should return an array that shows the number of times the sum of
// the two die added up to 2, 3, 4, ... 12.
var dice1 = new SixSidedDice();
console.log(dice1.roll());

var dice2 = new SixSidedDice();
var arr = [0,0,0,0,0,0,0,0,0,0,0];
//array of 0 values for each possible result, 2-12

var result = getProbabilities();
function getProbabilities() {
  for (i=0; i < 1000; i++) {
    //function is run 1000 times

    var roll1 = dice1.roll();
    var roll2 = dice2.roll();
    //each dice is rolled

    var sum = roll1 + roll2;
    //adding the dice rolls together

    // console.log(sum);
    arr[sum-2]++;
    //coercing sum into array?
    //subtracting two to offset 0 and 1 values
    //incrementing array
  }
  return arr;
  }

  console.log(result);
