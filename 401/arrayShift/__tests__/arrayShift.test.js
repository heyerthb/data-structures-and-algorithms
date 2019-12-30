'use strict';

const insertShiftArray = require('../arrayShift.js');


describe ('testing insertShirtArray', () => {

  it ('inserts a value into the middle of an array', () => {
    const arr = [2,4,6,8]
    const test = insertShiftArray(arr, 5);
    const result = [2,4,5,6,8]
    // console.log(arr);
    expect (test).toMatchObject(result);
  })

  it ('inserts a value into the middle of an array', () => {
    const arr = [4,8,15,23,42]
    const test = insertShiftArray(arr, 16);
    const result = [4,8,15,16,23,42]
    // console.log(arr);
    expect (test).toMatchObject(result);
  })
})

