
// WORKING TRANSLATION OF PSEUDO CODE

// function quickSort (arr, left, right){
//     if (left < right) {
//         let position = partition (arr, left, right);
//         quickSort(arr, left, position -1);
//         quickSort(arr, position + 1, right);
//     }
//     return arr
// }

// function partition (arr, left, right) {
//     let pivot = arr[right];
//     let low = left -1;

//     for (let i = left; i< right; i++){
//         if (Arr[i] <=pivot){
//             low++;
//             swap (arr, i , low);
//         }
//     }
//     swap(arr, right, low+1);
//     return low +1;
// }

// function swap (arr, i, low){
//     let temp = arr[i];
//     arr[i] = arr[low];
//     arr[low] = temp;
// }

// OR....easier version for me to understand

function quickSort(arr){
    if (arr.length <= 1) {
        return arr
    }
    var pivot = arr[arr.length -1];
    var left = [];
    var right = [];

    for (var i = 0; i< arr.length -1; i++){
        if (arr[i] < pivot){
            left.push(arr[i])
        }
        else {right.push(arr[i])}
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

module.exports = quickSort;