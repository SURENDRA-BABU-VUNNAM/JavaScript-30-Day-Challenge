// Write a script that demonstrates event delegation by handling events on dynamically added child elements.

let form = document.getElementById("myForm");
let opt = document.getElementById("option");
let my_input = document.querySelector("#my_select");
let para = document.querySelector(".selected_value");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  console.log(`the name is ${name}`);
  console.log(`the email is ${email}`);
  console.log(`the message is ${message}`);
  console.log(`the option is ${opt.value}`);
});

my_input.addEventListener("change", function () {
  let selected_value = my_input.value;
  opt.value = selected_value;
});

document.addEventListener("DOMContentLoaded", function () {
  let selected_value = my_input.value;
  opt.value = selected_value;
});

my_input.addEventListener("change", function () {
  let selected_value = my_input.value;
  opt.value = selected_value;
});
