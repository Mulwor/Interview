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


const arr2 =  ["John", "Artur", "Tommy", "Finn"];
const indexalOf = arr2.indexOf("Artur")
console.log(indexalOf)