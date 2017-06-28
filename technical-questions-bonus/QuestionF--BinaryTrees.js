// Question F -- Binary Trees: 
// Write a function to find the 2nd largest element in a binary search tree. 

// Feel free to copy a BST implementation in your language of choice, 
// and you only need to add a function to find the 2nd largest element in the tree. 
// For example, if you inserted 4,7,13,21,25, we should get back 21 from your function.

function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}
BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};
BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};


const findLargest = (rootNode) => {
  if (rootNode.right) {
    return findLargest(rootNode.right);
  }
  return rootNode.value;
}

const findSecondLargest = (rootNode) => {
  if (rootNode.left && !rootNode.right) {
    return findLargest(rootNode.left);
  }
  if (rootNode.right && !rootNode.right.left && !rootNode.right.right) {
    return rootNode.value;
  }
  return findSecondLargest(rootNode.right);
}