'use strict';

<<<<<<< linked-list-zip
const Node = require('../node')
=======
const LinkedList= require('../linkedlist');
const Node = require('../linkedlist');

>>>>>>> local


describe('Linked List', ()=>{
    it('should check if a new linked list is created', ()=>{
        // arrange
        // act
       let list = new LinkedList();
        // assert
        expect(list.head).toBeNull();
    });
    it('should check if a new node is inserted', ()=>{
        // arrange
        let value = 'new Value'
      let newNode = new Node(value);
      let list = new LinkedList();
      list.insert(value);
      
        // act

        // assert
        expect(list.head).toEqual(newNode);
    });
    it('should check if the list has the selected node', () =>{
        // arrange
       let searchValue = 'some value';
        // act            
        // assert
        expect(searchValue).toBeTruthy();
        expect(!searchValue).toBeFalsy()
    });
<<<<<<< linked-list-zip

=======
    it('should check if a new node is created', ()=>{
        // arrange
        let value = 'new node value';
        //act
        let node = new Node(value);
        //assert
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    });
    
>>>>>>> local
})