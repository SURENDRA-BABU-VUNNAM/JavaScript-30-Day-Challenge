// Task 1: Write a script to save a string value to <code>localStorage</code> and retrieve it. Log the retrieved value.

localStorage.setItem("user_name", "surendra")
let user = localStorage.getItem("user_name")
console.log(user);
