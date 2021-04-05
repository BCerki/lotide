const tail = require('../tail.js');
const assert = require('chai').assert;





describe('#tail', () => {
  it('should give array length of 2', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words).length, 2);
  });
  it('should give an array length of 0', () => {
    const empty = [];
    
    assert.strictEqual(tail(empty).length,0);

  });
  it('should give equal arrays', () => {
    const words1 = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words1), [ "Lighthouse", "Labs"]);
  });
  it('should give equal arrays', () => {
    const empty1 = [];
    
    assert.deepEqual(tail(empty1),[]);

  });


})