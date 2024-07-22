// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function multi(para_1,para_2 = 121){
  return para_1*para_2
}

let result = multi(2)
console.log(result)

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function hello(name,age=21){
  return `hello ${name}, your age is ${age}`
}

let greeting = hello("surendra")

console.log(greeting)