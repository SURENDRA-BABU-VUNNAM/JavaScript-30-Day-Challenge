// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outer(){
  let vari = 10
  return function inner (){
    console.log(vari)
  }
}
let inner_function = outer()
console.log(inner_function)
inner_function()