//  Create a script that uses regular expressions to match words at specific positions in a string and log the matches.

let string = "Hello World";

const regex = /^\w+/;

const match = string.match(regex);

if (match) {
  console.log("Match:", match[0]); // Output: "Hello"
} else {
  console.log("No match");
}

let string_1 = "Hello World";

const regex_2 = /\w+$/;

const match_2 = string.match(regex);

if (match) {
  console.log("Match:", match[0]); // Output: "World"
} else {
  console.log("No match");
}
