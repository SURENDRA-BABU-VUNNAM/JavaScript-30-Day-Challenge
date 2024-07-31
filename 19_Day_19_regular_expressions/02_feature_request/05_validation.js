// Write a script that uses regular expressions to validate passwords and URLs and log whether they are valid.


let url = "https://www.example.com";

const regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

const isValid = regex.test(url);

console.log("URL is valid:", isValid);