const Graph = require('../graph');
const Vertex = require('../vertex');

describe('Graph', () => {
  it('should instantiate a new graph', () => {
    const graph = new Graph();
    expect(graph).toBeDefined();
  });

  it('should add new vertex to a graph', () => {
    const graph = new Graph();
    const ten = new Vertex(10);
    const two = new Vertex(2);
    graph.addVertex(ten);
    graph.addVertex(two);
    graph.addDirectedEdge(ten, two);
    expect(graph.getNode()).toEqual(['10 with 2']);
  });

  it('should calculate the size of the graph', () => {
    const graph = new Graph();

    const ten = new Vertex(10);
    const two = new Vertex(2);
    const six = new Vertex(6);
    const four = new Vertex(4);

    graph.addVertex(ten);
    graph.addVertex(two);
    graph.addVertex(six);
    graph.addVertex(four);

    graph.addDirectedEdge(ten, two);
    graph.addDirectedEdge(ten, six);
    graph.addDirectedEdge(two, six);
    graph.addDirectedEdge(two, four);
    graph.addDirectedEdge(six, four);

    expect(graph.size()).toBe(4);
  });
});