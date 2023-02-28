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