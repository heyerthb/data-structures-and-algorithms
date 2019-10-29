'use strict';

// let arr = [1,2,3,4,5];

// let arr = [-5, -3, 0, 2, 4, 6, 8];

// let arr = ['a', 'b', 'c', 'd'];

let arr = ['a', 3, -8, {}, null];

function reverseArray(arr){
  var newArray = [;
    for (let i = arr.length - 1; i >= 0; i--){
      newArray.push(arr[i]);
    }
    return newArray;
}

reverseArray(arr);

