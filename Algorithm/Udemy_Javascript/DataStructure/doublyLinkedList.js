class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;

    return poppedNode;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index <= this.length / 2) {
      // head
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    } else {
      // tail
      let current = this.tail;
      for (let i = 0; i < this.length - index - 1; i++) {
        current = current.prev;
      }
      return current;
    }
  }

  set(index, val) {
    const current = this.get(index);
    if (current) {
      current.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    const newNode = new Node(val);
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const removedNode = this.get(index);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }
}

list = new DoublyLinkedList();
list.push(1);
list.push(23);
list.push(35);
list.push(84);
list.push(99);
console.log(list);
console.log(list.get(4));
console.log(list.set(4, 1234));
console.log(list.get(4));
