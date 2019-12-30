const quickSort = require('../quick-sort.js')

describe ('quickSort', () => {

  it ('Can successfully sort an array', () => {
    const test = [3,6,7,4,10,1,9,2,5,8];
    expect (quickSort(test)).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])
  })

  it ('Can successfully sort reversed sorted arrays', () => {
    const test = [20,18,12,8,5,-2];
    expect (quickSort(test)).toEqual([ -2, 5, 8, 12, 18, 20 ])
  })

  it ('Can successfully sort an array with duplicate values', () => {
    const test = [5,12,7,5,5,7];
    expect (quickSort(test)).toEqual([ 5, 5, 5, 7, 7, 12])
  })

  it ('Can successfully sort nearly sorted array', () => {
    const test = [2,3,5,7,13,11];
    expect (quickSort(test)).toEqual([2,3,5,7,11,13])
  })

  it ('Can successfully return already sorted array', () => {
    const test = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    expect (quickSort(test)).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])
  })
})
