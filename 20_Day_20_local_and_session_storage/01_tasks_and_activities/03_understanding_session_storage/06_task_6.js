// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

let user_name = "bittu"

sessionStorage.setItem("user_name", user_name)

let retrieved = sessionStorage.getItem("user_name")