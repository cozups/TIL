class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, end) {
    let distances = {};
    let previous = {};
    let q = new PriorityQueue();
    let path = [];

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        q.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        q.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (q.values.length) {
      let smallest = q.dequeue();
      if (smallest.value === end) {
        // done!
        let curr = smallest.value;
        while (curr) {
          path.push(curr);
          curr = previous[curr];
        }
        break;
      }

      if (smallest.priority !== Infinity) {
        for (let neighbor of this.adjacencyList[smallest.value]) {
          let distance = distances[smallest.value] + neighbor.weight;
          if (distance < distances[neighbor.node]) {
            // update!
            distances[neighbor.node] = distance;
            previous[neighbor.node] = smallest.value;
            q.enqueue(neighbor.node, distance);
          }
        }
      }
    }

    return path.reverse().join('-');
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();

    return this.values;
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    let current = this.values[currentIndex];

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parent = this.values[parentIndex];

      if (current.priority > parent.priority) break;
      this.values[parentIndex] = current;
      this.values[currentIndex] = parent;
      currentIndex = parentIndex;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
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
        if (leftChild.priority < current.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (rightChild > current) {
          if (!swap || (swap && leftChild.priority > rightChild.priority)) {
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

let g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'F', 1);
g.addEdge('D', 'E', 3);
g.addEdge('E', 'F', 1);

console.log(g.Dijkstra('A', 'E'));
