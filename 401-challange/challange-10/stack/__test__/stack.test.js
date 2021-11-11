'use strict'
const Stack =require('../stack')

describe('Stack Tests', () => {

    describe('Push', () => {

        it('1. Can successfully push onto a stack', () => {
            let stack = new Stack();
            stack.push(1);
            expect(stack.top.value).toEqual(1);
        });

        it('2. Can successfully push multiple values onto a stack', () => {
            let stack = new Stack();
            stack.push(2);
            expect(stack.top.value).toEqual(2);
            stack.push(3);
            expect(stack.top.value).toEqual(3);
        });

    });

    describe('Pop', () => {

        it('3. Can successfully pop off the stack', () => {
            let stack = new Stack();
            stack.push(4);
            stack.push(5);
            stack.push(6);
            expect(stack.pop()).toEqual(6);
            expect(stack.pop()).toEqual(5);
            expect(stack.pop()).toEqual(4);
        });

        it('4. Can successfully empty a stack after multiple pops', () => {
            let stack = new Stack();
            stack.push(7);
            stack.push(8);
            stack.push(9);
            stack.pop();
            stack.pop();
            stack.pop();
            expect(stack.isEmpty()).toEqual(true);

        });

    });

    describe('Peek', () => {

        it('5. Can successfully peek the next item on the stack', () => {
            let stack = new Stack();
            stack.push(10);
            expect(stack.peek()).toEqual(10);
            stack.push(11);
            expect(stack.peek()).toEqual(11);
        });

    });

    it('6. Can successfully instantiate an empty stack', () => {
        let stack = new Stack();
        expect(stack).toBeInstanceOf(Stack);
        expect(stack instanceof Stack).toBeTruthy();
        expect(stack.top).toBeNull();
    });

    it('7. Calling pop or peek on empty stack raises exception', () => {
        let stack = new Stack();
        let raises = stack.pop();
        expect(stack.pop()).toBeUndefined();
        expect(stack.peek()).toBeUndefined();
        expect(raises).toEqual(undefined);
    });

});

