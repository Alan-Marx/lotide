
const eqObjects = require('./eqObjects');


const compKeys = function(key, keys) {
  for (let i = 0; i < keys.length; i++) {
    if (key === keys[i]) {
      return true;
    }
  }
  return false;
}

const assertObjectsEqual = function(firstObject, secondObject) {
  const inspect = require('util').inspect;
  if (eqObjects(firstObject, secondObject)) {
    console.log(`😇Assertion Passed: ${inspect(firstObject)} === ${inspect(secondObject)}`);
  } else {
    console.log(`😡Assertion Failed: ${JSON.stringify(firstObject)} !== ${JSON.stringify(secondObject)}`);
  }
};

module.exports = assertObjectsEqual;

//assertObjectsEqual({a: 34, d: [1, 2, 3]}, {d: [1, 2, 3], a: 34});
//assertObjectsEqual({}, {});