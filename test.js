'use strict';

const
  assert              = require('assert')
, deepEqual           = require('.')
;

const obj = {here: {is: "an"}, object: 2};

describe('test deepEqual', () => {
  it('obj is the same as obj', () => {
    assert.ok(deepEqual(obj, obj));
  });

  it('two different object are not the same', () => {
    assert.ok(!deepEqual(obj, {here: 1, object: 2}));
    assert.ok(!deepEqual({here:1}, {here:2}));
    assert.equal(deepEqual(obj, {here: 1, object: 2}), false);
  });

  it('obj is obj', () => {
    assert.ok(deepEqual(obj, {here: {is: "an"}, object: 2}));
  });

  it('some simple tests', () => {
    assert.ok(deepEqual(true, true));
    assert.ok(deepEqual(false, false));
    assert.equal(deepEqual('a', 'b'), false);
    assert.ok(deepEqual(1, 1));
    assert.equal(deepEqual(1, 22), false);
    assert.ok(deepEqual(null, null));
    assert.ok({}, {});
    assert.ok([], []);
    assert.ok([33], [33]);
  });
});
