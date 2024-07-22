// Task 7:Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

let form = document.getElementById('myForm');

form.addEventListener("submit", function(e){
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  console.log(`the name is ${name}`)
  console.log(`the email is ${email}`)
  console.log(`the message is ${message}`)
})