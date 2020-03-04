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

//Test Code
assertEqual(eqArrays(['Lighthouse Labs', 'Fast'], ['Bootcamp']), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
  
 