//I: head node of a linked list
//O: boolean depending on cycle
//C: constant space

//its a cylce IF: linked list has no end, the linked list contains two nodes pointing to the same node, iterating will yield nodes n loop multiple times


const linkedListCycle = (node) => {

  let slow = node  //{value: , next: }
  let fast = node.next //{value: , next: }

  while (node) {
    if (node.next === null) {
      return false;
    }
    if (slow === fast) {
      return true;
    }
    node = node.next
    slow = node.next
    fast = node.next.next;
  }
}

// node {
//   value, "some value",
//   next:
// }


//keep track of nodes and their value and its next node

//while loop to traverse linked list
  //as long as node exists

    //reassign node to the node.next