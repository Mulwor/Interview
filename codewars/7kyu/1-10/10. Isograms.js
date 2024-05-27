// ! Isograms

// * An isogram is a word that has no repeating letters, consecutive or non-consecutive.  
// * Implement a function that determines whether a string that contains only letters 
// * an isogram. Assume the empty string is an isogram. Ignore letter case.

// * "Dermatoglyphics" --> true
// * "aba" --> false
// * "moOse" --> false (ignore letter case)


// ! ================================ Первое решение =================================

function isIsogram(str){
  const charSet = new Set(str.toLowerCase());
  return str.length === charSet.size
}

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

// ! ================================ Второе решение =================================

function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}