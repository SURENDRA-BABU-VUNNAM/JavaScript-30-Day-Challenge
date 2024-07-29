// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left and right

class Node {
  constructor (data){
    this.data =data
    this.left = null
    this.right =null
  }
}

class Tree_Node {
  constructor(){
    this.root = null
  }

  insert_data(data){
    let new_node = new Node(data)
    if(!this.root){
      this.root = new_node
    } else {
      let current = this.root
      while(true){
        if(current.data > data) {
          if (!current.left) {
            current.left = new_node
            return this
          } 
          current = current.left
        } else {
          if (!current.right) {
            current.right = new_node
            return this
          }
          current = current.right
        }
      }
    }
  }

  inorder_traversal() {
      const result = [];
      const traverse = (node) => {
          if (node.left) traverse(node.left);
          result.push(node.data);
          if (node.right) traverse(node.right);
      };
      traverse(this.root);
      return result;
  }
}

let tree = new Tree_Node()

tree.insert_data(10)
tree.insert_data(20)
tree.insert_data(5)
tree.insert_data(9)
tree.insert_data(300)
console.log(tree.inorder_traversal())