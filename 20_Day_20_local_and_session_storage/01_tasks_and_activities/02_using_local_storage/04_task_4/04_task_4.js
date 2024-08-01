// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

let user_name = "bittu";
let email = "bittu@badshah.com";

localStorage.setItem("user_name", user_name);
localStorage.setItem("user_email", email);

console.log(localStorage.getItem("user_name"));
localStorage.removeItem("user_name");
console.log(localStorage.getItem("user_name"));
