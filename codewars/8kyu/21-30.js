// ! 21. Convert number to reversed array of digits

// * Examples: 35231 => [1,3,2,5,3]
// * Examples: 0 => [0]

function digitize(n) {
  return Array.from(String(n), Number).reverse()
}

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

// ! 22. Is n divisible by x and y?

// * Create a function that checks if a number n is divisible by two numbers x AND y. 
// * All inputs are positive, non-zero numbers.

// * assert.strictEqual(isDivisible(3,3,4),false);
// * assert.strictEqual(isDivisible(12,3,4),true);
// * assert.strictEqual(isDivisible(8,3,4),false);
// * assert.strictEqual(isDivisible(48,3,4),true);

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

// ! 23. Opposites Attract

// * Timmy & Sarah think they are in love, but around where they live, they will only 
// * know once they pick a flower each. If one of the flowers has an even number of 
// * petals and the other has an odd number of petals it means they are in love.

// * Write a function that will take the number of petals of each flower and return 
// * true if they are in love and false if they aren't

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

// ! 24. A Needle in the Haystack

// * ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`
}

// ! 25. Beginner - Lost Without a Map

// * Given an array of integers, return a new array with each value doubled.
// * Examples: [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  let result = []
  for (let i = 0; i < x.length; i++) {
    result.push(x[i] * 2)
  }
  return result;
}

function maps(x){
  return x.map(n => n * 2);
}

// ! 26. Are You Playing Banjo?

// * Create a function which answers the question "Are you playing banjo?".
// * If your name starts with the letter "R" or lower case "r", you are playing banjo!
// * The function takes a name as its only argument, and returns one of the following strings:

function areYouPlayingBanjo(name) {
  if (name.startsWith("R") || name.startsWith("r")) {
  // if (name[0] == 'R' || name[0] == 'r')
    return `${name} plays banjo`
  } else {
    return  `${name} does not play banjo`
  }
}

// ! 27. Sum Arrays

// * Write a function that takes an array of numbers and returns the sum of the numbers. 
// * The numbers can be negative or non-integer. If the array does not contain any numbers
// * then you should return 0.

// * Input: [1, 5.2, 4, 0, -1] => Output: 9.2


// ! 28. Array plus array

// * I'm new to coding and now I want to get the sum of two arrays... Actually the sum of 
// * all their elements. I'll appreciate for your help.

// * P.S. Each array includes only integer numbers. Output is a number too.


function arrayPlusArray(arr1, arr2) {
  let result = arr1.concat(arr2).reduce((acc, next) => acc + next, 0)
  return result
}


// ! 29. Find the Difference in Age between Oldest and Youngest Family Members

// * At the annual family gathering, the family likes to find the oldest living family member’s 
// * age and the youngest family member’s age and calculate the difference between them.

// * You will be given an array of all the family members' ages, in any order. The ages will be 
// * given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a 
// * new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest
// * and oldest age].

function differenceInAges(ages){
  let minAge = Math.min(...ages);
  let maxAge = Math.max(...ages);
  let middleAge = maxAge - minAge;
  
  return [minAge, maxAge, middleAge]
}


// ! 30. Sum The Strings

// * Create a function that takes 2 integers in form of a string as an input, and outputs 
// * the sum (also as a string): "4",  "5" --> "9"; "34", "5" --> "39"; "", "" --> "0"

function sumStr(a,b) {
  return String(Number(a) + Number(b))
}