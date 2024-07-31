//Task 10: Write a regular expression to validate a URL. Log whether the URL is valid

let url = "https://www.example.com";

const regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

const isValid = regex.test(url);

console.log("URL is valid:", isValid);