// * Динамические массивы - это массивы, которые могут изменять свой размер во 
// * время выполнения программы. В JavaScript все массивы являются динамическими. 
// * Это означает, что вы можете добавлять или удалять элементы из массива без 
// * необходимости создания нового массива.

// ? Пример динамического массива в JavaScript

// ! ========================== Вставка в массив ===============================

let addInArray = [1, 2, 3];

// ? [1, 2, 3, 4] ===> O(1)
addInArray.push(4);                       

// ? [0, 1, 2, 3, 4] ===> O(n), все элементы при добавлении смещаются вправо
addInArray.unshift(0);                  

// ? [1, 2, 3, 4] ===> O(n), вставляем элемент в начало массива
let addInArray2 = [2, 3, 4];
addInArray2.splice(0, 0, 1);

// * Синтаксис Array.prototype.splice() изменяет содержимое массива, 
// * удаляя существующие элементы и/или добавляя новые.
Array.prototype.splice(startIndex, deleteCount, addInArray)


// ! ======================== Удаления из массива ==============================


let removedElement = [1, 2, 3, 4, 5];
removedElement.pop();                 // ? [1, 2, 3, 4] ===> O(1)
removedElement.shift()                // ? [2, 3, 4] ===> o(n)


let removedElementWithSplice = [1, 2, 3, 4, 5];
// ? Удаляем один элемент с индекса 2
removedElementWithSplice.splice(2, 1);              // ? [1, 2, 4, 5] ===> O(n)

// ? Удаляем три элемента с индекса 1 и добавляем элементы 'a', 'b'
removedElementWithSplice.splice(1, 3, 'a', 'b');    // ? [1, 'a', 'b', 5]

let removeWithDelete = [1, 2, 3, 4, 5];
delete removeWithDelete[2];                      // ? arr становится [1, 2, undefined, 4, 5]


// ! =========================== Чтения массива ==============================

// ? 1. По индексу ===> O(1)

let arr = [10, 20, 30, 40, 50];
console.log(arr[0]);                            // Выведет: 10
console.log(arr[2]);                            // Выведет: 30

// ? 2. C помощью цикла ===> O(n)

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// ? 3. C помощью методов массива: map, filter, reduce, find ===> O(n)
let doubled = arr.map(function(element) {
  return element * 2;
});