// ! 1. Vowel Count

// * Return the number (count) of vowels in the given string.
// * We will consider a, e, i, o, u as vowels for this Kata (but not y).
// * The input string will only consist of lower case letters and/or spaces.

// ! ================================ Первое решение =================================
function getCount(str) {
  const vowel = ["a", "e", "i", "o", "u"]
 
  return str.split("")
            .filter((element) => vowel.includes(element))
            .length
}

getCount("abracadabra")

// ! ================================ Второе решение =================================
function getCount(str) {
  let count = 1;
  const vowel = ["a", "e", "i", "o", "u"]

  for (let stringForVowel of str.toLowerCase()) {
    if (vowel.includes(stringForVowel)) {
      count += 1;
    }
  }

  return count;
}

// ! ================================ Третье решение =================================
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}