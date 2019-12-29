'use strict';

function insertShiftArray(arr, value){
  let counter = 0;
  let temp = [];
  let mid = Math.ceil((arr.length)/2);
  for (let i = mid; i < arr.length; i++){
    temp[counter] = arr[i];
    counter ++;
  }
  arr[mid] = value;
  for (let j = 0; j < temp.length; j++){
    arr[mid + 1 + j] = temp [j];
  }
  // console.log(arr);
  return(arr);
}

module.exports = insertShiftArray;
