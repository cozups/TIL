// 1. 배열로 스택 구현
/* var stack = [];

stack.push('google');
stack.push('instagram');
stack.push('youtube');
stack.pop();
stack.push('amazon');
stack.pop();

*/

// 2. Linked List로 구현
// push, pop이 constant time을 가져야하므로 shift, unshift 방식으로 구현한다.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const currentFirst = this.first;
      this.first = newNode;
      newNode.next = currentFirst;
    }

    return ++this.size;
  }

  pop() {
    if (this.size) return null;

    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    this.size--;
    return temp.value;
  }
}

var stack = new Stack();
stack.push(23);
stack;
