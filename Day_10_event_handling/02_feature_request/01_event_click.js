
let para = document.querySelector(".text");
let change = document.querySelector(".change");

change.addEventListener("click", function () {
    para.textContent = "this is the changed paragraph";
});