// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

let my_input = document.querySelector("#my_select");
let para = document.querySelector(".selected_value");

my_input.addEventListener("change", function () {
  let selected_value = my_input.value;
  para.textContent = selected_value;
});
