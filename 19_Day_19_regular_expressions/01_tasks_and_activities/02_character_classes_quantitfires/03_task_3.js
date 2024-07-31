// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const str = "Hello World, this is a Test String.";
const regex = /\b[A-Z]\w*\b/g;
const matches = str.match(regex);
console.log(matches); 