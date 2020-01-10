# Challenge Summary
Returning wanted values from a queue. 

## Challenge Description
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
Implement the following methods:
- enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
- dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach 
My approach was to answer the call of the question, which was to specifically make an animal class that took only cats and dogs, and write an enqueue and dequeue method respectively. My constructor consisted of two arrays, a cat array and a dog array. When I enqueue, either a dog or a cat, would then by pushed into the corresponding array. 

Upon a dequeue, the preferred animal would be shifted out of the array, completing the FIFO principle the Animal Shelter operates on. 


