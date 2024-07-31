// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

let password = "Password123!";

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const is_valid = regex.test(password);

if (is_valid) {
    console.log("the password is valid")
} else {
    console.log("the password is in-valid");
}