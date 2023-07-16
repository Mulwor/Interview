// * Напиши все возможные варианты заклонить к себе объект
const person = {
  name: "Valera",
  surname: "Valerovich"
}
// ? Через спред оператор {...person}
// ? Через метод объекта: Object.assign()
// ? Через JSON.parse(JSON.stringify())
  
  

// * Будет ли переменная b одинакого переменной, то есть будут ли они визуально они одинаковые или разные
// * Что выведется в консоль и как сделать так чтобы сработало сортировка
const a = [10, 8, 2, 1, 5, 7, 4, 9]
const b = a.sort()
// ? Sort мутирует (меняет исходный) массив: [1, 10, 2, 4, 5, 7, 8, 9] 
a.sort((firstIndex, lastIndex) => (firstIndex - lastIndex))    //? [1, 2, 4, 5, 7, 8, 9, 10]



// * У нас есть массив чисел, необходимо посчитать их однако число должно начинаться не с 0, а с -1
const digits = [1, 2, 3, 4]          
// ? Через reduce 
digits.reduce((a, b) => a + b, -1)
// ? Через цикл
function sum (digits) {
  let value = -1;
  for (let i = 0; i < digits.length; i++) {
    value += digits[i]
  }
  return value
}
sum([1,2,3,4])


// * У нас есть массив повторяющих значений, как из него убрать все повторяющиеся значения. То есть сделать
// * из повторяющихся значений не повторяющие.
const names = ['Vasya', 'Masha', 'Vasha'];
// ? - Через структуру данных Set



// * Что выведется в консоль
const year = Date.getYear();    // ? 2023
const month = Date.getMonth();  // ? 8 (Месяц начинается с нуля)
const day = Date.getDay();      // ? 15

console.log (year, month, day)