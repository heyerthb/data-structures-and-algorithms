
class Node {
  constructor(value, left = null, right = null){
    this.left = null,
    this.right = null,
    this.value = value
  }
}

class BinaryTree {
  constructor(root = null){
    this.root = !root ? null : new Node (root);
  }
  // the following three methods are depth first traversals
  //  root, left, right
  preOrder(){
    let result = []
    const traverse = node => {
      result.push(node.value)
      if (node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return result
  }
    // left, root, right

  inOrder(){
    let result = []
    const traverse = node => {
      if (node.left) traverse(node.left)
      result.push(node.value)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return result
  }

  // left, right, root
  postOrder(){
    let result = []
    const traverse = node => {
      if (node.left) {traverse(node.left)}
      if(node.right) {traverse(node.right)}
      result.push(node.value)
    }
    traverse(this.root)
    return result
  }
  breadthFirstSearch (){
    let result = []
    let queue = []
    queue.push(this.root)
    while (queue.length){
      let currentNode = queue.shift()
      result.push(currentNode)

      if (currentNode.left){
        queue.push(currentNode.right)
      }
    }
    return result
  }
}

class BinarySearchTree extends BinaryTree{

  constructor(value){
    super(value)
    this.count = 0
  }
  add (value){
    this.count ++
    let newNode = new Node (value)

    const searchTree = node => {
      if (value < node.value){
        if (!node.left){
          node.left = newNode
        } else {
          searchTree(node.left)
        }
      } else if 
        (value > node.value){
              if(!node.right){
                node.right = newNode
              } else {
                searchTree(node.right)
              }
        
      }
    }
    searchTree(this.root);
  }

  min(){
    let currentNode = this.root
    while (currentNode.left){
      currentNode = currentNode.left
    }
    return currentNode.value
  }
  max(){
    let currentNode = this.root
    while (currentNode.right){
      currentNode = currentNode.right
    }
    return currentNode.value
  }

  contains(value){
    let currentNode = this.root
    while (currentNode){
      return true
    } if (value < currentNode.value){
      currentNode = currentNode.left
    } else {
      currentNode = currentNode.right
    }
    return false;
  } 
}

module.exports = { 
  BinarySearchTree,
  BinaryTree,
  Node
}