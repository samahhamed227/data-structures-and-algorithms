"use strict"
const LinkedList = require('../linked-list-kth')
let newLl = new LinkedList();
let value = 1;
let value2 = 2;
let value3 = 3;
let value4 = 4;
let value5 = 5;
let value6 = 6;

describe('linked-list tests- Challange 07 Testing kthFromEnd(k)', () => {

    it('k and the length of the list are the same', () => {
     
        expect(newLl.kthFromEnd(6)).toEqual('Wrong Value of k');

    });
    it('k is not a positive integer', () => {
       
        expect(newLl.kthFromEnd(-2)).toEqual('Wrong Value of k');
    });
    it('linked list is of a size 1', () => {
        let newLl2 = new LinkedList();
        newLl2.append(8);
        expect(newLl2.kthFromEnd(2)).toEqual('Wrong Value of k');
        expect(newLl2.kthFromEnd(1)).toEqual('Wrong Value of k');
        expect(newLl2.kthFromEnd(0)).toEqual(8);
    });

    it('Happy Path', () => {

        newLl.append(value);
        newLl.append(value2);
        newLl.append(value3);
        newLl.append(value4);
        newLl.append(value5);
        newLl.append(value6);
        let value7 = 7;
        newLl.append(value7);
        expect(newLl.kthFromEnd(3)).toEqual(4);
    });

});