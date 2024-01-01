// 2704. To Be Or Not To Be

// Write a function expect that helps developers test their code.
// It should take in any value val and return an object with the
// following two functions.

// 1. toBe(val) accepts another value and returns true if the two values === 
// each other. If they are not equal, it should throw an error "Not Equal".
// 2. notToBe(val) accepts another value and returns true if the two values
// !== each other. If they are equal, it should throw an error "Equal". 

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
