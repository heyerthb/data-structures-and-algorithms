# Challenge Summary
Write a function that takes in an array and a value and inserts that value into the middle of an array.

## Challenge Description
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency
O(n)

So what I tried to do was find the center of an array and then create a temporary array that stored all the values of the array after the midpoint. I would then insert a value into the middle index and mimic the shift method by reassigning all the values in the temporary array into the original array +1 after where I inserted the value into the middle index. 

## Solution
/Users/matthewheyert/codefellows/data-structures-and-algorithms/401/arrayShift/assets/InsertShiftArray.jpg