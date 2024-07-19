// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

let book = {
  title: "Harry Potter",
  author: "J.K Rowling",
  year: 1997,
};

book.get_title_year = function () {
  return `the name of the title is ${this.title} and the year is ${this.year}`;
};

console.log(book.get_title_year());
