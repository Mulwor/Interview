
// ! 5. Descending Order

// * Your task is to make a function that can take any non-negative integer as an argument and return it
// * with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// * 42145 ===>  54421
// * 145263  ===>  654321
// * 123456789  ===> 987654321

function descendingOrder(n){
  return Number(String(n).split("").sort((a, b) => b - a).join(''))
}

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}