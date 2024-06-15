// * You are given positive integers n and m. Define two integers, num1 
// * and num2, as follows:

// * num1: The sum of all integers in the range [1, n] that are not
// * divisible by m.
// * num2: The sum of all integers in the range [1, n] that are divisible
// * by m. Return the integer num1 - num2. 

// * Input: n = 10, m = 3 ====> Output: 19. Explanation: In the given example:
// ? [1, 10] ===>  [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
// ? [1, 10] ===> [3,6,9], num2 is the sum of those integers = 18. 
// ? We return 37 - 18 = 19 as the answer.

var differenceOfSums = function(n, m) {
  let num1 = 0;
  let num2 = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      num1 += i;
    } else {
      num2 += i;
    }
  }

  return num1 - num2
};

var differenceOfSums = function(n, m) {
  let num1 = 0;
  let num2 = 0;
  
  for (let i = 1; i <= n; i++){
    i % m === 0 ? num2 += i : num1 += i
  }
  
  return num1 - num2;
};