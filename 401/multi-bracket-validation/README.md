# Challenge Summary
Trying to return a boolean for whether or not different types of brackets in a string are paired.

## Challenge Description
Write a function that should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. 

## Approach & Efficiency
O(n)
My approach was to first use a split method on the string to create an array.
Then I wanted to use a regex pattern to filter out any values that weren't brackets.
I then set a counter (6 total) for the different types of brackets I may encounter. 
As I looped through my array of brackets, I would increment the appropriate counter per bracket type.
I would then compare mirrored pairs of counters:
if all the counter pairs matched or there were no brackets, I would return (true)
otherwise i would return (false)

## Solution
/Users/matthewheyert/codefellows/data-structures-and-algorithms/401/multi-bracket-validation/assets/10-30-19, 9:18 PM Office Lens.jpeg