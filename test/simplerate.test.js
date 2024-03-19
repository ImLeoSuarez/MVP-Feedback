
var assert = require('assert');
var executesimplerate = require('../formtests/simplerate/simplerate');
describe('simplerate', function () {
    it('is not returning null or undefined', function () {
      assert.notEqual(executesimplerate(), null);
      assert.notEqual(executesimplerate(), undefined);
    });
});
//the MVP Feedback obj is in root html document
//MVP Feedback obj has more than an child in it
//Simple Rate script it's executed
//An local variable is generated to save data selected
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});