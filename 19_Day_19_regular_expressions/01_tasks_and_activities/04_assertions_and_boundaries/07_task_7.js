// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches. 

let string = "Hello World";

const regex = /^\w+/;

const match = string.match(regex);

if (match) {
  console.log("Match:", match[0]); // Output: "Hello"
} else {
  console.log("No match");
}
