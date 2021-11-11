'use strict'
const Queue =require('../queue')

describe('Queue Tests', () => {

    it('1. Can successfully enqueue into a queue', () => {
        let queue = new Queue();
        expect(queue instanceof Queue).toBeTruthy();
    });


    it('2. Can successfully enqueue multiple values into a queue', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek()).toEqual(1);
    });

    it('3. Can successfully dequeue out of a queue the expected value', () => {
        let queue = new Queue();
        queue.enqueue(3);
        expect(queue.dequeue()).toEqual(3);
    });

    it('4. Can successfully peek into a queue, seeing the expected value', () => {
        let queue = new Queue();
        queue.enqueue(4);
        queue.enqueue(5);
        queue.enqueue(6);
        queue.enqueue(7);
        expect(queue.peek()).toEqual(4);
    });


    it('5.Can successfully empty a queue after multiple dequeues', () => {
        let queue = new Queue();
        queue.enqueue(8);
        queue.enqueue(9);
        queue.enqueue(10);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toEqual(true);
    });

    it('6. Can successfully instantiate an empty queue', () => {
        let queue = new Queue();
        expect(queue).toBeInstanceOf(Queue);
        expect(queue.isEmpty()).toEqual(true);
    });

    it('7. Calling dequeue or peek on empty queue raises exception', () => {
        let queue = new Queue();
        expect(queue.peek()).toEqual(null);
        expect(queue.dequeue()).toEqual("The queue is Empty");
        expect(queue.isEmpty()).toEqual(true);
    });

});