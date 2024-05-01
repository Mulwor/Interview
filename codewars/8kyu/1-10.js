// 1. Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0.
// Example [1, -4 , 7, 12] => 1 + 7 + 12 = 20

// Первое решение
function positiveSum(arr) {
  // .filter(number => number >= 0) - проверяет является ли число положительным или нулем.
  // Если оно положительное, то создается новый массив, которые добавляет туда только положительные
  return arr.filter(number => number >= 0).reduce((first, second) => first + second, 0)
}

// Второе решение 
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    
    if (arr[i] > 0) {                   
      total += arr[i];                  
    }
  }
  return total;                        
}