// Task 2: Add a double-click event listener to an image that toggles its visibility.

let toggle = document.querySelector(".toggle");
let image = document.querySelector("img");

let is_visible = false;

toggle.addEventListener("dblclick", function () {
  is_visible = !is_visible;
  if (is_visible) {
    image.style.visibility = "hidden";
    console.log(image.style.visibility);
  } else {
    image.style.visibility = "visible";
    console.log(image.style.visibility);
  }
});
