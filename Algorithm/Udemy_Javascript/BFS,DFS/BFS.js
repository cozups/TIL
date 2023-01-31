class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let temp = this.root;

      while (true) {
        if (val === temp.value) return undefined;
        if (val > temp.value) {
          if (!temp.right) {
            temp.right = newNode;
            return this;
          } else {
            temp = temp.right;
          }
        } else if (val < temp.value) {
          if (!temp.left) {
            temp.left = newNode;
            return this;
          } else {
            temp = temp.left;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) {
      return false;
    }
    let temp = this.root;
    let found = false;

    while (temp && !found) {
      if (val === temp.value) {
        found = true;
      } else if (val < temp.value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }

    if (!found) return undefined;
    return temp;
  }

  contains(val) {
    if (!this.root) {
      return false;
    }
    let temp = this.root;
    let found = false;

    while (temp && !found) {
      if (val === temp.value) {
        return true;
      } else if (val < temp.value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }

    return false;
  }

  BFS() {
    const queue = [];
    const visited = [];

    queue.push(this.root);

    while (queue.length) {
      let current = queue.shift();

      visited.push(current);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    return visited;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.BFS());
