
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertArrayEqual(['Lighthouse Labs', 'Fast'], ['Bootcamp']);
assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]);
  