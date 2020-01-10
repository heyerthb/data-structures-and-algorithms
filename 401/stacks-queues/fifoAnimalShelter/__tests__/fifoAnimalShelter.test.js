'use strict';

const AnimalShelter = require ('../fifo-animal-shelter.js');

describe (`FIFO animal shelter`, () => {

  it ('can successfully enqueue', () => {
    const shelter = new AnimalShelter()
    shelter.enqueue('cat')
    shelter.enqueue('dog')
    shelter.enqueue('cat')
    shelter.enqueue('dog')
    shelter.enqueue('cat')
    shelter.enqueue('dog')
    shelter.enqueue('cat')
    expect(shelter.dequeue('dog')).toBe('dog')
  })

  it ('can successfully dequeue a dog', () => {
    const shelter = new AnimalShelter()
    shelter.enqueue('cat')
    shelter.enqueue('dog')
    shelter.enqueue('cat')
    shelter.enqueue('dog')
    shelter.enqueue('cat')
    shelter.enqueue('dog')
    shelter.enqueue('cat')
    expect(shelter.dequeue('dog')).toBe('dog')
  })

  it ('can successfully dequeue a cat', () => {
    const shelter = new AnimalShelter()
    shelter.enqueue('cat')
    shelter.enqueue('dog')
    shelter.enqueue('cat')
    shelter.enqueue('dog')
    shelter.enqueue('cat')
    shelter.enqueue('dog')
    shelter.enqueue('cat')
    expect(shelter.dequeue('cat')).toBe('cat')
  })

  it ('will return null absent a preference', () => {
    const shelter = new AnimalShelter()
    shelter.enqueue('cat')
    shelter.enqueue('dog')
    shelter.enqueue('cat')
    shelter.enqueue('dog')
    shelter.enqueue('cat')
    shelter.enqueue('dog')
    shelter.enqueue('cat')
    expect(shelter.dequeue('burd')).toBe(null)
  })
})
