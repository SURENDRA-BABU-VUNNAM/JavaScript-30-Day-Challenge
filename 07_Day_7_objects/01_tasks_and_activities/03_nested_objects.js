// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects) and log the library object to the console.

let library = {
  name: "City Library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
    {
      title: "1984",
      author: "George Orwell",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
    },
  ],
};

console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.

let { name, books } = library;

console.log(name);

// for(i=0;i<books.length;i++){
//   console.log(books[i].author)
// }

// or

books.forEach(function (e) {
  console.log(`${e.title}`);
});
