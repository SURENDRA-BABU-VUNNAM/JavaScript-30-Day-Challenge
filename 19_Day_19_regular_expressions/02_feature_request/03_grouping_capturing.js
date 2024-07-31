//  Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses, and log the captures.

let phone_num = "(123) 456-7890";
const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches = phone_num.match(regex);
if (matches) {
  console.log("Area Code:", matches[1]); // Output: 123
  console.log("Central Office Code:", matches[2]); // Output: 456
  console.log("Line Number:", matches[3]); // Output: 7890
}
