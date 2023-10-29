import { Node } from "./Node";

export class LinkedList {
  private head: Node | null;
  private tail: Node | null;
  private length: number = 0;

  // Create new Node
  constructor(value: number) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length++;
  }

  // Create new node
  // push the value into the end of the linked list
  push(value: number): this {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      if (this.tail) this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //   remove the last item
  pop(): Node | null {
    let poppedNode: Node | null = null;
    if (!this.head) {
      console.log("No item in the list");
      return null;
    }
    if (this.length === 1) {
      poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return poppedNode;
    }
    let secondLastNode: Node = this.head;
    for (let i = 1; i < this.length - 1; i++) {
      if (secondLastNode.next) secondLastNode = secondLastNode.next;
    }
    // popping the node
    poppedNode = this.tail;
    // adding second last node to tail
    this.tail = secondLastNode;
    this.tail.next = null;
    this.length--;
    return poppedNode;
  }

  // Create new node
  // add the node to head
  //   unshift(value: number) {}

  // Create new node
  // add the node to specified index
  //   insert(index: number, value: number) {}

  print() {
    console.log(JSON.stringify(this));
  }
}
