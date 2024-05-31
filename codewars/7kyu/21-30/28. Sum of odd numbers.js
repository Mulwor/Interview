// ! Sum of odd numbers

// * Given the triangle of consecutive odd numbers.  Calculate the sum of the numbers in
// * the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// * 1 ===> 1
// * 2 ===> 3 + 5 = 8
// * 3 ===> 7 + 9 + 11 = 27

function rowSumOddNumbers(n) {
  // Math.pow() - возводит в степень: 2 * 2 * 2 => 4 * 2 => 8; 3 * 3 * 3 => 27
  return Math.pow(n, 3);
  // n ** 3;
}

function rowSumOddNumbers(n) {
	let first = ( n * (n-1) ) + 1;
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += first;
    first += 2;
  }
  return result;
}