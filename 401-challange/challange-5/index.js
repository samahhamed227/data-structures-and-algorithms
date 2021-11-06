'use strict';

const LinkedList = require('./linkedlist');

// create a new instance of ll
const ll= new LinkedList(); 

ll.insert('first value');
ll.insert('second value');
ll.insert('c');
ll.insert('d');
ll.insert('e');
ll.insert('fake value');

console.log(ll);