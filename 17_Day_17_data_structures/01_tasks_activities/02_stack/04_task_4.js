// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

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


function reverse(str) {
  let str_array = new stack();

  for (let i = 0; i < str.length; i++) {

    str_array.push(str[i]);
  }

  let reverse_item = str_array.give_item();

  let store = ""
  for (let i = (reverse_item.length); i > 0; i--) {
    store += str_array.pop()
  }

  return store;
}

console.log(reverse("surendra"))