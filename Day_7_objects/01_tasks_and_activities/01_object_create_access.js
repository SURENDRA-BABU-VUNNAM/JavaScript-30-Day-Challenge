// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book = {
  title: "Harry Potter",
  author: "J.K Rowling",
  year: 1997,
};

console.log(book);

// Task 2: Access and log the title and author properties of the book object.

let { title, author } = book;

console.log(`the author of the book ${title} is ${author}`);

// or

let book_title = book.title;
let book_author = book.author;

console.log(2, `the author of the book ${book_title} is ${book_author}`);
