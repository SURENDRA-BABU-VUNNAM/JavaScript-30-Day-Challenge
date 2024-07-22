// Task 10: Add a mouseover event listener to an element that changes its border color.

let para = document.querySelector('.text');

para.addEventListener('mouseover', function(){
  para.style.border = '1px solid red';
})