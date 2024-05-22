// ! Categorize New Member

// * Input will consist of a list of pairs. Each pair contains information for a single potential member. 
// * Information consists of an integer for the person's age and an integer for the person's handicap.

// *  stating whether the respective member is to be placed in the senior or open category. Example

// * input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// * output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// ! =================================== Первое решение ======================================

function openOrSenior(data){
  let result = [];
  for (let i = 0; i < data.length; i++ ) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  }
  return result;
}

// ! =================================== Второе решение ======================================

function openOrSenior(data){
  return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open');
}
