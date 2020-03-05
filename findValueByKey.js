const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😇Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

const bestPoets = {
  Chilean: "Neruda",
  Spanish: "Machado",
  American: "Whitman",
  Persian: "Rumi"
};

assertEqual(findKeyByValue(bestPoets, "Whitman"), "American");
assertEqual(findKeyByValue(bestPoets, "Eliot"), undefined);
assertEqual(findKeyByValue(bestPoets, "Machado"), 'Spanish');

console.log(findKeyByValue({ a: 2, b: 9, c: 87, d: 9}, 2));