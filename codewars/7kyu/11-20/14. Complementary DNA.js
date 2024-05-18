// *Complementary DNA

// * Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" 
// * for the development and functioning of living organisms.

// * In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function
// * receives one side of the DNA (string, except for Haskell); you need to return the other complementary 
// * side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// * "ATTGC" --> "TAACG"
// * "GTAT" --> "CATA"


// ! =================================== Первое решение ======================================
function dnaStrand(dna){
  let result = "";
  
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T"
    } else if (dna[i] === "T") {
      result += "A"
    } else if (dna[i] === "C") {
      result += "G"
    } else if (dna[i] === "G") {
      result += "C"
    }
    /*
      switch(dna[i]) {
        case 'A':
          res += "T";
          break;
        case 'T':
          res += "A";
          break;
        case 'G':
          res += "C";
          break;
        case 'C':
          res += "G";
          break;
      }

    */
  }
  
  return result;
}

// ! =================================== Второе решение ======================================
let pairs = {
  'A': 'T',
  'T': 'A',
  'C': 'G',
  'G': 'C'
};

function DNAStrand(dna){
  return dna.split('').map((v) => pairs[v]).join('');
}


