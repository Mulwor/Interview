// * 2011. Final Value of Variable After Performing Operations

// * There is a programming language with only four operations 
// * and one variable X:

// * ++X and X++ increments the value of the variable X by 1.
// * --X and X-- decrements the value of the variable X by 1.
// * Initially, the value of X is 0.

// * Given an array of strings operations containing a list of 
// * operations, return the final value of X after performing all 
// * the operations.

var finalValueAfterOperations = function(operations) {
  let result = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "--X") --result
    if (operations[i] === "X--") result--
    if (operations[i] === "++X") ++result
    if (operations[i] === "X++") result++
  }

  return result
};

// Можно улучшить код следующим образом

var finalValueAfterOperations = function(operations) {
  let sum = 0
  
  for (let i = 0; i < operations.length; i++) {
    if(operations[i] == "--X" || operations[i] == "X--") {
      sum--
    } else {
      sum++ 
    }
  }
  
  return sum 
};
