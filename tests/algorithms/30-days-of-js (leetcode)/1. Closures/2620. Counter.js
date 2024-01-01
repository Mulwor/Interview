// 2620. Counter

// Given an integer n, return a counter function. This counter 
// function initially returns n and then returns 1 more than the 
// previous value every subsequent time it is called (n, n + 1, 
// n + 2, etc).

// Input: n = 10 ===> Output: [10,11,12]

// Уровень сложности - O(1)

// Runtime: 67ms, Memory: 41.66MB 
var createCounter = function (n) {
  return () => n++ 
}

// Runtime: 51ms, Memory: 42MB
var createCounter = function(n) {
  return function() {
    return n++
  } 
};
