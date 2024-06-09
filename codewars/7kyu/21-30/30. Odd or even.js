// ! Odd or Even?

// * Given a list of integers, determine whether the sum of 
// * its elements is odd or even. Give your answer as a string 
// * matching "odd" or "even". If the input array is empty
// * consider it as: [0] (array with a zero).

// * Input: [0] ===> Output: "even"\
// * Input: [0, 1, 4] ===> Output: "odd"
// * Input: [0, -1, -5] ===> Output: "even"

function oddOrEven(array) {
  return array.reduce((first, second) => first + second, 0) % 2 ? 'odd' : 'even'
}

function oddOrEven(array) {
  let result = 0;
  
  for (let i = 0; i < array.length; i++) {
    result += array[i]
  }
  
  return result % 2 ? "odd" : "even"
}