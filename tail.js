const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  let tailArray = array.slice(1);
  return tailArray;
};

module.exports = tail;

