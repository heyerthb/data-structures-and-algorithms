# Challenge Summary
Learning to traverse a tree and replacing values.

## Challenge Description
Create a function that takes a tree as an argument. 
Any node value divisible by 3 replace with fizz
Any node value divisible by 5 replace with buzz
Any node value divsible by both 3 and 5 replace with fizzbuzz

## Approach & Efficiency
Efficiency 
Time = O(n), Space = O(n)

So what I tried to do was recursively traverse the tree checking each value as to whether if was divisible first by 3 and 5, then 3, then 5, using the modulo operator and changing the values accordingly. I needed a helper function because I wrote the code first in my editor and realized that the way I set it up I couldn't get things to work as one function. I also ran into some problems writing tests. However, the solution when plugged into a code editor seems to work fine. 

## Solution
/Users/matthewheyert/codefellows/data-structures-and-algorithms/401/trees/fizzbuzztree/assets/1-3-20