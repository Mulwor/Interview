// ! Mumbling

// * This time no story, no theory. The examples below show you how to write 
// * function accum:

// * accum("abcd") -> "A-Bb-Ccc-Dddd"
// * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// * accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  return s.split('')
          .map((currentValue, index) => currentValue.toUpperCase() + currentValue.toLowerCase().repeat(index))
          .join('-')
}