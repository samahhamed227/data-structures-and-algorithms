'use strict';

const LinkedList= require('../linkedlist');

let testingList = new LinkedList();

describe('Linked list lib tetsing', () => {

it('1. Can successfully instantiate an empty linked list', () => {
    expect(testingList.head).toBeNull();
});

it('2. Can properly insert into the linked list', () => {
    testingList.insert(1);
    expect(testingList.head.value).toBe(1);
    expect(testingList.head.next).toBeNull();
});

it('3. Can properly insert multiple nodes into the linked list', () => {
    testingList.insert(2);
    testingList.insert(3);
    console.log(testingList);
    expect(testingList.head.next).not.toBeNull();
});
it('4. Will return true when finding a value within the linked list that exists', () => {
    expect(testingList.includes(2)).toBe(true);
});

it('5. Will return false when searching for a value in the linked list that does not exist', () => {
    expect(testingList.includes(8)).toBe(false);
});


});
