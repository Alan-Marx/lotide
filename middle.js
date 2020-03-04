
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

const middle = function(array) {
  let middleArray = [];
  if (array.length === 1 || array.length === 2) {
    return middleArray;
  } else if (array.length % 2 === 0) {
    middleArray.push(array[array.length / 2 - 1]);
    middleArray.push(array[array.length / 2]);
    return middleArray;
  } else {
    middleArray.push(array[Math.ceil(array.length / 2 - 1)]);
    return middleArray;
  }
}

assertArrayEqual(middle([1, 3, 5]), [5]); 
assertArrayEqual(middle([1, 3, 5, 6]), [3, 5]); 
assertArrayEqual(middle([1, 2]), []); 
assertArrayEqual(middle([1, 3, 4, 6, 7, 8, 5, 6]), [3, 5]); 
assertArrayEqual(middle([9, 7, 6, 21, 43]), [6]);

  