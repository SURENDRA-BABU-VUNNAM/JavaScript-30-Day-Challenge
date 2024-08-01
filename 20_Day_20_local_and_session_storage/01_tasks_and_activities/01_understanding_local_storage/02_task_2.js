// Task 2:Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

let obj = {
  user_name: "surendra babu",
  user_email: "surendra@mail.com",
};

localStorage.setItem("user", JSON.stringify(obj));

let retrieved_user = JSON.parse(localStorage.getItem("user"));

console.log(retrieved_user);
