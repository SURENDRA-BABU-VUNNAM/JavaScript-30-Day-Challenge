// Task 3: Add a mouseover event listener to an element that changes its background color.

let list = document.querySelector(".list");

list.addEventListener("mouseover", function () {
  list.style.backgroundColor = "red";
});

// Task 4: Add a mouseout event listener to an element that resets its background color.

list.addEventListener("mouseout", function () {
  list.style.backgroundColor = "";
});
