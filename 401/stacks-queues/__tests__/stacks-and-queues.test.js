const {Node, Stack, Queue} = require ('../stacks-and-queues.js')
// let stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)

// let queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(5)




describe ('Testing stacks and queues', () => {

  it ('can successfully push onto a stack', () => {
    let test1 = new Stack()
    test1.push('peanuts')
    expect(test1.top.value).toEqual('peanuts')
  })

  it ('can successfully push multiple values onto a stack', () => {
    let test2 = new Stack()
    test2.push('peanuts')
    test2.push('apples')
    test2.push('babies')
    expect(test2.top.value).toEqual('babies')
    expect(test2.top.next.value).toEqual('apples')
    expect(test2.top.next.next.value).toEqual('peanuts')
  })

  it ('can successfully pop off a stack', () => {
    let test3 = new Stack()
    test3.push('peanuts')
    test3.push('apples')
    test3.push('babies')
    const poppedValue = test3.pop();
    expect (poppedValue).toEqual('babies');
  })

    it ('can successfully empty a stack and return an boolean saying whether empty', () => {
      let test4 = new Stack()
      test4.push('peanuts')
      test4.push('apples')
      test4.push('babies')
      test4.pop();
      test4.pop();
      test4.pop();

      expect (test4.isEmpty()).toBe(true);
  })

  it ('can successfully peek the top item of the stack', () => {
    let test5 = new Stack()
    // test5.push('peanuts')
    // test5.push('apples')
    // test5.push('babies')
    expect (test5.peek()).toEqual(null);
  })

  it('Can successfully instantiate an empty stack', () => {
    const test6 = new Stack();
    expect(test6.isEmpty()).toBe(true);
  });

  it('Can successfully enqueue', () => {
    const test7 = new Queue();
    test7.enqueue('woodford');
    expect(test7.front.value).toEqual('woodford');
  });

  it('Can successfully enqueue multiple values', () => {
    const test8 = new Queue();
    test8.enqueue('woodford');
    test8.enqueue('cider');
    test8.enqueue('secret-dog');

    expect(test8.front.value).toEqual('woodford');
    expect(test8.front.next.value).toEqual('cider');
    expect(test8.front.next.next.value).toEqual('secret-dog');
  });

  it('Can successfully dequeue multiple values', () => {
    const test9 = new Queue();
    test9.enqueue('woodford');
    test9.enqueue('cider');
    test9.enqueue('secret-dog');
    let dq = test9.dequeue();
    expect(dq).toBe('woodford');
  });

  it('Can successfully peek', () => {
    const test10 = new Queue();
    test10.enqueue('woodford');
    test10.enqueue('cider');
    test10.enqueue('secret-dog');  
    let peeq = test10.peek();
  
    expect(peeq).toEqual('woodford');
  });

  it('Can successfully dequeue till empty', () => {
    const test11 = new Queue();
    test11.enqueue('woodford');
    test11.enqueue('cider');
    test11.enqueue('secret-dog');  
    expect(test11.dequeue()).toEqual('woodford');
    expect(test11.dequeue()).toEqual('cider');
    expect(test11.dequeue()).toEqual('secret-dog');
    expect(test11.dequeue()).toEqual(null);
  });

  it('Can successfully instantiate an empty queue', () => {
    const test12 = new Queue();
    expect (test12.isEmpty()).toBe(true)
  })
})

