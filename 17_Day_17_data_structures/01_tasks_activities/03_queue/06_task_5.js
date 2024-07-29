// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class Queue {
  constructor(){
    this.queue = []
  }

  enqueue (items){
    this.queue.push(items)
  }

  dequeue (){
    return this.queue.shift()
  }

  front_view (){
    return this.queue[0]
  }
}


class print_queue extends Queue {
constructor (){
  super()
}
  add_print_job(print_job){
    this.enqueue(print_job)
  }
  process_print_job(){
    console.log(this.dequeue())
  }
}

let print_order = new print_queue()

print_order.add_print_job("this is print order 1")
print_order.add_print_job("this is print order 2")
print_order.add_print_job("this is print order 3")
print_order.add_print_job("this is print order 4")
print_order.process_print_job()
print_order.process_print_job()