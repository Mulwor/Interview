https://www.codewars.com/kata/search/javascript?q=&r%5B%5D=-7&xids=completed&beta=false&order_by=popularity%20desc

// ===========================

// Shortest Word => Simple, given a string of words, return the length of the shortest word(s). String will never be empty 
// and you do not need to account for different data types.
function findShort(s) {
    return Math.min(...s.split(" ").map (s => s.length));
}

findShort("bitcoin take over the world maybe who knows perhaps")                    // 3
findShort("turns out random test cases are easier than writing out basic ones")     // 3



// ==============================



// Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc) {
    return cc.slice(-4).padStart(cc.length,'#')
}


maskify('4556364607935616')               // '############5616'
maskify('1')                              // '1'
maskify('11111')                          // '#1111'


// ====================


// Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 
// 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends){
    return friends.filter(n => n.length === 4)
}

friend(["Ryan", "Kieran", "Mark"])                                              // ["Ryan", "Mark"])
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])                               // ["Ryan"])
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])        // ["Jimm", "Cari", "aret"])
friend(["Love", "Your", "Face", "1"])                                           // ["Love", "Your", "Face"])



// ===============

function removeSmallest(numbers) {
    // Возвращает индекс минимального числа
    let indexOfMin = numbers.indexOf(Math.min(...numbers));

    // [Удаляет первый элемент по индексу минимальное значение] [возвращает оставшиеся числа]
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }


removeSmallest([1, 2, 3, 4, 5])         // [2, 3, 4, 5]
removeSmallest([5, 3, 2, 1, 4])         // [5, 3, 2, 4]
removeSmallest([2, 2, 1, 2, 1])         // [2, 2, 2, 1]
removeSmallest([])                      // []




// ===========================

// Write a function that returns both the minimum and maximum number of the given list/array.
// => https://www.codewars.com/kata/559590633066759614000063/train/javascript


function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}


// ===========================






// ===========================






// ===========================