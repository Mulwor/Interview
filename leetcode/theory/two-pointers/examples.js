// ! ====================================== Пример №1 (строки) ================================================

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  
  // ? Цикл работает до тех пор порка left меньше указателя right
  while (left < right) {
    // ? Если первый индекс не равен последнему верни false
    if (s[left] !== s[right]) {           
      return false;
    }
    // ? Если символы совпадают, сдвигаем указатели ближе к центру строки
    left++;
    right--;
  }
  return true;
}

isPalindrome("racecar")
isPalindrome("hello")

// ! ====================================== Пример №2 (числа) ================================================

function isPalindromeNumber(num) {
  let s = num.toString();  
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

// ! ====================================== Пример №2 - Сумма двух чисел ====================================
function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

console.log(twoSumSorted([1, 2, 3, 4, 5], 9)); // [3, 4]
console.log(twoSumSorted([1, 2, 3, 4, 5], 10)); // null


