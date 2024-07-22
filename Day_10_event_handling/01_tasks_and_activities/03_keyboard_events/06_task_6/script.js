// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

let input = document.querySelector("#my_input");

input.addEventListener("keyup", function (e) {
  console.log(e.key);
});
