// ! Exes and Ohs

// * Check to see if a string has the same amount of 'x's and 'o's. The method must return a
// * boolean and be case insensitive. The string can contain any char. 

// * XO("ooxx") => true
// * XO("xooxx") => false
// * XO("ooxXm") => true
// * XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// * XO("zzoo") => false


// ! ================================ Первое решение =================================

function XO(str) {
  let characters = str.toLowerCase().split("");
  let x = characters.filter(char => char === 'x').length;
  let o = characters.filter(char => char === 'o').length;
  
  return x === o
}

// ! ================================ Второе решение =================================

function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

// ! ================================ Второе решение =================================

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
