// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.

function save_data(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
  
    sessionStorage.setItem("user_name", name);
    sessionStorage.setItem("user_email", email);
  
    document.querySelector("#user_form").reset();
  
  }
  
  function display_data() {
    const name = sessionStorage.getItem("user_name");
    const email = sessionStorage.getItem("user_email");
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
  
  