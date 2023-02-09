// undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let adjVertex = this.adjacencyList[vertex][0];
      this.removeEdge(vertex, adjVertex);
    }

    delete this.adjacencyList[vertex];
  }

  DFS_recursive(start) {
    let result = [];
    let visited = {};

    const helper = (v) => {
      if (!v) return null;

      visited[v] = true;
      result.push(v);

      for (let adjVertex of this.adjacencyList[v]) {
        if (!visited[adjVertex]) {
          helper(adjVertex);
        }
      }
    };

    helper(start);

    return result;
  }

  DFS_iterative(start) {
    let stack = [start];
    let result = [];
    let visited = {};

    visited[start] = true;
    while (stack.length) {
      let v = stack.pop();
      result.push(v);

      for (let neighbor of this.adjacencyList[v]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }

    return result;
  }

  BFS(start) {
    let queue = [start];
    let result = [];
    let visited = {};

    visited[start] = true;
    while (queue.length) {
      let v = queue.shift();
      result.push(v);

      for (let neighbor of this.adjacencyList[v]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.DFS_recursive('A'));
console.log(g.DFS_iterative('A'));
console.log(g.BFS('A'));
