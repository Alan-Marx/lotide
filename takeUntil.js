const takeUntil = function(array, callback) {
  const slicedArray = [];
  for (let item of array) {
    if (callback(item)) {
      return slicedArray;
    } else {
      slicedArray.push(item);
    }
  }
  return slicedArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

// should produce Array [1, 2, 5, 7, 2]

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

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

assertArrayEqual(takeUntil([1, 2, 3, 4], x => x > 3), [1, 2, 3]);
assertArrayEqual(takeUntil([], x => x === '!'), []);
assertArrayEqual(takeUntil(['Abc', 'Bcd', 'Cde', 'Def'], x => x[2] === 'e'), ['Abc', 'Bcd']);