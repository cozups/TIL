class maxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();

    return this.values;
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    let current = this.values[currentIndex];

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parent = this.values[parentIndex];

      if (current <= parent) break;
      this.values[parentIndex] = current;
      this.values[currentIndex] = parent;
      currentIndex = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    this.sinkDown();

    return max;
  }

  sinkDown() {
    let length = this.values.length;
    let currentIndex = 0;
    let current = this.values[currentIndex];

    while (currentIndex < length) {
      let leftChildIndex = currentIndex * 2 + 1;
      let rightChildIndex = currentIndex * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > current) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (rightChild > current) {
          if (!swap || (swap && leftChild < rightChild)) {
            swap = rightChildIndex;
          }
        }
      }

      if (!swap) break;
      [this.values[currentIndex], this.values[swap]] = [
        this.values[swap],
        this.values[currentIndex],
      ];
      currentIndex = swap;
    }
  }
}

const heap = new maxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);
heap.extractMax();
console.log(heap);
heap.extractMax();
console.log(heap);
