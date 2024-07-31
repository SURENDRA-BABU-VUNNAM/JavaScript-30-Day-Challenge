/* Task 2: Write a regular expression to match all digits in a string. Log the matches. */

let number = "123459";

const regex = /\d+/g;

console.log(number.match(regex)); 
