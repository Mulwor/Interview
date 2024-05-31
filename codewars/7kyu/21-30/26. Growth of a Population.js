// ! Growth of a Population

// * Link: https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

// * In a small town the population is p0 = 1000 at the beginning of a year. The population regularly 
// * increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the
// * town. How many years does the town need to see its population greater than or equal to p = 1200 
// * inhabitants?

function nbYear(p0, percent, aug, p) {  	
  let convertPercent = percent / 100;

  for (var i = 0; p0 < p; i++) {
    // Происходит обновление позиции с помощью счетчика i++.
    // пока число не станет p
    p0 = Math.floor(p0 + p0 * convertPercent + aug)
  }

  return i
}

function nbYear(p0, percent, aug, p) {
  let count = 0;
 
  while (p0 < p) {
    p0 = Math.floor((1 + percent / 100) * p0 + aug);
    count++
  } 
  
  return count;
}

nbYear(1500, 5, 100, 5000), 15;
nbYear(1500000, 2.5, 10000, 2000000), 10;
nbYear(1500000, 0.25, 1000, 2000000), 94;