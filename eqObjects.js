

const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;


// const cd = { c: "1", d: ["2", 3,] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); 



// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); 

