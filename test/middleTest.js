const assertArrayEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArrayEqual(middle([1, 3, 5]), [5]); 
assertArrayEqual(middle([1, 3, 5, 6]), [3, 5]); 
assertArrayEqual(middle([1, 2]), []); 
assertArrayEqual(middle([1, 3, 4, 6, 7, 8, 5, 6]), [3, 5]); 
assertArrayEqual(middle([9, 7, 6, 21, 43]), [6]);
