// ## Exercise 1 ##

// Q. 1.1
// A. 10

// Q. 1.2
// A. 1

// Q. 1.3
// A. number

// Q. 1.4
// A. true

// Q. 1.5
// A. expected error, returned Infinity

// Q. 1.6
// A. NaN

// Q. 1.7
// A. expected true, returned false

// Q. 1.8
// A. expectec object, returned number

// Q. 1.9
// A. number

// Q. 1.10
// A. Brendan Eich

// Q. 1.11
// A. Brendan Eich

// Q. 1.12
// A. 8

// Q. 1.13
// A. true

// Q. 1.14
// A. unidentified

// Q. 1.15
// A. unidentified

// ## Exercise 2 ##

var score = 10;
if (score == 10) {
  console.log("Distinction");
} else if (score == 9) {
  console.log("Merit");
} else if (score == 8) {
  console.log("Pass");
} else {
  console.log("Fail");
}

switch (score) {
  case 10:
    console.log("Distinction");
    break;
  case 9:
    console.log("Merit");
    break;
  case 8:
    console.log("Pass");
    break;
  default:
    console.log("Fail");
}

// ## Exercise 3 ##

var coffees = [
  { type:"Latte", price:2.65 },
  { type:"Cappuccino", price:2.75 },
  { type:"Flat white", price:2.95 },
  { type:"Super-dooper Mocha Deluxe", price:3.79 }
];
for (coffee of coffees) {
  console.log(coffee.type + "s cost £" + coffee.price + " each");
}

// ## Exercise 4 ##

var currentPlayer = 'x';
var winner;
var grid = [[null, null, null], [null, null, null], [null, null, null]];

if ((grid[0][0] == currentPlayer && grid[0][1] == currentPlayer && grid[0][2] == currentPlayer) ||
 (grid[1][0] == currentPlayer && grid[1][1] == currentPlayer && grid[1][2] == currentPlayer) ||
 (grid[2][0] == currentPlayer && grid[2][1] == currentPlayer && grid[2][2] == currentPlayer) ||
 (grid[0][0] == currentPlayer && grid[1][0] == currentPlayer && grid[2][0] == currentPlayer) ||
 (grid[0][1] == currentPlayer && grid[1][1] == currentPlayer && grid[2][1] == currentPlayer) ||
 (grid[0][2] == currentPlayer && grid[1][2] == currentPlayer && grid[2][2] == currentPlayer) ||
 (grid[0][0] == currentPlayer && grid[1][1] == currentPlayer && grid[2][2] == currentPlayer) ||
 (grid[0][2] == currentPlayer && grid[1][1] == currentPlayer && grid[2][0] == currentPlayer)) {
  winner = currentPlayer
  console.log(winner + " wins");
} else {
  console.log("No winner");
}
