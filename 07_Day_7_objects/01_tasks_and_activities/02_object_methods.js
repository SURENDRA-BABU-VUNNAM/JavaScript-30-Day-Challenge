// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

let book = {
  title: "Harry Potter",
  author: "J.K Rowling",
  year: 1997,
  get_author: function () {
    return `${this.title} is written by ${this.author}`;
  },
};

let { get_author } = book;
console.log(book.get_author());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.re_write_year = function (year) {
  this.year = year;
};

book.re_write_year(1999);

let { year } = book;

console.log(`the updated year of the book ${book.title} is ${year}`);
