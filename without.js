// const eqArrays = function(firstArray, secondArray) {
//   if (firstArray.length !== secondArray.length) {
//     return false;
//   } else {
//     for (let i = 0; i < firstArray.length; i++) {
//       if (firstArray[i] !== secondArray[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

// const assertArrayEqual = function(firstArray, secondArray) {
//   if (eqArrays(firstArray, secondArray)) {
//     console.log(`😇Assertion Passed: ${firstArray} === ${secondArray}`);
//   } else {
//     console.log(`😡Assertion Failed: ${JSON.stringify(firstArray)} !== ${JSON.stringify(secondArray)}`);
//   }
// };

const checkSingleElement = function(element, array) {
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) {
      return false;
    }
  } 
  return true;
};

const without = function(array, removeArray) {
  let reducedArray = [];
  for (let index = 0; index < array.length; index++) {
    if (checkSingleElement(array[index], removeArray)) {
      reducedArray.push(array[index]);
    }
  }
  return reducedArray;
};

module.exports = without;

// assertArrayEqual((without([], [1, 2, 3])), []);
// assertArrayEqual((without([4, 5, 6, 1], [5, 1])), [4]);


// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArrayEqual(words, ["hello", "world", "lighthouse"]);