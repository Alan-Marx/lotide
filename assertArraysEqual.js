
// this function is designed to take values, and print that the assertion has passed if the
// values are identical, or print that the assertion has failed if they are not. Works best with boolean values

const eqArrays = require('./eqArrays');

const assertArrayEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`😇Assertion Passed: ${JSON.stringify(firstArray)} === ${JSON.stringify(secondArray)}`);
  } else {
    console.log(`😡Assertion Failed: ${JSON.stringify(firstArray)} !== ${JSON.stringify(secondArray)}`);
  }
};

module.exports = assertArrayEqual;

