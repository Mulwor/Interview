// * Генератор - некая функция, которая выполняясь может в некоторый момент
// * остановится и вернуть промежуточный результат (значения), а затем обратно
// * продолжать выполняться

// * Простая функция
function commonFunction() {
  console.log("first step")
  console.log("second step")
}
commonFunction()



// * Функция генератор
function* generate() {
  console.log("first step")
  yield
  console.log("second step")
}
console.log(generate())
