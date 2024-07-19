// Write a script that creates a book object, adds methods to it, and logs its properties and method results.

function book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.method = function method() {
    return `this book ${this.book} has been read`;
  };
}

let book1 = new book("Harry Potter", "J.K Rowling", 1997);

console.log(book1.title);
console.log(book1.author);
console.log(book1.year);
console.log(book1.method());
