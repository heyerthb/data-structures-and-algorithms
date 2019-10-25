// sample list ->[1]-[3]-[7]-
// input :1 output: 3

// input : 0; output: 7;


class Node{
  constructor(value){
    this.value - value;
    this.next = null;
  }
}

  class LinkedList{
    constructor(){
      this.head = null;
    }
  }

  KthFromEnd(positionFromEnd){
    let current = this.head;
    let length = 0;

    while(current){
      length++;
      current = current.next;
    }
    // compare length to position from end
    if(positionFromEnd >= length){
      return 'Exception found: position is toooo big'
    }
    for(let i = 1; i < length - positionFromEnd; i++){
      current = current.next;
    }
    return current.value;

  }
