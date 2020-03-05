
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

const compKeys = function(key, keys) {
  for (let i = 0; i < keys.length; i++) {
    if (key === keys[i]) {
      return true;
    }
  }
  return false;
}

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false; //this is working properly
  }
  for (let index in object1Keys) { // a for...in loop on an array will iterate over an index value, not the value of each index!
    const key = object1Keys[index];
    if (!compKeys(key, object2Keys)) {
      return false;//working fine, in this case not taking place
    }
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(firstObject, secondObject) {
  const inspect = require('util').inspect;
  if (eqObjects(firstObject, secondObject)) {
    console.log(`😇Assertion Passed: ${inspect(firstObject)} === ${inspect(secondObject)}`);
  } else {
    console.log(`😡Assertion Failed: ${JSON.stringify(firstObject)} !== ${JSON.stringify(secondObject)}`);
  }
};

assertObjectsEqual({a: 34, d: [1, 2, 3]}, {d: [1, 2, 3], a: 34});
assertObjectsEqual({}, {});