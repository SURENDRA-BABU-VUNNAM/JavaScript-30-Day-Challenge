// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

let input = document.querySelector('#my_input');

input.addEventListener("keydown",function(e){
  console.log(e.key)
})
