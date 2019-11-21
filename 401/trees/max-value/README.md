# Challenge Summary
Travere a numerical binary tree, returning the max single value that is stored in the tree. 

## Challenge Description
Write an instance method called find-maximum-value. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Approach & Efficiency
What I want to do is a breadth first traveral, keeping only the max value in a queue and enqueing and dequeing the queue when comparing each value whie traversing the tree. The idea is that the only value in the queue following the traversal will be the max value. If there is more than one node with a mex value, it should only return the one value. 

## Solution
/Users/matthewheyert/codefellows/data-structures-and-algorithms/401/trees/max-value/11-8-19, 7:03 AM Office Lens.jpeg