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


// =============================================================================

// ! 5. Reversed Strings

// * Complete the solution so that it reverses the string passed into it. 
// * Examples => 'world'  =>  'dlrow'; 'word'   =>  'drow'

function solution(str){
  // * 1. split(""): Временная сложность этой операции в худшем случае составляет O(n), где n - длина
  // * строки str.
  // * 2. reverse(""): Временная сложность этой операции также составляет O(n), где n - длина массива, 
  // * который мы получили после разделения строки.
  // * 3. join(""): Временная сложность этой операции также составляет O(n), где n - количество элементов
  // * в массиве, который мы получили после реверса.

  return str.split("").reverse("").join("")
}