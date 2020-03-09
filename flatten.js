

//flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let i2 = 0; i2 < array[i].length; i2++) {
      flatArray.push(array[i][i2]);
      }
    } else {
      flatArray.push(array[i]);
    };
  }
  return flatArray;
};

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6, 8, 9]]));
// assertArrayEqual((flatten([1, 2, [3, 4], 5, [6, 8, 9]])), [1, 2, 3, 4, 5, 6, 8, 9]);
// assertArrayEqual((flatten([])), []);
// assertArrayEqual((flatten([[1, 2, 3], 3, 4])), [1, 2, 3]);
// //array.isArray(variableName) -> returns a boolean value.