https://www.codewars.com/kata/search/javascript?q=&r%5B%5D=-7&xids=completed&beta=false&order_by=popularity%20desc


// Shortest Word => Simple, given a string of words, return the length of the shortest word(s). String will never be empty 
// and you do not need to account for different data types.
function findShort(s) {
    return Math.min(...s.split(" ").map (s => s.length));
}

findShort("bitcoin take over the world maybe who knows perhaps")                    // 3
findShort("turns out random test cases are easier than writing out basic ones")     // 3




// Coplementary DNA => In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function 
// receives one side of the DNA; you need to return the other complementary side. DNA strand is never empty or there is 
// no DNA at all

let pairs = { 
    'A': 'T', 
    'T': 'A', 
    'C': 'G', 
    'G': 'C' 
};

function DNAStrand(dna){
  return dna.split('').map(function(v){ 
    return pairs[v] 
  }).join('');
}

DNAStrand("AAAA")            // "TTTT","String AAAA is"
DNAStrand("ATTGC")           // "TAACG","String ATTGC is"
DNAStrand("GTAT")            // "CATA","String GTAT is"






// Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc) {
    return cc.slice(-4).padStart(cc.length,'#')
}


maskify('4556364607935616')               // '############5616'
maskify('1')                              // '1'
maskify('11111')                          // '#1111'




// Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 
// 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends){
    return friends.filter(n => n.length === 4)
}

friend(["Ryan", "Kieran", "Mark"])                                              // ["Ryan", "Mark"])
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])                               // ["Ryan"])
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])        // ["Jimm", "Cari", "aret"])
friend(["Love", "Your", "Face", "1"])                                           // ["Love", "Your", "Face"])






// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps 
// range from -2 to +26; the better the player the lower the handicap.


function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])             // ['Open', 'Senior', 'Open', 'Senior']
openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])                // ['Open', 'Open', 'Open', 'Open']
openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])              // ['Senior', 'Open', 'Open', 'Open']