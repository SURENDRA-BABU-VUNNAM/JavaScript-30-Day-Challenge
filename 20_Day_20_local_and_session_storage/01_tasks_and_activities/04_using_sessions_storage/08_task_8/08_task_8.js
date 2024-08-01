//  Task 8:Write a script to remove an item from sessionStorage. Log the  sessionStorage content before and after removal.

let user_name = "bittu";
let email = "bittu@badshah.com";

sessionStorage.setItem("user_name", user_name);
sessionStorage.setItem("user_email", email);

console.log(sessionStorage.getItem("user_name"));
localStorage.removeItem("user_name");
console.log(sessionStorage.getItem("user_name"));