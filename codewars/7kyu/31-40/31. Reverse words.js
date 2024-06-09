// ! Reverse words 

// * Complete the function that accepts a string parameter, and reverses 
// * each word in the string. All spaces in the string should be retained.

// * "This is an example!" ==> "sihT si na !elpmaxe"
// * "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ")
}

function reverseWords(str) {
  return str.split(' ').map((str) => str.split('').reverse().join('') ).join(' ');
}

function reverseWords(str) {
  let reversedWord = '';
  let reversedStr = '';
  
  for (let i = 0; i < str.length; i++) {
    // Если текущий символ не пробел, то он просто добавляет его в строку, 
    if (str[i] !== ' ') {
      reversedWord = str[i] + reversedWord;
    } else {
      // а если пробел, то перевернутой слово добавляется с пробелом
      reversedStr += reversedWord + ' ';
      reversedWord = '';
    }
  }
 
  return reversedStr + reversedWord;
}