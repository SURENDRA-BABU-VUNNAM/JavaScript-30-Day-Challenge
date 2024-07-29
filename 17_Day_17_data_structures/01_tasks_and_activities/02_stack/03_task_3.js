// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class stack {
  constructor() {
    this.items = [];
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
  give_item() {
    return [...this.items];
  }
}

