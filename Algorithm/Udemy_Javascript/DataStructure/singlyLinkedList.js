// piece of data - val
// reference to next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  // traverse() {
  //   let current = this.head;
  //   while (current != null) {
  //     current = current.next;
  //   }
  // }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let pre = temp;
    while (temp.next != null) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length -= 1;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;

    if (!this.length) {
      this.tail = null;
    }

    return currentHead;
  }
}

const list = new SinglyLinkedList();
console.log(list.push('hi'));
console.log(list.push('there'));
console.log(list.shift());
console.log(list);
