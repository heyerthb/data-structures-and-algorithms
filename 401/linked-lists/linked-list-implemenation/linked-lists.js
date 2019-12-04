class Node {
  constructor(value){
    this.value = value
    this.next = null;

  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
  }
  // add to end of list
  append(value){
    // if list is empty
    if (!this.head){
      this.head = new Node(value)
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node (value)
    }
    this.size++
  }

  insert (value){
    if (!this.head){
      this.head = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      this.head.next = oldHead;
    }
    return this.head
  }

  // search function
  includes(value){
    let node = this.head;
    while(node){
      if(node.value === value){
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  }


  toString (){
    let current = this.head;
    let llString = '';

    while (current){
      llString += `${current.value}`
      current = current.next;
    }
    return llString;
  }

}

module.exports = LinkedList;