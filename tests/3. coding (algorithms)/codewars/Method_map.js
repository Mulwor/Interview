// Write a function which takes a list of strings and returns each line prepended by the correct number. The 
// numbering starts at 1. The format is n: string. Notice the colon and space in between.


var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

const number = array => array.map((arr, index) => `${index + 1}: ${arr}`);

number([])                                      // => [];
number(["a", "b", "c"])                         // => ["1: a", "2: b", "3: c"]               





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





// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, 
// handicaps, range from -2 to +26; the better the player the lower the handicap.


function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])             // ['Open', 'Senior', 'Open', 'Senior']
openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])                // ['Open', 'Open', 'Open', 'Open']
openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])              // ['Senior', 'Open', 'Open', 'Open']




// Первый элемент - сколько сидят, второй элемента - сколько выходят. Посчитать сколько
// в конечном итоге осталось человек в автобусе. 
var number = function(busStops){
    return busStops.reduce((rem, [on, off]) => rem + on - off, 0)
    // rem + on => 18; rem - off => -13; rem + on - off => 15
}

// Мое решение - не лучшее 
var number = function(busStops){
    let whoSit = busStops.map(([sit, exit]) => (sit)).reduce((a,b) => a + b)
    let whoLeft = busStops.map(([sit, exit]) => (exit)).reduce((a,b) => a + b)
    return whoSit - whoLeft
}
number([[10,0],[3,5],[5,8]])                        // 5
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])    // 17
number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])      // 21
number([[0,0]])                                     // 0