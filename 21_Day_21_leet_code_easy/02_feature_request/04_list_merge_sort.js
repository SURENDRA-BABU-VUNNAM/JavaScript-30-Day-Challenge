
class Node {
    constructor(value) {
      this.data = value;
      this.next = null;
    }
  }
  
  class Linked_list {
    constructor() {
      this.head = null;
    }
  
    add_data(data) {
      let new_node = new Node(data);
      if (!this.head) {
        this.head = new_node;
        return;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = new_node;
      }
    }
  
    display() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  let list_1 = new Linked_list();
  list_1.add_data(19);
  list_1.add_data(22);
  list_1.add_data(3);
  list_1.add_data(10);
  
  let list_2 = new Linked_list();
  list_2.add_data(11);
  list_2.add_data(13);
  list_2.add_data(5);
  list_2.add_data(20);
  
  function merge_list(list_1, list_2) {
    let current = list_1.head;
    while (current.next) {
      current = current.next;
    }
    current.next = list_2.head;
  
    let current_2 = list_1.head;
    let store = [];
    while (current_2) {
      store.push(current_2.data);
      current_2 = current_2.next;
    }
    store.sort((a, b) => a - b);
    console.log(store);
    let current_3 = list_1.head;
    while (current_3) {
      current_3.data = store.shift();
      current_3 = current_3.next;
    }
  
    return list_1;
  }
  
  console.log(merge_list(list_1, list_2));
  