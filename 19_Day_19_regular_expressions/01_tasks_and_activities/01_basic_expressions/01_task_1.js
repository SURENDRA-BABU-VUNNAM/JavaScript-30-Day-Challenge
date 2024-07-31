/* Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches. */

let str =
  "You are a JavaScript expert having specialization in regular expressions (regex) in JavaScript and you are teaching a beginner use industry standards to teach production ready code using MDN docs and ECMA standards now you are a part of collection that is meant teach regular expressions in JavaScript to give me examples that are used in production grade code and i compel you to give nuances that will help me to write a better production grade code (wait for my follow up because i am trying to break concepts in to smaller chunks)";

const regex = /JavaScript/;

console.log(regex.test(str));
