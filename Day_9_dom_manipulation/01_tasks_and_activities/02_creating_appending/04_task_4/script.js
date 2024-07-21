// Task 4: Create a new li element and add it to an existing ul list.

let new_li_element = document.createElement("li");
new_li_element.textContent = "item-5";

let select_ul = document.querySelector(".list")

select_ul.appendChild(new_li_element)