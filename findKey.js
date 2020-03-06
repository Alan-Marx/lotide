const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
    for (let key in object) {
      if (callback(object[key])) {
        return key;
      }
    }
    return undefined;
};

const testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual((findKey(testObj, x => x.stars === 2)), "noma");
assertEqual((findKey(testObj, x => x.stars !== 1)), "Akaleri");
assertEqual((findKey(testObj, x => x.stars === 5)), undefined);





