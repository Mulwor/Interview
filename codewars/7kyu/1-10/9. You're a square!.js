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

// ! =============================== Теория ==========================================

// todo | Math.sqrt - возвращает квадратный корень числа, то есть

Math.sqrt(9);                               // 3
Math.sqrt(2);                               // 1.414213562373095
Math.sqrt(1);                               // 1
Math.sqrt(0);                               // 0
Math.sqrt(-1);                              // NaN
Math.sqrt(-0);                              // -0


// todo | Number.isInteger() - определяет, является ли переданное значение целым числом.

Number.isInteger(0);                        // true
Number.isInteger(1);                        // true
Number.isInteger(-100000);                  // true
Number.isInteger(0.1);                      // false
Number.isInteger(Math.PI);                  // false
Number.isInteger(NaN);                      // false
Number.isInteger(Infinity);                 // false
Number.isInteger(-Infinity);                // false
Number.isInteger("10");                     // false
Number.isInteger(true);                     // false
Number.isInteger(false);                    // false
Number.isInteger([1]);                      // false
Number.isInteger(5.0);                      // true
Number.isInteger(5.000000000000001);        // false
Number.isInteger(5.0000000000000001);       // true