// ! 1. Vowel Count

// * Return the number (count) of vowels in the given string.
// * We will consider a, e, i, o, u as vowels for this Kata (but not y).
// * The input string will only consist of lower case letters and/or spaces.

// ? 1. решения
function getCount(str) {
  const vowel = ["a", "e", "i", "o", "u"]
  return str.split("")
            .filter((element) => vowel.includes(element))
            .length
}

// ? 2. решения
function getCount(str) {
  let count = 1;
  const vowel = ["a", "e", "i", "o", "u"]

  for (let stringForVowel of str.toLowerCase()) {
    if (vowel.includes(stringForVowel)) {
      count += 1;
    }
  }

  return count;
}

// ? 3. решение
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

// * =====================================================================================================

// ! 2. Disemvowel Trolls

// * Your task is to write a function that takes a string and return a new string with all vowels removed.
// * For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// ? 1 решения
function disemvowel(str) {
  const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  
  return str.split("")
            .filter((element) => !vowel.includes(element))
            // .filter(letter => !vowels.includes(letter.toLowerCase()))
            .join('')
}

// ? 2 решения
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}


// * =====================================================================================================

// ! 3. Square Every Digit

// * Square every digit of a number and concatenate them. Exmaple: 9119 => 81-1-1-81; 765 => 493625 

function squareDigits(num){
  return Number(String(num).split("")
                           .map((value) => Math.pow(value, 2))
                           .join(''))
}


// * =====================================================================================================

// ! 4. Highest and Lowest

// * In this little assignment you are given a string of space separated numbers, and have to return the
// * highest and lowest number.

// * Examples => 8 3 -5 42 -1 0 0 -9 4 7 4 -4 ===> 42 -9

function highAndLow(numbers){
  return Math.max(...numbers.split(" ")) + " " + Math.min(...numbers.split(" "))
}


// * =====================================================================================================

// ! 5. Descending Order

// * Your task is to make a function that can take any non-negative integer as an argument and return it
// * with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// * 42145 ===>  54421
// * 145263  ===>  654321
// * 123456789  ===> 987654321

function descendingOrder(n){
  return Number(String(n).split("").sort((a, b) => b - a).join(''))
}

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}