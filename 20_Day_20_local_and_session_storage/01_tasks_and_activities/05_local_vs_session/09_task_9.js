// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage>. Retrieve and log the values from both storage mechanisms.

function save_to_storage(key, value) {
  localStorage.setItem(key, value);

  sessionStorage.setItem(key, value);

  const local_storage_value = localStorage.getItem(key);
  const session_storage_value = sessionStorage.getItem(key);

  console.log("localStorage:", local_storage_value);
  console.log("sessionStorage:", session_storage_value);
}

save_to_storage("myKey", "myValue");
