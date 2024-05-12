// ! 11. String repeat

// * Write a function that accepts an integer n and a string s as parameters
// * and returns a string of s repeated exactly n times: 6, "I" -> "IIIIII" 
// * 5: "Hello" -> "HelloHelloHelloHelloHello"

// ? Time: 1044ms
function repeatStr (n, s) {
  return s.repeat(n);
}

// ? Time: 829ms
function repeatStr(num, str) {
  let res = '';
  for (let i = 1; i <= num; i++) {
    res = res + str;
   }
  return res;
}

// ========================================================================= 

// ! 12. Grasshopper - Summation

// * Write a program that finds the summation of every number from 1 to num. The number will 
// * always be a positive integer greater than 0. Your function only needs to return the result, 
// * what is shown between parentheses in the example below is how you reach that result and
// * it's not part of it, see the sample tests.

// * 2 -> 3 (1 + 2)
// * 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i
  }
  return result;
}

function summation(num) {
  return num * (num + 1) / 2
}

// ========================================================================= 

// ! 13. Remove String Spaces

// * Write a function that removes the spaces from the string, then return the resultant string.

// * "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// * "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"

function noSpace(x){
  return x.split(' ').join("")
}

function noSpace(x){
  return x.replace(/\s/g, '');
}

function noSpace(x) {
  return x.replaceAll(' ', '');
}

// ========================================================================= 

// ! 14. Find the smallest integer in the array

// * Given an array of integers your solution should find the smallest integer.

// * Given [34, 15, 88, 2] your solution will return 2
// * Given [34, -345, -1, 100] your solution will return -345

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// ========================================================================= 

// ! 15. Counting sheep...

// * Consider an array/list of sheep where some sheep may be missing from their place. 
// * We need a function that counts the number of sheep present in the array (true means 
// * present).

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

function countSheeps(arrayOfSheep) {
  let num = 0;
  
  for(let i = 0; i < arrayOfSheep.length; i++) {
    if(arrayOfSheep[i]) {
      num++;
    }
  }

  return num;
}

// ! 16. Basic Mathematical Operations

// * Your task is to create a function that does four basic mathematical operations.
// * The function should take three arguments - operation(string/char), value1(number),
// * value2(number). The function should return result of numbers after applying the 
// * chosen operation.

// * ('+', 4, 7) --> 11
// * ('-', 15, 18) --> -3
// * ('*', 5, 5) --> 25

function basicOp(operation, value1, value2) {
  let result;
  
  if (operation === "+") {
    result = value1 + value2;
  } else if (operation === "-") {
    result = value1 - value2;
  } else if (operation === "*") {
    result =  value1 * value2;
  } else if (operation === "/") {
    result = value1 / value2;
  }
  
  return result
}

function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+': return value1 + value2;
    case '-': return value1 - value2;
    case '*': return value1 * value2;
    case '/': return value1 / value2;
    default: return 'Operation must be one of + - * /';
  }
}

function basicOp(operation, value1, value2) {
  let cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };

  return cases[operation]
}



// ====================================================================================
// ! 17. Convert a String to a Number!

// * We need a function that can transform a string into a number. What ways of achieving 
// * this do you know?

// * "1234" --> 1234
// * "605"  --> 605

function stringToNumber (str) {
  return +str.split('').join('')
}

function stringToNumber (str){
  // return Number(str);
  return parseInt(str);
}


// ====================================================================================

// ! 18. Century From Year

// * The first century spans from the year 1 up to and including the year 100, the 
// * second century - from the year 101 up to and including the year 200, etc.
// * Given a year, return the century it is in.

// * Examples: 1705 --> 18; 1900 --> 19; 1601 --> 17; 2742 --> 28

const century = year => Math.ceil(year / 100)

// ====================================================================================

// ! 19. Abbreviate a Two Word Name

// * Write a function to convert a name into initials. This kata strictly takes two words
// * with one space in between them. The output should be two capital letters with a dot 
// * separating them.

// * Examples: Sam Harris => S.H; patrick feeney => P.F

function abbrevName(name){
  let firstName = name.split(' ')[0][0].toUpperCase()
  let secondName = name.split(' ')[1][0].toUpperCase()
  return firstName+'.'+secondName
}


// ====================================================================================

// ! 20. Keep Hydrated!

// * Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 
// * 0.5 litres of water per hour of cycling. You get given the time in hours and you need 
// * to return the number of litres Nathan will drink, rounded to the smallest value.

// * Examples: time = 3 => litres = 1; time = 6.7 => litres = 3; time = 11.8 => litres = 5

function litres(time) {
  // Math.floor(time * 0.5);
  return Math.floor(time / 2)
}
