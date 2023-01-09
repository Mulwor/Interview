



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