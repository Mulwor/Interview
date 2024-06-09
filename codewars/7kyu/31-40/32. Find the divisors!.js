// * Find the divisors!

// * Create a function named divisors/Divisors that takes an integer n > 1 and 
// * returns an array with all of the integer's divisors(except for 1 and the number
// * itself), from smallest to largest. If the number is prime return the string'

function divisors(integer) {
  // Простое число - это число, которое больше 1, либо он делится на самого себя либо на 1
  
  // 15 делится на 5 - это не просто число 
  // 12 делится на 4 - тоже не простое число
  // 13 не делится ни на что - простое число
  
  let result = [];
  
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      result.push(i);
    }
  }
  
  return result.length ? result : `${integer} is prime`;
};