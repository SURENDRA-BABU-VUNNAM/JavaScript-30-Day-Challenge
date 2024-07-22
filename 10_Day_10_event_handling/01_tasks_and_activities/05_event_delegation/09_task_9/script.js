// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

let parent = document.querySelector('.list');

parent.addEventListener("click",function(event){
  console.log(event.target.textContent)
})