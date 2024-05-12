// ! 1. Even or Odd

// * Create a function that takes an integer as an argument and returns "Even" 
// * for even numbers or "Odd" for odd numbers.

// * Уровень сложности: O(1)

// * 833 ms
function evenOrOdd(number) {
  return number % 2 ? "Odd" : "Even"
}

// * 762 ms
function evenOrOdd(number) {
  // 10 % 2 => 0 === 0 => true
  // 11 % 2 => 1 === 0 => false
  return (number % 2 === 0) ? "Even" : "Odd"
}

// =============================================================================


// ! 2. Multiply => This code does not execute properly. Try to figure out why.

// * Уровень сложности: O(1)

// * Time: 724ms 
function multiply(a, b){
  return a * b
}

const multiply = (a, b) => a * b;



// =============================================================================

// ! 3. Return Negative

// * In this simple assignment you are given a number and have to make it negative.
// * But maybe the number is already negative?

// * Уровень сложности: O(1)

function makeNegative(num) {
  return -Math.abs(num)
}

// =============================================================================

// ! 4. Sum of positive

// * You get an array of numbers, return the sum of all of the positives ones.
// * Example [ 1, -4, 7, 12] => 1 + 7 + 12 = 20

// * Уровень сложности: O(n), где n - количество элементов во входном массиве.

// * Time: 804ms 

function positiveSum(arr) {
  // * проходит через каждый элемент массива, чтобы проверить, больше ли он нуля. Эта операция
  // * имеет временную сложность O(n), где n - количество элементов во входном массиве arr.
  let result = arr.filter((number ) => number  > 0)
  
  // * После фильтрации результирующий массив передается функции reduce, которая также проходит
  // * через каждый элемент для вычисления суммы. Это также имеет временную сложность O(n), так 
  // * как она должна посетить каждый элемент один раз.
  return result.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}

function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    
    if (arr[i] > 0) {                   
      total += arr[i];                  
    }
  }
  return total;                        
}


// =============================================================================

// ! 5. Reversed Strings

// * Complete the solution so that it reverses the string passed into it. 
// * Examples => 'world'  =>  'dlrow'; 'word'   =>  'drow'

function solution(str){
  // * 1. split(""): Временная сложность этой операции в худшем случае составляет O(n), 
  // * где n - длина строки str.
  // * 2. reverse(""): Временная сложность этой операции также составляет O(n), где n - длина массива, 
  // * который мы получили после разделения строки.
  // * 3. join(""): Временная сложность этой операции также составляет O(n), где n - количество элементов
  // * в массиве, который мы получили после реверса.

  return str.split("").reverse("").join("")
}

// =============================================================================
// ! 6. Convert boolean values to strings 'Yes' or 'No'.

// * Complete the method that takes a boolean value and return a "Yes" string 
// * for true, or a "No" string for false.

// ? Уровень сложности: O(1) => Time: 773ms 

function boolToWord(bool){
  return bool === true ? "Yes" : "No"
}

// =============================================================================
// ! 7. Convert a Number to a String!

// * We need a function that can transform a number (integer) into a string.
// * What ways of achieving this do you know?

// * Examples (input --> output): 123  --> "123"; 999  --> "999"; -100 --> "-100"

// ? Time: 765ms 
function numberToString(num) {
  return String(num)
}

// ? Time: 775ms 
function numberToString(num) {
  return num.toString()
}


// =============================================================================
// ! 8. Opposite number

// * Very simple, given a number (integer / decimal / both depending on the language),
// * find its opposite (additive inverse).

// ? Time: 801ms 
function opposite(number) {
  return -number
}

// =============================================================================
// ! 9. Remove First and Last Character

// * It's pretty straightforward. Your goal is to create a function that removes 
// * the first and last characters of a string. You're given one parameter, the 
// * original string. You don't have to worry about strings with less than two characters.

function removeChar(str){
  return str.slice(1, -1)
};

function removeChar(str){
  return str.substring(1, str.length-1);
};
 


// =============================================================================
// ! 10. Square(n) Sum

// * Complete the square sum function so that it squares each number passed into it and then 
// * sums the results together. For example, for [1, 2, 2] it should return 9 => (1*1)+(2*2)+(2*2) 

function squareSum(numbers){
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += (numbers[i] * numbers[i]);
  }
  return result;
}