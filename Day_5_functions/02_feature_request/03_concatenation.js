// Write a script that includes a function expression to concatenate two strings and returns the result.

let value = prompt("enter the string 1")
let value_2 = prompt("enter the string 2")

function concatenate (str_1, str_2) {
  return str_1 + " " + str_2
}

let result = concatenate(value,value_2)

console.log(result)