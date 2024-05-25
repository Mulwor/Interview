// ! 2. Disemvowel Trolls

// * Your task is to write a function that takes a string and return a new string with all vowels removed.
// * For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// ! ================================ Первое решение =================================
function disemvowel(str) {
  const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  
  return str.split("")
            .filter((element) => !vowel.includes(element))
            // .filter(letter => !vowels.includes(letter.toLowerCase()))
            .join('')
}

// ! ================================ Второе решение =================================
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

