const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
  assert.strictEqual(head([1, 2, 3]), 1);
  });

  it('returns \'5\' for [\'5\']', () => {
    assert.strictEqual(head(['5']), '5');
    });

  it(`returns 'Hello' for ["Hello", "Lighthouse", "Labs"]`, () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const result = head(input);
    assert.strictEqual(result, 'Hello');
    });

  it(`returns 1 for [1]`, () => {
    const input = [1];
    const result = head(input);
    assert.strictEqual(result, 1);
    });   


  it(`returns undefined for []]`, () => {
    const input = [];
    const result = head(input);
    assert.strictEqual(result, undefined);
    });      
});



