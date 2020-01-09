'use strict';

const binarytest = require('../array-binary-search.js');

describe ('binary search on an array', () => {

  it ('can return the index of a given value if it exists in the array', () => {
    const arr = [4,8,15,16,23,42];
    const test = binarytest(arr, 15);
    expect(test).toBe(2);
  })

  it ('will return -1 if the value does not exist in the array', () => {
    const arr = [11,22,33,44,55,66,77];
    const test = binarytest(arr, 90);
    expect(test).toBe(-1);
  })
})
