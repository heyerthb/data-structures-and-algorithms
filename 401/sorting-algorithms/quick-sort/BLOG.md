### A quickSort algorithm
```js
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
```




1. Below we are given a sample array...
```js
[8,4,23,42,16,15]
```
2. We'll set our pivot at the index [arr.length -1], so the value `15` in this case

```js
[8,4,23,42,16] 15
```
3. We will then loop through our array. All values less that our pivot # will be pushed into the [left] array...
```js
left = [8,4]  pivot = 15
```
4. ...all numbers greater than our pivot # will be pushed into the [right] array.

```js
left = [8,4]
pivot = 15
right = [23,42,16]
```

5. We'll then return an array that calls quickSort on both the left and right arrays, again dividing the array, pulling a pivot...
```js
left = [8]4
pivot = 15
right = [23,42]16
```
6. ...and sorting the array. 8 > 4 so it becomes a right array with a single index and exits the loop. The right array checks to see if its values are greater than 16. 
```js
4 , 8, 15

pivot = 16
right = [23,42]
```
7. There are still two values in the [right]array, so quickSort will again be recursively called...

```js
4 , 8, 15, 16
right = [23]42
```
8. Finally, because 23 < 42, our array is now sorted, and quickSort() will return `arr`.

9. The efficiency of quickSort is O(nlogn)