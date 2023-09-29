// * Написать функцию, которая проверяет является ли строка палиндромом или нет.
// * Вернуть false / true

function palindrome(str) {
  let value = str.toLowerCase()
  return value === value.split("").reverse().join("")
}
console.log(palindrome("hello"))
console.log(palindrome("abba"))


