// : Create a script that uses regular expressions to match words with specific characteristics and log the matches.

const str = "Hello World, this is a Test String.";
const regex = /\b[A-Z]\w*\b/g;
const matches = str.match(regex);
console.log(matches);
