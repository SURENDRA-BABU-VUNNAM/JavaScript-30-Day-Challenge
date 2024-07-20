// Create a script that uses array and object destructuring to extract values and log them.

let array = ["this is first element", "this is second element"];

let object_book = {
  title: "Harry Potter",
  author: "J.K Rowling",
};

let [first_element, second_element] = array;
let { title, author } = object_book;

console.log(
  `the values from de-structured array is ${first_element} and ${second_element}`,
);
console.log(`the values de-structured object is ${title} and ${author}`);
