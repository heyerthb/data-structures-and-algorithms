'use strict';

const HashTable = require ('../hashtable.js');
const hash = require('../hashtable.js');
// const hash = require ('../hashtable.js');


describe ('Hash Table implementation', () => {

  it ('can add a key/value to your hashtable resulting in the value being in the data structure', () => {
    const test1 = new HashTable(20);
    test1.add('woodford', 'buddy')
    test1.add('cider', 'hungry')
    test1.add('sage', 'damaged')
    test1.add('emma', 'unloved')
    // console.log(test1)
    expect (test1.contains('woodford')).toBe(true)
  })

  it ('Retrieving based on a key returns the value stored', () => {
    const test1 = new HashTable(20);
    test1.add('woodford', 'buddy')
    test1.add('cider', 'hungry')
    test1.add('sage', 'damaged')
    test1.add('emma', 'unloved')
    // console.log(test1)
    expect (test1.get('woodford')).toBe('buddy')
  })

  it ('Successfully returns null for a key that does not exist in the hashtable', () => {
    const test1 = new HashTable(20);
    test1.add('woodford', 'buddy')
    test1.add('cider', 'hungry')
    test1.add('sage', 'damaged')
    test1.add('emma', 'unloved')
    // console.log(test1)
    expect (test1.get('henry')).toBe(null)
  })

  it ('Successfully handle a collision within the hashtable', () => {
    const test1 = new HashTable(1);
    test1.add('woodford', 'buddy')
    test1.add('cider', 'hungry')
    test1.add('sage', 'damaged')
    test1.add('emma', 'unloved')
    console.log(test1.buckets[0])
    expect (test1.contains('woodford')).toBe(true)
    expect (test1.contains('cider')).toBe(true)
    expect (test1.contains('sage')).toBe(true)
    expect (test1.contains('emma')).toBe(true)
  })

  it ('uccessfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const test1 = new HashTable(1);
    test1.add('woodford', 'buddy')
    test1.add('cider', 'hungry')
    test1.add('sage', 'damaged')
    test1.add('emma', 'unloved')
    console.log(test1.buckets[0])
    expect (test1.get('woodford')).toBe('buddy')
  })

  it ('Successfully hash a key to an in-range value', () => {
    const test1 = new HashTable(20);
    test1.add('woodford', 'buddy')
    test1.add('cider', 'hungry')
    test1.add('sage', 'damaged')
    test1.add('emma', 'unloved')
    // console.log(test1)
    expect (test1.hash('woodford', 20)).toBeGreaterThanOrEqual(0)
    expect (test1.hash('woodford', 20)).toBeLessThanOrEqual(20)

  })
})
