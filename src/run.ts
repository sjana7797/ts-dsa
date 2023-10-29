/**
 * Linked list code
 */

import { LinkedList } from "./linkedlist/LinkedList";

const myLinkedList = new LinkedList(4);

myLinkedList.print();

// push
myLinkedList.push(6);
myLinkedList.push(8);
myLinkedList.push(10);

myLinkedList.print();

// pop
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.pop();

myLinkedList.print();

myLinkedList.pop();
myLinkedList.push(10);
myLinkedList.print();
