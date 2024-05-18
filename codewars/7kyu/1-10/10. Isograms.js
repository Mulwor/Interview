// ! Isograms

// * An isogram is a word that has no repeating letters, consecutive or non-consecutive.  
// * Implement a function that determines whether a string that contains only letters 
// * an isogram. Assume the empty string is an isogram. Ignore letter case.

// * "Dermatoglyphics" --> true
// * "aba" --> false
// * "moOse" --> false (ignore letter case)


// ! ================================ Первое решение =================================

function isIsogram(str){
  const charSet = new Set(str.toLowerCase());
  return str.length === charSet.size
}

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

// ! ================================ Второе решение =================================

function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}

// ! =============================== Теория ==========================================

// todo | New set - создает новый объект, в котором хранятся только уникальные ключи
// todo | У него есть следующие методы

// * .add(value) - добавляет новый элемент с заданным значением в конец объекта Set.
// * .delete(value) - удаляет уникальный элемент из объекта
// * .clear() - удаляет все объекты из элемента
// * .has(value) - проверяет наличие уникального ключа и возвращает true если оно есть
// * false - если его нет
// * set.size – возвращает количество (уникальных) элементов в объекте Set


const result = new Set();
result.add(1);                     // Set(1) => {1}
result.add(5);                     // Set(2) => {1, 2}
result.add("текст");               // Set(3) => {1, 2, 'текст'}
result.add("удалить");             // Set(3) => {1, 2, 'удалить'}
result.delete('удалить')           // true
result.has('удалить')              // false
result.size                        // 3
result.clear()                     // undefined
result.size;                       // 0




// ! ======================== Задачи ============================


// https://www.codewars.com/kata/5390bac347d09b7da40006f6
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9