// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class custom_error extends Error {
  constructor (message) {
    super(message) ;
    this.name = " custom error try-catch"
  }
}

function err (a,b) {
  if (b===0){
    throw new custom_error("b is 0 which is not a valid operation")
  } else {
    console.log(a/b)
  }
}

try {
  err(5,0)
} catch (error){
  console.log(error.message)
  console.log(error.name)
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

function check_string(input){
  if (input === "" || input.trim() === "" || isNaN(input)){
    throw new custom_error("this is not a valid string")
  } else {
    console.log("this is a valid string")
  }
}

try {
  check_string(" ")
} catch (error) {
  console.log(error.message)
}