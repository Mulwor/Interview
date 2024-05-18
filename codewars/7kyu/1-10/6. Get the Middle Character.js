// ! Get the Middle Character

// * You are going to be given a word. Your job is to return the middle character of
// * the word. If the word's length is odd, return the middle character. If the word's 
// * length is even, return the middle 2 characters.

// ! ================================ Первое решение =================================

function getMiddle(string) {
  let middleIndex = string.length / 2;
  if (string.length % 2) {
    return string.charAt(middleIndex);
  } else {
    return string.slice(middleIndex - 1, middleIndex + 1);
  }
}

// ! ================================ Второе решение =================================

function getMiddle(string) {
  let middleIndex = string.length / 2;
  
  if (string.length % 2 == 0) {
    return string.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return string.charAt(middleIndex);
  }
}

// ! =============================== Теория ==========================================

// todo | 1. Метод charAt() возвращает указанный символ из строки.

var string = "Hello world";
return string.charAt(0);                      // H

let anyString = "Дивный новый мир";
anyString.charAt(1)
anyString.charAt(2)
anyString.charAt(3)
anyString.charAt(4)
anyString.charAt(5)
anyString.charAt(999)

// todo | 2. Метод slice - возвращает новый массив, содержащий копию части исходного массива.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
animals.slice(2)        // * ["camel", "duck", "elephant"]
animals.slice(-2)       // * ["duck", "elephant"]
animals.slice(1, 5)     // * ["bison", "camel", "duck", "elephant"]
animals.slice(2, 4)     // * ["camel", "duck"]
animals.slice(2, -1)    // * ["camel", "duck"]
animals.slice()         // * ["ant", "bison", "camel", "duck", "elephant"]
