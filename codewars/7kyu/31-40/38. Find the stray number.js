// ! Find the stray number

// * You are given an odd-length array of integers, in which all of them are the same, 
// * except for one single number. Complete the method which accepts such an array, 
// * and returns that single different number. The input array will always be valid! 
// * (odd-length >= 3)

// ? [1, 1, 2] ==> 2
// ? [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  // Проверяет первый индекс и последний индекс, если они совпадают, то возвращает результат
  // если нет, то убирает его
  return numbers.filter((el) => numbers.indexOf(el) === numbers.lastIndexOf(el));
}

function stray(numbers) {
  return numbers.find((number) => numbers.indexOf(number) === numbers.lastIndexOf(number));
}