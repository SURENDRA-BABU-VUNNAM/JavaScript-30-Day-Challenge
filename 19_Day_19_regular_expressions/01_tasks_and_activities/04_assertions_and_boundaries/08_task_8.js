// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

let string = "Hello World";

const regex = /\w+$/

const match = string.match(regex);

if (match) {
  console.log("Match:", match[0]); // Output: "World"
} else {
  console.log("No match");
}