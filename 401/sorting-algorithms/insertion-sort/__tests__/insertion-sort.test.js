'use strict';

const insertionSort = require ('../insertion-sort.js');

describe (`insertion sort`, () => {

  it (`can sort an array of integers`, () => {
    const arr = [8, 4, 23, 42, 16, 15];
    const test = insertionSort(arr);
    expect(test).toMatchObject([ 4, 8, 15, 16, 23, 42 ]);
  })

  it (`can sort a reverse sorted array`, () => {
    const arr = [20,18,12,8,5,-2];
    const test = insertionSort(arr);
    expect(test).toMatchObject([ -2, 5, 8, 12, 18, 20 ]);
  })

  it (`can sort an array with few uniques `, () => {
    const arr = [5,12,7,5,5,7];
    const test = insertionSort(arr);
    expect(test).toMatchObject([5,5,5,7,7,12]);
  })

  it (`can sort an array that is nearly-sorted `, () => {
    const arr = [2,3,5,7,13,11];
    const test = insertionSort(arr);
    expect(test).toMatchObject([2,3,5,7,11,13]);
  })
});

