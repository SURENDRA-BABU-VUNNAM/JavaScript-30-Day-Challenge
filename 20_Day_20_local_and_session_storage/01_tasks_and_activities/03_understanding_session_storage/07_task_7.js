// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

let obj = {
  user_name: "surendra babu",
  user_email: "surendra@mail.com",
};

sessionStorage.setItem("user", JSON.stringify(obj));

let retrieved_user = JSON.parse(sessionStorage.getItem("user"));

console.log(retrieved_user);
