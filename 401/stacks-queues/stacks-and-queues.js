class Node {
  constructor(value, next){
    this.value = value,
    this.next = next
  }
}

let stack = []

class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    // create a new instance of a node, that takes in a value, 
    // and a reference to the next node which will be the top of the stack `this.top`
    let newNode = new Node(value, this.top)
    // then we move `this.top` to the newly created node
    this.top = newNode
  }

  pop(){
    let value = null;
    if(this.top){
      value = this.top.value
      this.top = this.top.next
    }
    return value
  }
  
  peek(){
    return !this.top ? null : this.top.value
  }

  isEmpty(){
    if (this.top){
      return false
    } else {
      return true
    }
  }
}

let queue = []

class Queue{
  constructor(value, next){
    this.front = null;
    this.back = null
   
  }
  isEmpty(){
   if (!this.front){
     return true
   } else {
     return false
   }
  }

  enqueue(value){
    // create a new node  with value
    let node = new Node(value)
    if (this.isEmpty()){
          // if empty point front and back to new node
      this.front = this.back = node
    } else {
          //if not empty, push node to back of queue by pointing last node to new node
      this.back.next = node;
          // move back pointer to new node
      this.back = node;
    }  
  }

  dequeue(){
    // pointr to front of the queue
    let node = this.front;
    if (!this.front){
      return null
    }
    this.front = node.next;
     //check if front is null past end of queue
     if (!this.front){
        this.back = this.front;
     }      
    return node.value
  }

  peek(){
    return !this.front ? null : this.front.value;
  }
}

module.exports = {Node, Stack, Queue}


