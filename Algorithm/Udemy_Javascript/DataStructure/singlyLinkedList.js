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

  traverse() {
    let current = this.head;
    while (current != null) {
      console.log(current);
      current = current.next;
    }
  }

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
    if (!this.head) {
      return undefined;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;

    if (!this.length) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  set(index, val) {
    let currentNode = this.get(index);

    if (currentNode) {
      currentNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      return !!this.push(val);
    }
    if (index === 0) {
      return !!this.unshift(val);
    }

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length += 1;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }
    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;

    this.length -= 1;

    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

const list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(300);
list.reverse();
list.traverse();
