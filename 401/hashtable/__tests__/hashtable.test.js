'use strict';

const HashTable = require ('../hashtable.js');
// const hash = require ('../hashtable.js');


describe ('Hash Table implementation', () => {

  it ('can add a key/value to your hashtable resulting in the value being in the data structure', () => {
    const test1 = new HashTable(10);
    test1.add('woodford', 'buddy')
    test1.add('cider', 'hungry')
    test1.add('sage', 'damaged')
    test1.add('emma', 'unloved')
    expect (test1.contains().toBe(true))
  })
})

