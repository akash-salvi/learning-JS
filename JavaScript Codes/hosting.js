// var num = 2;

// function sayMe() {
//   console.log("Say me");
// }

// sayMe();

// Global Context: majorly collect the information
// Execution Context: responsible for running the function

// Function declarations are scanned and made available
// this is possible because of Global Context

// Variable declarations are also scanned and made undefined

tipper("75");

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

console.log(name);
var name = "hitesh";

function sayName() {
  var name = "Mr. H";
  console.log(name);
}
sayName();

console.log(name);
