// ! 1773. Count Items Matching a Rule
// * Link: https://leetcode.com/problems/count-items-matching-a-rule/description/

// * You are given an array items, where each items[i] = [typei, colori, namei] 
// * describes the type, color, and name of the ith item. You are also given a 
// * rule represented by two strings, ruleKey and ruleValue. The ith item is said
// * to match the rule if one of the following is true:

// * ruleKey == "type" and ruleValue == typei.
// * ruleKey == "color" and ruleValue == colori.
// * ruleKey == "name" and ruleValue == namei.

// * Return the number of items that match the given rule.

// ! =========================== Первое решение =============================
var countMatches = function(items, ruleKey, ruleValue) {
  let sum = 0;
    
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === 'type' && items[i][0] === ruleValue) {
      sum++
    }

    if (ruleKey === 'color' && items[i][1] === ruleValue) {
      sum++
    }

    if (ruleKey === 'name' && items[i][2] === ruleValue) {
      sum++
    }
  }

  return sum
};

// ! =========================== Второе решение =============================
var countMatches = function (items, ruleKey, ruleValue) {
  const categoryIndex = {
    type: 0,
    color: 1,
    name: 2,
  };

  let count = 0;
  for (let index = 0; index < items.length; index++) {
    if (items[index][categoryIndex[ruleKey]] === ruleValue) {
      count++;
    }
  }

  return count;
};

// ! =========================== Третье решение =============================
var countMatches = function(items, ruleKey, ruleValue) {
  const columns = {
    'type': 0,
    'color': 1,
    'name': 2
  };

  let answer = 0;

  items.forEach(item => {
    if (item[columns[ruleKey]] == ruleValue) answer++;
  })

  return answer;
};