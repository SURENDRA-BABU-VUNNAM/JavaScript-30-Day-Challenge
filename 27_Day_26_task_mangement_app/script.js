let form = document.querySelector("form");
let task_list = document.querySelector(".task_list");
let task_array = [];
let id = 0
let edited_task_id = null
class task_object_constructor {
    constructor(id, task_title, task_description, due_date) {
        this.id = id
    this.task_title = task_title;
    this.task_description = task_description;
    this.due_date = due_date;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let input_task_title = document.querySelector("#task_title").value;
  let input_task_description =
    document.querySelector("#task_description").value;
  let input_task_due_date = new Date(
    document.querySelector("#due_date").value
    ).toLocaleString();
if (edited_task_id !== null) {
    let task_object = task_array.find(task => task.id === edited_task_id)
    task_object.task_title = input_task_title
    task_object.task_description = input_task_description
    task_object.due_date = input_task_due_date
    update_task(task_object)
    edited_task_id = null
} else {
    let task_object = new task_object_constructor(
        id++,
    input_task_title,
    input_task_description,
    input_task_due_date
  );
  task_array.push(task_object);
  task_card(task_object);
}

  form.reset();
});

function task_card(task_object) {
  let task_card = document.createElement("div");
    task_card.setAttribute("id", `task_card_${task_object.id}`);
    task_card.setAttribute("class", "task_card")

  let task_title = document.createElement("h2");
  task_title.setAttribute("class", "task_title");
  task_title.innerText = `Task: ${task_object.task_title}`;
  task_card.appendChild(task_title);

  let task_description = document.createElement("p");
  task_description.setAttribute("class", "task_description");
  task_description.innerText = `Description: ${task_object.task_description}`;
  task_card.appendChild(task_description);

  let task_due_date = document.createElement("p");
  task_due_date.setAttribute("class", "due_date");
  task_due_date.innerText = `Due Date: ${task_object.due_date}`;
  task_card.appendChild(task_due_date);

    let edit_button = document.createElement("button");
    edit_button.setAttribute("class", "edit_button")
  edit_button.innerText = "Edit";
  edit_button.addEventListener("click", function () {
      edit_task(task_object);      
  });
    
  task_card.appendChild(edit_button);

    let delete_button = document.createElement("button")
    delete_button.setAttribute("class", "delete_button")
    delete_button.innerText= "Delete"
    delete_button.addEventListener("click", function () {
        delete_task(task_object)
    })
    task_card.appendChild(delete_button)
  task_list.appendChild(task_card);
}

function edit_task(task_object) {
  let input_task_title = document.querySelector("#task_title")
  let input_task_description =
    document.querySelector("#task_description")
  let input_task_due_date = new Date(
    document.querySelector("#due_date")
    )
    
    input_task_title.value = task_object.task_title
    input_task_description.value = task_object.task_description
    input_task_due_date.value = task_object.due_date

    edited_task_id = task_object.id
}

function update_task (task_object) {
    let task_card = document.querySelector(`#task_card_${task_object.id}`)
    task_card.querySelector(".task_title").innerText = `Task: ${task_object.task_title}`
      task_card.querySelector(".task_description").innerText = `Description: ${task_object.task_description}`
      task_card.querySelector(".due_date").innerText = `Due Date: ${task_object.due_date}`
    
}

function delete_task(task_object) {
    let task_card = document.querySelector(`#task_card_${task_object.id}`)
    let check = confirm(`are you sure you want to delete ${ task_object.task_title}`,)    
    if (check) {
        task_card.remove()
    }
}
