// =================================== Задача №1 ===================================

// 2629. Function Composition => Given an array of functions [f1, f2, f3, ..., fn], 
// return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns
// one integer as output.

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000

// https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript

// =================================== Задача №2 ===================================

// 2703. Return Length of Arguments Passed => Write a function argumentsLength that
// returns the count of arguments passed to it: Input: args = [5] => Output: 1

var argumentsLength = function(...args) {
  return args.length
};



// =================================== Задача №3 ===================================


// =================================== Задача №4 ===================================