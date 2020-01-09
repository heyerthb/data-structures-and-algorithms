# Challenge Summary
Create a merge list implementation

## Challenge Description
- Provide a visual step through for each of the sample arrays based on the provided pseudo code
- Convert the pseudo-code into working code in your language
- Present a complete set of working tests
## Approach & Efficiency
Efficiency is O(nlogn)

This is a divide and conquer kind of sorting method where we find the middle of the array and use that midpoint to break the array into sub arrays recursively at each middle point. When we break each array down into a single value, we build the array back up again comparing each single value against the next until the array is rebuilt and sorted. 

## Solution
/Users/matthewheyert/codefellows/data-structures-and-algorithms/401/sorting-algorithms/merge-sort/assets/Merge-sort.jpg