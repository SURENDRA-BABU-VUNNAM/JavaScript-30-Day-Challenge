// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

function save_data(event) {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  localStorage.setItem("user_name", name);
  localStorage.setItem("user_email", email);

  document.querySelector("#user_form").reset();

}

function display_data() {
  const name = localStorage.getItem("user_name");
  const email = localStorage.getItem("user_email");
  const user_info = document.querySelector("#user_info");
  if (name && email) {
    user_info.innerHTML = `<h2>Saved User Information:</h2>
                                <p><strong>Name:</strong> ${name}</p>
                                  <p><strong>Email:</strong> ${email}</p>`;
  } else {
    console.log("no user data");
  }
}

document.querySelector("#user_form").addEventListener("submit", save_data);

window.onload = display_data;


setTimeout(function () {
  localStorage.clear()
},5000)
