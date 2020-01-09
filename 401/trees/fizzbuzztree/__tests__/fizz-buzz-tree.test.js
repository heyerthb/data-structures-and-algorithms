const {BinaryTree, Node, fizzBuzzTree, traverseTree} = require('../fizz-buzz-tree');

describe (`fizzBuzzTree`, () => {

  it ('can successfully instantiate a new tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBe(null);
  })

  it ('can successfully change values of the tree', () => {
    const tree = new BinaryTree(null);
    tree.root = new Node(15);
    tree.root.right = new Node(15);
    tree.root.left = new Node(5);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(7);
    tree.root.right.left = new Node(12);
    fizzBuzzTree(tree);
    // expect(tree.root.value).toBe('buzz');
    // expect(tree.root.value).toBe('7');
    expect(tree.root.value).toBe('fizzbuzz');

  })

})
