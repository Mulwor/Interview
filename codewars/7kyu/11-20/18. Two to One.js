// ! Two to One

// * Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible
// * the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// * a = "xyaabbbccccdefww", b = "xxxxyyyyabklmopq" ====> longest(a, b) -> "abcdefklmopqwxy
// * a = "abcdefghijklmnopqrstuvwxyz" ====> longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


// ! =================================== Первое решение ======================================

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}


// ! =================================== Второе решение ======================================
function longest(s1, s2) {
  let str = new Set([...s1, ...s2]);
  return [...str].sort().join('');
}


// ! =================================== Мое решение ======================================

function longest(s1, s2) {
  let first = s1.split("").sort().join("") + s2.split("").sort().join("")
  let second = first.split("").sort()
  
  const uniqueChars = [...new Set(second)];
  return uniqueChars.join("")
}

function longest(s1, s2) {
  const uniqueChars = new Set(s1 + s2);
  return [...uniqueChars].sort().join('');
}