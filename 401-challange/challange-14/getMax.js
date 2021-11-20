'use strict';

class MaxStack {

    constructor() {
      this.data = [];
      this.size = 0;
      this.maxValues = [];
    }
  
    push(element) {

        if (this.size === 0 || element >= this.findMax()) {
        this.maxValues.push(element)
      }
      else {
        this.maxValues.push(this.findMax())
      }
      this.size += 1
      this.data.push(element);
      return this.data
    }
  
    pop() {
      if (this.size > 0) {
        this.size -= 1;
        this.maxValues.pop()
        return this.data.pop()
      }
    }

    findMax() {
      return this.maxValues[this.size - 1]
    }
}

module.exports = MaxStack;
