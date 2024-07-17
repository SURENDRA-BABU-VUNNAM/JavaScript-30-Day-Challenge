// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let sum = (num_1, num_2) => {
  console.log(num_1 + num_2)
}

sum(121, 321)

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

let check_char = (str, char) =>{
  if(str.includes(char)){
    return true
  } else {
    return false
  }
}

let store = check_char("surendra","z")

console.log(store)