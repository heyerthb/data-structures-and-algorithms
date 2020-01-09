# Challenge Summary
Write a binary search implementation for a sorted array.

## Challenge Description
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.
## Approach & Efficiency
space O(n), time O(log n)

My approach was to first create variables for high, low, and mid points of the array. 
Next I would find the middle value of the array by adding the low and high points of the array and dividing by 2.
I would then iterate through the array; comparing the value against the middle value of the array. If the value == mid, I would return mid; otherwise; 
  if value > mid; low == mid + 1;
  if value < mid; high == mid - 1;
  if the value didn't exist; the function will return -1.

## Solution
/Users/matthewheyert/codefellows/data-structures-and-algorithms/401/arrayBinarySearch/assets/Blackboard 4.jpg