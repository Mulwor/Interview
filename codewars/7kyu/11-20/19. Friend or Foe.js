// ! Friend or Foe?

// Make a program that filters a list of strings and returns a list with only your 
// friends name in it. If a name has exactly 4 letters in it, you can be sure that 
// it has to be a friend of yours! Otherwise, you can be sure he's not...

// ["Ryan", "Kieran", "Jason", "Yous"] ====>  ["Ryan", "Yous"]

// ! =================================== Первое решение ======================================

function friend(friends){
  return friends.filter((element) => element.length === 4)
}

// ! =================================== Второе решение ======================================

function friend(friends){
  const result = [];
  
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      result.push(friends[i])
    }
  }
  
  return result
}