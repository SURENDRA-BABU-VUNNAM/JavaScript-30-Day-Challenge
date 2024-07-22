// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

let para = document.querySelector(".text");
let change = document.querySelector(".change");

change.addEventListener("click", function () {
    para.textContent = "this is the changed paragraph";
});
