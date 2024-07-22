// Write a script that demonstrates event delegation by handling events on dynamically added child elements.

let listner = document.querySelector(".list");

listner.addEventListener("click", function (e) {
  console.log(e.target.innerText);
});

for (i = 0; i < 5; i++) {
  let li = document.createElement("li");
  li.textContent = `this is :${i + 1}`;
  listner.appendChild(li);
}
