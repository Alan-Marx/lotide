const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const newArray = [];
  for (let element of array) {
    newArray.push(callback(element));
  }
  return newArray;
};

const results = map(words, word => word[0]);

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
    console.log(`😇Assertion Passed: ${JSON.stringify(firstArray)} === ${JSON.stringify(secondArray)}`);
  } else {
    console.log(`😡Assertion Failed: ${JSON.stringify(firstArray)} !== ${JSON.stringify(secondArray)}`);
  }
};

assertArrayEqual(results, [ 'g', 'c', 't', 'm', 't' ]);
assertArrayEqual(results, []);
assertArrayEqual(map(words, word => word.length), [6,7,2,5,3]);
assertArrayEqual(map(words, word => word.toUpperCase()), ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
