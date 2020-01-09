'use strict';

function repeatedWord(string){
  // this function is a helper function that runs a split method
  let parsedString = split(string);
  // im going to use a nested loop here. basically, the idea is to keep a pointer on one word and check that word against every other word in a given string before incrementing the pointer to the next word... then rinse and repeat. 
  for (let i = 0; i < parsedString.length; i++){
    for (let j = 0; j < parsedString.length; j++){
      // if i = j, then we'll return i;
      if (parsedString[i]===parsedString[j] && i!==j){
        return parsedString[i];
      }
    }
  }
  // if there are no matching words in the string, return the string 'no matches'
  return 'no matches'
}
// so no methods allowed, means build a function that does what a split method would do
function split(string){
  // i need to create an array of parsed words
  let parsedString = [];
  // i want to use a space as my reducer or deliminator (i don't know if either of those words is used correctly)
  let word = ' ';
  // then we need to loop through our string and push a word when we hit a space
  for (let i = 0; i < string.length; i++){
    if (string[i] === ' '){
      parsedString.push(word);
      // then we reset our word variable to be empty again
      word = '';
    } else {
      // then we populate our next word
      word +=string[i];
    }
  }
  // this last part just makes sure to add the end of the string to our parsed word array
  if (word.length > 0) {
    parsedString.push(word);
  }

  return parsedString;
}

module.exports = repeatedWord;
