// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

let listner = document.querySelector('.list')

listner.addEventListener("click", function(e) {
    console.log(e.target.innerText)
})

for (i=0; i<5; i++){
    let li = document.createElement('li')
    li.textContent = `this is :${i+1}`
    listner.appendChild(li)
}
