// ! Data structure - структура данных 

// ! Set
let mySet = new Set();
mySet.add(1);                     // Set { 1 }
mySet.add(5);                     // Set { 1, 5 }
mySet.add(5);                     // Set { 1, 5 }
mySet.add("some text");           // Set { 1, 5, 'some text' }


var o = {a: 1, b: 2};
mySet.add(o);
mySet.add({a: 1, b: 2});          // переменная o связана с другим объектом, поэтому данная строка также сработает


// ! Map 
let map = new Map();
map.set("1", "str1");   
map.set(1, "num1");      
map.set(true, "bool1");  
alert(map.get(1));               // "num1"
alert(map.get("1"));             // "str1"
alert(map.size);                 // 3



// * shift - удаляет первый элемент из начала массива.
// * unshift - добавляет в начало массиво - элемент
// ! Очередь
function queqe() {
    let pokupatel = [];
    pokupatel.unshift("Igooooooor")
    pokupatel.unshift("Vallllleeeera")
    pokupatel.shift()
    console.log(pokupatel)
}


// * push - добавляет один или более элементов в конец массива и возвращает новую длину массива
// * pop - удаляет последний элемент массива, соответственно уменьтшается длина массива и возвращает
// * удаленное значения

// ! Стек
function robot() {
    let todoTaskForRobot = [];
    todoTaskForRobot.push("Убрать квартиру")
    todoTaskForRobot.push("Помыть посуду")
    todoTaskForRobot.pop();
    console.log(todoTaskForRobot)
}