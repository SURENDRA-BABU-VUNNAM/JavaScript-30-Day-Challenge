// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

let greatest = function(num1, num2){
  if (num1 > num2){
    console.log(`${num} is greater than ${num2}`)
  } else {
    console.log(`${num2} is greater than ${num1}`)
  }
}

greatest(4,5);

//Task 4: Write a function expression to concatenate two strings and return the result.

let concatenate = function(str1, str2){
  return str1+" "+str2
}

let statement_1 = "hello"

let statement_2 = "world"

let final_statement =concatenate(statement_1,statement_2)

console.log(final_statement)