// Create a script that changes the attributes of an HTML element.

let select_button = document.querySelector(".change");

let para = document.querySelector(".text");

select_button.addEventListener("click", function () {
    para.innerText = "this is the new paragraph";
});
