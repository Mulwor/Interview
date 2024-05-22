// ! Sum of two lowest positive integers
// * Link: https://www.codewars.com/kata/558fc85d8fd1938afb000014


// * Create a function that returns the sum of the two lowest positive numbers 
// * given an array of minimum 4 positive integers. No floats or non-positive 
// * integers will be passed.

// * [19, 5, 42, 2, 77] ===> 7.

// ! =================================== Первое решение ======================================

function sumTwoSmallestNumbers(numbers) {  
  const sortedArray = numbers.sort((a, b) => a - b)
  return sortedArray[0] + sortedArray[1]
}

// ! =================================== Второе решение ======================================

function sumTwoSmallestNumbers(numbers) {  
  const [ a, b ] = numbers.sort((a, b) => a - b)
  return a + b
}

// ! =================================== Третье решение ======================================

function sumTwoSmallestNumbers(numbers) {  
  let num1 = Infinity;
  let num2 = Infinity;
  
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < num1) {
      num2 = num1; 
      num1 = numbers[i]; 
    } else if (numbers[i] < num2) {
      num2 = numbers[i]; 
    }
  }
  
  return num1 + num2;

}