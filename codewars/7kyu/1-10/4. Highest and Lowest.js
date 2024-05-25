// ! 4. Highest and Lowest

// * In this little assignment you are given a string of space separated numbers, and have to return the
// * highest and lowest number.

// * Examples => 8 3 -5 42 -1 0 0 -9 4 7 4 -4 ===> 42 -9

function highAndLow(numbers){
  return Math.max(...numbers.split(" ")) + " " + Math.min(...numbers.split(" "))
}
