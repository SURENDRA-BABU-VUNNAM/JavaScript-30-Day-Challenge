// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class Node {
  constructor (value){
    this.data = value
    this.next = null
  }
}


class Linked_list {
  constructor (){
    this.head = null
    this.length =0
  }

  add_data (data){
    let new_node = new Node (data) 
    if(!this.head){
      this.head = new_node
      return
    } else {
      let current = this.head
      while(current.next){
        current = current.next
      }
      current.next = new_node
    }
  }

  display(){
   let current = this.head 
    while(current){
      console.log(current.data)
      current=current.next
    }

  }

  remove (data) {
    if (this.head.data === data){
      this.head = this.head.next
      return
    } else {
      let current = this.head 
      while(current){
        if(current.next.data===data){
          current.next = current.next.next
          return
        }
        // current= current.next
      }
    }
  }

}

const list = new Linked_list()

list.add_data(10)
list.add_data(20)
list.add_data(30)
list.remove(20)
list.display()
