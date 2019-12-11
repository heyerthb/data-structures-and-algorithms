const {BinarySearchTree, BinaryTree, Node} = require ('../tree.js');

describe ('binary tree methods', () => {

  it ('Can successfully instantiate an empty binary tree', () => {
    const emptyTree = new BinaryTree();
    expect (emptyTree.root).toBe(null)
  })

  it ('Can successfully instantiate an empty binary tree with a single root node', () => {
    const emptyTree = new BinaryTree('appple');
    expect (emptyTree.root.value).toBe('appple')
  })

  it ('Can successfully add a left and right child to a single root node', () => {
    const emptyTree = new BinarySearchTree(10);
    emptyTree.add(7)
    emptyTree.add(13)

    expect (emptyTree.root.value).toBe(10)
    expect (emptyTree.root.left.value).toBe(7)
    expect (emptyTree.root.right.value).toBe(13)

  })

  it ('Can successfully return a collection from a preorder traversal', () => {
   const emptyTree = new BinarySearchTree(5);
   emptyTree.add(3)
   emptyTree.add(2)
   emptyTree.add(4)
   emptyTree.add(7)
   emptyTree.add(6)
   emptyTree.add(8)
   emptyTree.add(12)

    expect (emptyTree.preOrder()).toEqual([ 5, 3, 2, 4, 7, 6, 8, 12 ])
  })

  it ('Can successfully return a collection from an inorder traversal', () => {
    const emptyTree = new BinarySearchTree(5);
    emptyTree.add(3)
    emptyTree.add(2)
    emptyTree.add(4)
    emptyTree.add(7)
    emptyTree.add(6)
    emptyTree.add(8)
    emptyTree.add(12)
 
     expect (emptyTree.postOrder()).toEqual([ 2, 4, 3, 6, 12, 8, 7, 5 ])
   })

   it ('Can successfully return a collection from a postorder traversal', () => {
    const emptyTree = new BinarySearchTree(5);
    emptyTree.add(3)
    emptyTree.add(2)
    emptyTree.add(4)
    emptyTree.add(7)
    emptyTree.add(6)
    emptyTree.add(8)
    emptyTree.add(12)
 
     expect (emptyTree.inOrder()).toEqual([ 2, 3, 4, 5, 6, 7, 8, 12 ])
   })

  
})
