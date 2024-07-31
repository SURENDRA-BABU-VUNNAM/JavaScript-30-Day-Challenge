// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches

let string = "abc123def456ghi789";
const regex = /\d+/g;
const matches = string.match(regex);

console.log(matches);
