// =================================== Задача №1 ===================================

// 2667. Create Hello World Function => Write a function createHelloWorld. It should 
// return a new function that always returns "Hello World".

// Уровень сложности - O(1)

// 1. Runtime - 46ms, Memory - 41.48MB
var createHelloWorld = () => (...args) => "Hello World";

// 2. Runtime - 107ms, memory - 41MB
var createHelloWorld = () => (...args) => {
  return  "Hello World";
}

// 2. Runtime - 76ms, Memory - 41.73MB
var createHelloWorld = function() {
  return () => "Hello World"
};

// 3. Runtime - 54ms, Memory - 41.04MB
var createHelloWorld = function() {
  return function(...args) {
    return "Hello World";
  }
};


// =================================== Задача №2 ===================================

// 2620. Counter => Given an integer n, return a counter function. This counter 
// function initially returns n and then returns 1 more than the previous value
// every subsequent time it is called (n, n + 1, n + 2, etc). Input: n = 10 =>
// Output: [10,11,12]

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


// =================================== Задача №3 ===================================

// 2704. To Be Or Not To Be => Write a function expect that helps developers test their code.
// It should take in any value val and return an object with the following two functions.

// 1. toBe(val) accepts another value and returns true if the two values ===  each other. 
// If they are not equal, it should throw an error "Not Equal".
// 2. notToBe(val) accepts another value and returns true if the two values !== each other. 
// If they are equal, it should throw an error "Equal". 

// Уровень сложности - O(1)

// Runtime: 57ms, memory: 41.88MB
var expect = function(val) {
  return {
    toBe: (anotherValue) => {
      if (anotherValue !== val) throw new Error("Not Equal");
      return true
    },
    notToBe: (anotherValue) => {
      if (anotherValue === val) throw new Error("Equal");
      return true
    },
  }
}

// Runtime: 53ms, memory: 42.1
const expect = (val) => {
  const throwError = (error) => {
    throw new Error(error)
  };
  
  return {
      toBe: (anotherValue) => anotherValue === val || throwError('Not Equal'),
      notToBe: (anotherValue) => anotherValue !== val || throwError('Equal'),
  };
};



// =================================== Задача №4 ===================================

// 2665. Counter II => Write a function createCounter. It should accept an initial integer 
// init. It should return an object with three functions. The three functions are:
// 1. increment() increases the current value by 1 and then returns it.
// 2. decrement() reduces the current value by 1 and then returns it.
// 3. reset() sets the current value to init and then returns it.

// Уровень сложности - O(1)

// Runtime: 54ms, Memory - 45.15MB
var createCounter = function(init) {
  // Сохраняем начальное значения сюда
  let result = init
  
  return {
    increment: () => ++result,      // 5 + 1 = 6
    decrement: ()  => --result,     // 5 - 1 = 4
    reset: () => result = init,     // 5 = 5
  }
};

var createCounter = function(init) {
  let current = init;
 
  increment = () => ++current;
  decrement = () => --current;
  reset = () => {
    current = init;
    return current;
  }
 
  return { increment, decrement, reset };    
};