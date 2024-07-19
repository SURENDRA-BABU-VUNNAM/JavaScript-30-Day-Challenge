// Create a script that defines a library object containing an array of book objects and logs the library's details.

function book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

function library(name) {
  this.name = name;
  this.books = [];
  this.add_book = function (book) {
    this.books.push(book);
  };
  this.log_library = function () {
    console.log(`the name of the library is ${this.name}`);
    console.log(`the books in the library are`);
    this.books.map(function (e) {
      console.log(`${e.title}`);
      console.log(`${e.author}`);
      console.log(`${e.year}`);
    });
  };
}

let library_1 = new library("City Library");
let book_1 = new book("Harry Potter", "J.K Rowling", 1997);

library_1.add_book(book_1);
library_1.log_library();
