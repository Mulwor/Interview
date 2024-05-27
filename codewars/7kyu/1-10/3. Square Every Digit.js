// ! 3. Square Every Digit

// * Square every digit of a number and concatenate them. Example: 9119 => 81-1-1-81; 765 => 493625 

function squareDigits(num){
  return Number(String(num).split("")
                           .map((value) => Math.pow(value, 2))
                           .join(''))
}

