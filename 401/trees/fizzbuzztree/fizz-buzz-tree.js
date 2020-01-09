'use strict';

class BinaryTree {
  constructor(){
    this.root = null;
  }
}

class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

function fizzBuzzTree(tree){
  // account for an empty tree
  if (!tree.root){
    return
  }
  // if the tree is there, traverse the tree
  traverseTree(tree.root)
  return tree;
}
// our recursive function
function traverseTree (node){
  if (!node){
    return
    // we want to test for both values first so we can return if fizzbuzz
  } if (node.value % 3 === 0 && node.value % 5 === 0){
    node.value = 'fizzbuzz';
  } else if (node.value % 3 === 0) {
    node.value = 'fizz';
  } else if (node.value % 5 === 0) {
    node.value = 'buzz';
  } else if (node.value % 3 !== 0 && node.value % 5 !== 0){
    node.value = node.value.toString();

    traverseTree(node.left);
    traverseTree(node.right);
  }}

module.exports = {BinaryTree, Node, fizzBuzzTree, traverseTree};
