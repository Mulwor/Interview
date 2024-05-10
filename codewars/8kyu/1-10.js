// ! 1. Sum of positive

// * You get an array of numbers, return the sum of all of the positives ones.
// * Note: if there is nothing to sum, the sum is default to 0.
// * Example [1, -4 , 7, 12] => 1 + 7 + 12 = 20

// ? Первое решение
function positiveSum(arr) {
  // * .filter(number => number >= 0) - проверяет является ли число положительным или нулем.
  // * Если оно положительное, то создается новый массив, которые добавляет туда только положительные
  return arr.filter(number => number >= 0).reduce((first, second) => first + second, 0)
}

// ? Второе решение 
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    
    if (arr[i] > 0) {                   
      total += arr[i];                  
    }
  }
  return total;                        
}

// =====================================================================================================

// ! 2. Square(n) Sum

// * Complete the square sum function so that it squares each number passed into it and then 
// * sums the results together. For example, for [1, 2, 2] it should return 9 => (1*1)+(2*2)+(2*2) 

function squareSum(numbers) {
  return numbers.reduce((a, b) => a + (b * b), 0)
}

function squareSum(numbers){
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += (numbers[i] * numbers[i]);
  }
  return result;
}

// =====================================================================================================

// ! 3. Grasshopper - Summation

// * Write a program that finds the summation of every number from 1 to num. The number will always be a positive
// * integer greater than 0. Your function only needs to return the result what is shown between parentheses in the example
// * below is how you reach that result and it's not part of it, see the sample tests. 

// * 2 -> 3 (1 + 2)
// * 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)