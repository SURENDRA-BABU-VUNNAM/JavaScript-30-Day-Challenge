// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

let book = {
  title: "Harry Potter",
  author: "J.K Rowling",
  year: 1997,
};

for (let key in book) {
  console.log(`${key} :${book[key]} `);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

let keys = Object.keys(book);

let values = Object.values(book);

for (let i = 0; i < keys.length; i++) {
  console.log(`the value of key${i} is ${keys[i]} `);
}

for (let i = 0; i < values.length; i++) {
  console.log(`the value of value${i} is ${values[i]} `);
}
