// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

let phone_num = "(123) 456-7890";

const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;

const matches = phone_num.match(regex);

if (matches) {
  console.log("Area Code:", matches[1]); // Output: 123
  console.log("Central Office Code:", matches[2]); // Output: 456
  console.log("Line Number:", matches[3]); // Output: 7890
}
