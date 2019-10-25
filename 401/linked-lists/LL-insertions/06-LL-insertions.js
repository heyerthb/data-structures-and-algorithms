// we traverse ll with while loops
// we want to check for current node at next.


class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.size = 0;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }


  append(value){
    let node = new Node(value);
    let current;
    // an initial linked list has a null head,
    // this adds our new node to this.head.

    if(!this.head){
      this.head = node;
      this.size++;
      return;
    }
    // if head is not null, then we have at least one node;
    // set the current to the head
    // this will be temporary, only acting as a pointer
    current = this.head;

    // start a while loop

    // start the loop with current.next...
    // in here we can definitely say these is an existing node
    while(current.next!==null){
      current = current.next; //this line will have us traversing the list
    }
    current.next = node;
    this.size++;
  }
  insertBefore(value, newValue){
    // is there a current.next?
    // does current.next = a given value?
    // then what?
    // catch when head is our target value
    const node = new Node(newValue);

    if (current.value === value){
      node.next = current;
      this.head = node;
      this.length++;
      return;
    }
    // track current
    let current = this.head;
    // track previous
    let previous = this.head;

    current = current.next;
    // lists can only go forward
    while(current !==null){
      if (current.value ===value){
        previous.next = node;
        node.next = current;
        this.length++;
        break;
      }
      previous = previous.next;
      current = current.next;
    }

  }
}

const ll = new LinkedList();

ll.append(1);
ll.insertBefore(1,0)
console.log(JSON.stringify(ll));


