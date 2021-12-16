'use strict';

const Vertex = require('./vertex');
const Edge = require('./edge');

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    // we need to add the vertex to the adjacency list and set an empty array for the edges
    return this._adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      throw new Error('Invalid vertex');
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex));
  }

  getNode() {
    let collection = [];
    for (const [vartex, edge] of this._adjacencyList.entries()) {
      if (edge.length > 0) {
        if (edge.length > 1) {
          edge.forEach((e, i) => collection.push(`${vartex.value} with ${e.vertex.value}`));
        } else {
          collection.push(`${vartex.value} with ${edge[0].vertex.value}`);
        }
      }
    }
    return collection;
  }

   getNeighbors(node) {
      for (const [vertex, edge] of this._adjacencyList.entries()) {
        if (vertex === node) {
          return edge;
        }
      }
   } 
  size() {
    if (this._adjacencyList.size > 0) {
      return this._adjacencyList.size;
    } else {
      return null;
    }
  }
}

module.exports = Graph ;