"use strict";

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }
  //key = name ==> 400
  // hash
  hash(key) {
    const sumCharCode = key.split("").reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }

  // add
  add(key, value) {
    // get an index
    let hash;
    if (typeof key == "number") {
      hash = key;
    } else {
      hash = this.hash(key);
    }
    // console.log("Key", hash);
    // we need to check if a value already exist in the index
    if (!this.storage[hash]) {
      const ll = new LinkedList();
      ll.insert({ [key]: value });
      this.storage[hash] = ll; // [222] = {head:{value:{"key","value"},next:null}}
    } else {
      this.storage[hash].insert({ [key]: value });
    }
  }

  // get
  get(key) {
    const hash = this.hash(key);
    if (this.storage[hash]) {
      let currentNode = this.storage[hash].head;
      while (currentNode) {
        if (currentNode.value[key]) {
          return currentNode.value[key];
        }
        currentNode = currentNode.next;
      }
    } else {
      return null;
    }
  }

  // contains
  contains(key) {
    const hash = this.hash(key);
    if (this.storage[hash]) {
      let currentNode = this.storage[hash].head;
      while (currentNode) {
        if (currentNode.value[key]) {
          return true;
        }
        currentNode = currentNode.next;
      }
    } else {
      return false;
    }
  }

  // repeatedWord
  repeatedWord(string) {
    const arr = string.split(/[ ,]+/);
    let key;
    let hash;
    for (let i = 0; i < arr.length; i++) {
      key = arr[i].toLowerCase();
      this.add(key, "noValue");
      hash = this.hash(key);
      if (this.storage[hash].head.next) {
        return key;
      }
    }
  }

  // treeIntersection
  treeIntersection(firstTree, secondTree) {
    let key;
    let counter = 0;
    let hash;
    let results = [];
    let traverseTree = (node) => {
      key = node.value;
      this.add(key, "noValue");
      if (counter > 0) {
        typeof key == "number" ? (hash = key) : this.hash(key);
        if (this.storage[hash].head.next) {
          results.push(hash);
        }
      }
      if (node.left) {
        traverseTree(node.left);
      }
      if (node.right) {
        traverseTree(node.right);
      }
    };
    traverseTree(firstTree.root);
    counter++;
    traverseTree(secondTree.root);

    return results;
  }
}
module.exports = Hashmap;
