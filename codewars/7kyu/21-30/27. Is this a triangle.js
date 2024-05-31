// ! Is this a triangle?

// * https://www.codewars.com/kata/56606694ec01347ce800001b

// ? Implement a function that accepts 3 integer values a, b, c. 
// ? The function should return true if a triangle can be built
// ? with the sides of given length and false in any other case.
// ? (In this case, all triangles must have surface greater than 0 to be accepted).

/*
  * 1,2,2 -> true
  * 4,2,3 -> true
  * 2,2,2 -> true
  * 1,2,3 -> false
  * -5,1,3 -> false
  * 0,2,3 -> false
  * 1,2,9 -> false 
*/

function isTriangle1(a,b,c){
  return a + b > c && a + c > b && c + b > a;
}

var isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2

function isTriangle2(a, b, c){
  let maxNumber = Math.max(a, b, c)
  return (a + b + c) - maxNumber > maxNumber
}
