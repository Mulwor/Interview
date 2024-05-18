// ! Shortest Word

// * Simple, given a string of words, return the length of the shortest word(s).
// * String will never be empty and you do not need to account for different data types.

findShort("bitcoin take over the world maybe who knows perhaps"),                 // * => 3;
findShort("turns out random test cases are easier than writing out basic ones")   // * => 3; 
findShort("Let's travel abroad shall we")                                         // * => 2;

// ! =================================== Первое решение ======================================

function findShort(s){
  return Math.min(...s.split(" ").map((word) => word.length));
}

// ! =================================== Второе решение ======================================

function findShort(s){
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length || 0;
}

// ! =================================== Третье решение ======================================

function findShort(s){
  let arr = s.split(' ');
  let min = arr[0].length;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < min) {
      min = arr[i].length;
    }
  }
  
  return min
}

// ! =================================== Четвертое (мое) решение ============================

function findShort(s){
  let result = s.split(" ")
                .sort((a, b) => a.length - b.length)
                .map((element) => element.length)
                .join(", ")
    
  return parseInt(result)
}