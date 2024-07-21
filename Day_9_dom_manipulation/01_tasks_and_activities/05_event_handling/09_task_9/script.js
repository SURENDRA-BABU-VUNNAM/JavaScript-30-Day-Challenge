// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

let select_button = document.querySelector(".change");

let para = document.querySelector(".text");

select_button.addEventListener("click", function () {
    para.innerText = "this is the new paragraph";
});
