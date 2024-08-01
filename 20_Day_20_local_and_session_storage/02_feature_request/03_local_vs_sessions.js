// Write a script that saves data to both localStorageand sessionStorage, retrieves the data, and compares the results.

function save_to_storage(key, value) {
    localStorage.setItem(key, value);
  
    sessionStorage.setItem(key, value);
  
    const local_storage_value = localStorage.getItem(key);
    const session_storage_value = sessionStorage.getItem(key);
  
    console.log("localStorage:", local_storage_value);
    console.log("sessionStorage:", session_storage_value);
  }
  
  save_to_storage("myKey", "myValue");
  