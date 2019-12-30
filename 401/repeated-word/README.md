# Challenge Summary

Write a function that takes in a long string and returns the first word that gets repeated in that string.

## Challenge Description
Write a function that accepts a lengthy string parameter.
Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Approach & Efficiency
We'll split the string into each word as an index and then create a nested loop checking each value against every other value. Basically when [i] === [j] we return that value.

## Solution
/Users/matthewheyert/codefellows/data-structures-and-algorithms/401/repeated-word/assets/Repeted-word.jpg
