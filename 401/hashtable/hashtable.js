// 'use strict';

// const hash = (key, size) => {
//   let hashedKey = 0

//   for (let i = 0; i < key.length; i++){
//     hashedKey = key.charCodeAt(i)
//   }

//   return hashedKey % size
// }

class HashTable {
  constructor (size){
    this.size = size
    this.buckets = Array(this.size)

    for (let i = 0; i < this.buckets.length; i++){
      this.buckets[i] = new Map()
    }
  }

  hash(key, size){
    let hashedKey = 0

    for (let i = 0; i < key.length; i++){
      hashedKey = key.charCodeAt(i)
    }

    return hashedKey % size
  }

  add(key,value){
    let idx = this.hash(key, this.size)
    this.buckets[idx].set(key,value)
  }
  remove(key){
    let idx = this.hash(key, this.size)
    let deleted = this.buckets[idx].get(key)
    this.buckets[idx].delete(key)
    return deleted;
  }

  get(key){
    let idx = this.hash(key, this.size)
    if (this.buckets[idx].get(key)){
      return this.buckets[idx].get(key)
    } else {
      return null
    }
  }

  contains(key){
    let idx = this.hash(key, this.size)
    if (this.buckets[idx].get(key)){
      return true
    } else {
      return false
    }
  }
}



// const hashTable = new HashTable()

// hashTable.add ('woodford', 'buddy')
// hashTable.add ('cider', 'hungry')
// hashTable.add ('emma', 'unloved')
// hashTable.add ('sage', 'damaged')

module.exports = HashTable;
// module.exports = hash;
