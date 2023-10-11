// 2667. Create Hello World Function
// Write a function createHelloWorld. It should return a new function that always 
// returns "Hello World".


var createHelloWorld = function() {
  return () => "Hello World"
};


// ================================================================================


// 2620. Counter
// Given an integer n, return a counter function. This counter function initially 
// returns n and then returns 1 more than the previous value every subsequent time 
// it is called (n, n + 1, n + 2, etc).
// Example: n = 10; output [10, 11, 12]


var createCounter = function (n) {
  return () => n++ 
}


// ================================================================================


// 2704. To Be Or Not To Be
// https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript

// Write a function expect that helps developers test their code. It should take in
// any value val and return an object with the following two functions.
// 1. toBe(val) accepts another value and returns true if the two values === each 
// other. If they are not equal, it should throw an error "Not Equal".
// 2. notToBe(val) accepts another value and returns true if the two values !== each 
// other. If they are equal, it should throw an error "Equal".

var expect = function(val) {
  return {
    toBe: (anotherValue) => {
      if (anotherValue !== val) throw new Error("Not Equal")
      else return true;
    },
    notToBe: (anotherValue) => {
      if (anotherValue === val) throw new Error("Equal")
      else return true;
    }  
  }
}


// ================================================================================


// 2665. Counter II
// Write a function createCounter. It should accept an initial integer init. It should
// return an object with three functions.The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function(init) {
  let value = init
  return {
    increment: () => ++value,
    decrement: ()  => --value,
    reset: () => value = init
  }
};