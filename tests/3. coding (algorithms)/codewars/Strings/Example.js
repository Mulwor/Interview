// Необходимо из 366 задач решить 66-70
// https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-7&tags=Strings&xids=played&beta=false&order_by=popularity%20desc

// Задача с анаграммой => Завершите возвращаемую функцию, trueесли два заданных аргумента являются анаграммами друг друга; вернуть falseиначе.

var isAnagram = function (test, original) {
  let taskTest = test.toLowerCase().split('').sort().join();
  let originTest = original.toLowerCase().split('').sort().join();

  return taskTest === originTest;
};

isAnagram('foefet', 'toffee'), // true,
isAnagram('Twoo', 'WooT'); // true
isAnagram('dumble', 'bumble'); // false
isAnagram('ound', 'round'); // false





// Find the capitals => Напишите функцию, которая принимает одну строку (word) в качестве аргумента. Функция должна 
// возвращать упорядоченный список, содержащий индексы всех заглавных букв в строке.
var capitals = function (word) {
  let caps = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      caps.push(i);
    }
  }
  return caps;
};




// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown
// below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
function capitalize(s){
  let first =  s.split('').map((word, index) => (index % 2) == 0 ?  word.toUpperCase() : word.toLowerCase() ).join("")
  let second = s.split('').map((word, index) => (index % 2) != 0 ?  word.toUpperCase() : word.toLowerCase() ).join("")
  
  return [first, second]
};
                         
capitalize("abcdef")                            // ['AbCdEf', 'aBcDeF']
capitalize("codewars")                          // ['CoDeWaRs', 'cOdEwArS']
capitalize("abracadabra")                       // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
capitalize("codewarriors")                      // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']