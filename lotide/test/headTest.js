// const assert.strictEqual = require('../assert.strictEqual')
// const head = require('../head.js');



const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head([5, 6, 7]), 5);

  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head([89]), 89);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head([]), undefined);
  });
});