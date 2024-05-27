// ! You're a square!

// Task: Given an integral number, determine if it's a square number:

isSquare(-1)        // ===> false, "-1: Negative numbers cannot be square numbers";
isSquare( 0)        // ===> true, (0 * 0)";
isSquare( 3)        // ===> false, "3 is not a square number";
isSquare( 4)        // ===> true, (2 * 2)";
isSquare(25)        // ===> true, (5 * 5)";
isSquare(26)        // ===> false, "26 is not a square number";

// ! ================================ Первое решение =================================
var isSquare = function(number){
  return Math.sqrt(number) % 1 === 0;
}

// ! ================================ Второе решение =================================
var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}