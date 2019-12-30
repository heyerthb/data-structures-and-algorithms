const LinkedList = require ('../linked-lists');
let testList = new LinkedList();

describe ('tests our linked list implementation and methods', () => {
  beforeEach(() => {
    testList = new LinkedList();
  })

  it ('can prepend a node to the linked list', () => {
    testList.append(3)
    testList.append(7)
    testList.append(8)
    testList.insert(9)
    expect(testList.head.value).toEqual(9)
  })

  it ('will return true if a searched value exists in a linked list', () =>{
    testList.append(9)
    testList.append(11)
    testList.append(3)
    testList.append(12)
    testList.includes(3)
    expect(testList.includes(3)).toBe(true)
  })

  it ('will return false if a searched value does NOT exist in a linked list', () => {
    testList.append(9)
    testList.append(11)
    testList.append(3)
    testList.append(12)
    testList.includes(3)
    expect(testList.includes(4)).toBe(false)
  })

  it ('will return the values in the linked list as a string', () => {
    testList.append(9)
    testList.append(11)
    testList.append(3)
    testList.append(12)
    testList.append(24)
    expect(testList.toString()).toEqual('91131224')
  })
})