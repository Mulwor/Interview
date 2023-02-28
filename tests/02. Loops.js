// Циклы и инструкции: 

// ! switch(), case .., break,
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}


// ====================================================================

// ! Цикл: for let, пример №1 
for (let i = 0; i < 3; i++) {
    // 0, 1, 2
    alert(i)
}

// Пример №2
for (let i = 1; i < 5; i++) {
  // 1, 2, 4
  if (i === 3) continue
  console.log(i)
}


// ====================================================================

// ! Цикл for ... in - для перебора объектов
// Пример №1 
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  alert( key );          // name, age, isAdmin
  alert( user[key] );    // John, 30, true
}

// Пример №2
const person = {
  name: "John",
  age: 30
}

for (const item in person) {
  // name, age
  console.log(item)
}



// ! Цикл for ... of - для перебор массиво 
let iterable = [10, 20, 30];

for (let value of iterable) {
  // 10, 20, 30
  console.log(value);      
}



// ! Разница между for...in и for...of
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]                                 

for (let item in myLifeSummedUp) {
  // 0, 1, 2, 3
  console.log(item)
}

for (let item of myLifeSummedUp) {
  // ["☕", "💻", "🍷", "🍫"]
  console.log(item)
}





// ! Цикл while...do while
let i = 3;
while (i) {       // когда i будет равно 0, условие станет ложным, и цикл остановится
  alert( i );
  i--;
}

let i1 = 0;
do {
  alert( i1 );
  i++;
} while (i1 < 3);





// Уровень средний
function divisors(integer) {
    let emptyArray = []
    
    for (let i = 2; i < integer; i++){
      if(integer % i == 0) {
        emptyArray.push(i)
      }
    }
    
    return res = emptyArray.length !== 0 ? emptyArray : `${integer} is prime`
};
  


divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"


// Уровень сложный
function SeriesSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
}

SeriesSum(1)      // "1.00"
SeriesSum(2)      // "1.25"
SeriesSum(3)      // "1.39"
SeriesSum(4)      // "1.49"