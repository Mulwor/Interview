// ! String ends with

// * https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

// ? Complete the solution so that it returns true if the first argument(string)
// ? passed in ends with the 2nd argument (also a string).

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

function solution(str, ending){
  return str.endsWith(ending);
}

function solution(str, ending){
  return str.substr(-ending.length) == ending;
}