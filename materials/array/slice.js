// ! Array.prototype.slice() -  возвращает новый массив, копируя указанный диапазон элементов 
// ! исходного массива

// * Синтаксис: slice(start, end)

const result = ['a', 'b', 'c', 'd', 'e'];
result.slice()                                     // ? ['a', 'b', 'c', 'd', 'e'];
result.slice(1)                                    // ? ['b', 'c', 'd', 'e'];
result.slice(-1)                                   // ? ['e']
result.slice(4)                                    // ? ['e']
result.slice(-4)                                   // ? ['b', 'c', 'd', 'e']
result.slice(0, 1)                                 // ? ['a']
result.slice(0, 3)                                 // ? ['a', 'b', 'c']
result.slice(1, 2)                                 // ? ['b']


// ? Получаем 1,2,3,4 элемент
const cities = [ 
  "Москва", "Санкт-Петербург", "Казань",
  "Ижевск", "Грозный", "Самара", "Петрозаводск", 
  "Агрыз", "Владивосток", "Калининград"
]
cities.slice(1, 5)