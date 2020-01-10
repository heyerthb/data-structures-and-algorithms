'use strict';

class AnimalShelter{
  constructor(){
    this.dogs = [],
    this.cats = []
    // this.flag = 0
  }
  enqueue(animal){
    if (animal === 'cat'){
      this.cats.push(animal)
    }
    if (animal === 'dog'){
      this.dogs.push(animal)
    }
  }
  dequeue(pref){
    if (pref === 'cat'){
      let meow = this.cats.shift('cat')
      return meow
    }
    if (pref === 'dog'){
      let woof = this.dogs.shift('dog')
      return woof

    }
    if (pref !== 'cat' || 'dog'){
      return null
    }
  }}

const shelter = new AnimalShelter()
shelter.enqueue('cat')
shelter.enqueue('dog')
shelter.enqueue('cat')
shelter.enqueue('dog')
shelter.enqueue('cat')
shelter.enqueue('dog')
shelter.enqueue('cat')





module.exports = AnimalShelter;


















