// ? O(n) - линейная сложность - время выполнения растет линейно с размером входных
// ? данных. Другими словами, чем больше входных данных (n), тем больше времени по-
// ? требуется для выполнения алгоритма

// !=============================== Пример №1 =====================================\

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray([1, 2, 3, 4, 5])

// !=============================== Пример №2 =====================================

function sumArray(arr) {
  let sum = 0; 
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
sumArray([1, 2, 3, 4])                

// !=============================== Пример №3 =====================================

function findMaxElement(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// !=============================== Пример №4 =====================================

function findAverageElement(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}


// !=============================== Пример №5 =====================================

var getConcatenation = function(numbers) {
  return numbers.concat(numbers)
};

// !=========================== Дополнительная информация =========================
// ? Также данную сложность имеют следующие методы в javascript:
// ? Array.prototype.shift():
// ? Array.prototype.unshift():
