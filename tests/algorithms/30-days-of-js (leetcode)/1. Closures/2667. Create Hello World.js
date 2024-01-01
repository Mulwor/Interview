// 2667. Create Hello World Function

// Write a function createHelloWorld. It should return a new 
// function that always returns "Hello World".

// Уровень сложности - O(1)

// 1. Runtime - 46ms, Memory - 41.48MB
// const createHelloWorld = () => (...args) => "Hello World";
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

// 1. Уровень выполнения зависит от переменной, который был вызван: 
// У var самый большой runtime