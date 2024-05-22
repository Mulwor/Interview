// ! Beginner Series #3 Sum of Numbers
// * Link: https://www.codewars.com/kata/55f2b110f61eb01779000053

// * Given two integers a and b, which can be positive or negative, find the 
// * sum of all the integers between and including them and return it. If the
// * two numbers are equal return a or b.

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  
  return (max - min + 1) * (min + max) / 2
}