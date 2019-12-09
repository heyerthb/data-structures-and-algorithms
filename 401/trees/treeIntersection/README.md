# Challenge Summary

Write a function that takes in two trees and returns their shared values.

## Approach & Efficiency

I don't like the efficiency on this one, I believe it's O($n^2$). I figured I needed to traverse the trees and record thier values. I opted to use a pre-order traversal and push the values into a single temporary array. From there I Thought I would use nested for loops, comparing values of [i] and [j] and pushing matching values into a final array. 

#### Edit
Then I thought, "wait, trees are graphs, I need to view this as one graph". Now I need to figure out, how the hell do I write that. 

## Solution

/Users/matthewheyert/codefellows/data-structures-and-algorithms/401/trees/treeIntersection/assets/12-9-19, 7:20 AM Office Lens.jpeg
