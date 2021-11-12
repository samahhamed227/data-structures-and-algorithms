'use strict';

const LinkedList = require('./linkedlist');

// create a new instance of ll
let link = new LinkedList();
link.insert(1);
link.insert(2);
link.insert(3);
link.insert(4);
link.insert(5);


console.log(link);
console.log(link.includes(4));
console.log(link.toString());