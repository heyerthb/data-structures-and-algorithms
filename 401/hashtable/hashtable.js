'use strict';

const hash = (key, size) => {
  let hashedKey = 0;
  for (let i=0; i< key.length; i++){
    hashedKey = key.charCodeAt(i)
  }
  return hashedKey % size
}
class HashTable{
  constructor(){
    this.size = 20,
    this.buckets = Array(this.size)
    for (let i = 0; i < this.buckets.length; i++){
      this.buckets[i] = new Map();
    }
  }
  add (key, value){
    let idx = hash(key, this.size);
    this.buckets[idx].set(key.value)
  }
  get (key){
    let idx = hash(key, this.size);
    return this.buckets[idx].get(key);
  }
}


const hashTable = new HashTable

hashTable.insert ('woodford', 'buddy')
hashTable.insert ('cider', 'hungry')
hashTable.insert ('emma', 'unloved')
hashTable.insert ('sage', 'damaged')
