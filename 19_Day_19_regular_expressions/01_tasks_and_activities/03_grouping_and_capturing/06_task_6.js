// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

let email = "john.doe@example.com";

const regex = /([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/;

const matches = email.match(regex);

if (matches) {
  console.log("Username:", matches[1]); // Output: john.doe
  console.log("Domain:", matches[2]); // Output: example.com
}

