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