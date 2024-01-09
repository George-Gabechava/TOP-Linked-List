// JS Linked Lists Assignment

// A node containing a value & link to the next node
// set both as null by default
function createNode(value, next) {
  if (value === '') {
    value = null;
  }
  if (next === '' || next === undefined) {
    next = null;
  }

  return { value, next };
}

function linkedList() {
  let headOriginal = createNode('H', null);

  const append = (node) => {
    let tmp = headOriginal;

    // While tmp has a next pointer, continue through the list.
    while (tmp.next !== null) {
      tmp = tmp.next;
    }

    // Once tmp reaches the end of the list, append the node at this location.
    tmp.next = node;
  }

  // Create a new headOriginal node
  const prepend = (node) => {
    // Make the old headOriginal node the next one for the new headOriginal node.
    node.next = headOriginal;
    headOriginal = node;
  }

  const size = () => {
    let count = 0; // Start counting from 0
    let tmp = headOriginal;
  
    while (tmp !== null) { // Check for null before starting
      count++;
      tmp = tmp.next;
    }
  
    return count;
  };

  const head = () => {
    return headOriginal;
  }

  const tail = () => {
    let tmp = headOriginal;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    if (tmp.next == null) { // We have reached the tail
      return tmp;
    }
  }

  const atIndex = (index) => {
    let count = 0; // Start counting from 0
    let tmp = headOriginal;

    while (tmp !== null && count < index) { // Check for null before starting
      count++;
      tmp = tmp.next;
    }

    return tmp;
  }

  const pop = () => {
    // Find the size of current index
    let currentSize = size();
    let toRemove = atIndex(currentSize -1);

    // Store value of node being removed
    let string = `Node "${toRemove.value}" removed`

    // Set second to last node.next = null
    atIndex(currentSize - 2).next = null;

    // Log which node was removed
    return string;
  }

  const containsValue = (value) => {
    let tmp = head();

    while (tmp !== null) { // Check for null before starting
      if (tmp.value == value) {
        return true;
      }
      tmp = tmp.next;
    }
    return false;
  }

  const findValue = (value) => {
    let tmp = head();
    count = 0;

    while (tmp !== null) { // Check for null before starting
      if (tmp.value == value) {
        return count;
      }
      count++;
      tmp = tmp.next;
    }
    return null;
  }

  const toString = () => {
    let currentString = ``;
    let tmp = head();
    // Append each node value to a string.
    while (tmp !== null) { // Check for null before starting
      tmpValue = tmp.value;
      currentString = `${currentString} ( ${tmpValue} ) -> `
      tmp = tmp.next;
    }

    // The final value is null
    currentString = `${currentString} null`
    return currentString
  }

 

  return { 
    headOriginal, 
    append, 
    prepend,
    size,
    head,
    tail,
    atIndex,
    pop,
    containsValue,
    findValue,
    toString
  };
}

let myList = linkedList();
console.log("create list", myList);

myList.append(createNode('Node A'));
// console.log("appended A", myList);

let bNode = createNode('Node B');
myList.append(bNode);
// console.log("appended B", myList);

myList.prepend(createNode("New Node In Town"));
console.log("prepended", myList);

console.log("toString:", myList.toString());