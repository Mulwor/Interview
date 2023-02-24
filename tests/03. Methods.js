// ! String method
const str = 'test';
str.padStart(10);                                    // "      test"
str.padStart(10, '-');                               // "------test"
str.padEnd(10);                                      // "test      "
str.padEnd(10, '-');                                 // "test------"

const str1 = '  test   ';
str1.trim();                                         // "test"

const str2 = 'Hello, John';                         // 11 символов
str2.startsWith('John');                            // False
str2.startsWith('John', 7);                         // True (начиная с 7 символа начинается John)

str2.endsWith('John');                               // True
str2.endsWith('Hello', 5);                           // True
str2.endsWith('John', 11);                           // True

const str3 = 'If the dog reacted, was it really lazy?';    //! If the monkey reacted, was it really lazy?
console.log(p.replaceAll('dog', 'monkey'));


// ! Array method
// ! (slice and splice)

// ! Он принимает аргументы в виде начало индекса и конец его по которому будуться извлекаться данные. Однако стоит упомянуть,
// ! что индексы могут быть и отрицательными, а это значит, что они будут извлекаться с конца
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));              // Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));           // Expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));           // Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));             // Expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));          // Expected output: Array ["camel", "duck"]
console.log(animals.slice());               // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];            // ["angel", "clown", "drum", "mandarin", "sturgeon"]
var removed = myFish.splice(2, 0, 'drum');
var myFish1 = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];   // myFish равен ["angel", "clown", "trumpet", "sturgeon"]
var removed = myFish.splice(3, 1);
var myFish2 = ['angel', 'clown', 'trumpet', 'sturgeon'];             // myFish равен ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')


// ! Find, findIndex, indexOf
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = arr.find(el => el > 5)
console.log(found)


// ===============

const arr1 = ["John", "Artur", "Tommy", "Finn"];
const foundIndex = arr1.findIndex(el => el == "Artur")              // 1 
console.log(foundIndex)

function isWantedGuest(element, index, array) {
    const guestName = 'Лиза'
    return element === guestName
}

const partyGuests = [ 'Даня', 'Саша', 'Юля', 'Лиза', 'Егор']
const meetingGuests = [ 'Даня', 'Егор', 'Арсений' ]
  
console.log(partyGuests.findIndex(isWantedGuest))           // 3 (так как partyGuests[3] -> 'Лиза')
console.log(meetingGuests.findIndex(isWantedGuest))         // -1 (совпадений нет)

// ===============

const arr2 =  ["John", "Artur", "Tommy", "Finn"];
const indexalOf = arr2.indexOf("Artur")
console.log(indexalOf)


// ! Some, every
function isBiggerThan10(element, index, array) {
    return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);                // false
[12, 5, 8, 1, 4].some(isBiggerThan10);               // true
[4, 15, 1, 2, 0].some(isBiggerThan10);               // true

// Или
[2, 5, 8, 1, 4].some(elem => elem > 10);             // false
[12, 5, 8, 1, 4].some(elem => elem > 10);            // true


const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));                      // true


// ==============

function isBigEnough(element, index, array) {
    return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);                 // false
[12, 54, 18, 130, 44].every(isBigEnough);               // true

// Или
[12, 5, 8, 130, 44].every(elem => elem >= 10);          // false
[12, 54, 18, 130, 44].every(elem => elem >= 10);        // true



// ! .forEach(), .map()
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));        // a, b, c
array1.map(element => console.log(element))             // a, b, c

let arr4 = [1, 2, 3, 4, 5];
let result = arr4.map((elem) => elem * 2);
console.log(result);                                    // 2, 4, 6, 8, 10


// ! .includes()
[1, 2, 3].includes(2);                                  // true
[1, 2, 3].includes(4);                                  // false
[1, 2, 3].includes(3, 3);                               // false
[1, 2, 3].includes(3, -1);                              // true
[1, 2, NaN].includes(NaN);                              // true



// ! .Push(), .pop(), .shift(), .unshift()
let usePush = [1, 2, 3, 4, 5, 6, 7, 8];
let valuePush = usePush.push(1)
console.log(usePush)                        // [1, 2, 3, 4, 5, 6, 7, 8, 1]
console.log(usePush.length)                 // Новая длина: 9


let usePop = [1, 2, 3, 4, 5, 6, 7, 8];
let valuePop = usePop.pop(1)
console.log(usePop)                        // [1, 2, 3, 4, 5, 6, 7]
console.log(valuePop)                      // Было удалено число: 8
console.log(usePop.length)                 // Новая длина: 7


let useShift = [1, 2, 3, 4, 5, 6, 7, 8];
let valueShift = useShift.shift(1)
console.log(useShift)                        // [2, 3, 4, 5, 6, 7, 8]
console.log(valueShift)                      // Было удалено число 7 
console.log(useShift.length)                 // Новая длина: 7


let useUnShift = [1, 2, 3, 4, 5, 6, 7, 8];
let valueUnShift = useUnShift.unshift(1, 5)
console.log(useUnShift)                        // [1, 5, 1, 2, 3, 4, 5, 6, 7, 8, 1]
console.log(useUnShift.length)                 // Новая длина: 9



// ! .flat(), flatMap();
let flat1 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(flat1.flat(1));                          // [1, 2, 3, 4 [5, 6, [7, 8, [9, 10]]]]
console.log(flat1.flat(3))                           // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]]
console.log(flat1.flat(4))                           // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(flat1.flat(Infinity))                    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  

let array2 = [1, 2, 3, 4];
array2.map(x => [x * 2]);                           // [[2], [4], [6], [8]]
array2.flat()                                       // [2, 4, 6, 8]

array2.flatMap(x => [x * 2]);                       // [2, 4, 6, 8]

// ! Выравнивается только один уровень
array2.flatMap(x => [[x * 2]]);                     // [[2], [4], [6], [8]]