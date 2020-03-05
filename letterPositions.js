const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

const nestedLetters = function(sentence) {
  const emptyObj = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (!emptyObj[letter]) {
        emptyObj[letter] = [];
      }
    }
  }
  return emptyObj;
};

const letterPositions = function(sentence) {
  const indexObj = nestedLetters(sentence);
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      indexObj[sentence[i]].push(i); 
    }
  }
  return indexObj;
};

const testString = "lighthouse in the house";
console.log(letterPositions(testString)); 
const testArray = letterPositions(testString);

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArrayEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`😇Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`😡Assertion Failed: ${JSON.stringify(firstArray)} !== ${JSON.stringify(secondArray)}`);
  }
};

assertArrayEqual(testArray['h'], [3, 5, 15, 18]);
assertArrayEqual(testArray['i'], []);
  
  
