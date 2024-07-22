// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let array = ["this is first element", "this is second element"];

let [first_element, second_element] = array;

console.log(first_element);
console.log(second_element);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book_object = {
  title: "Harry Potter",
  author: "J.K Rowling",
};

let { title, author } = book_object;

console.log(title);
console.log(author);
