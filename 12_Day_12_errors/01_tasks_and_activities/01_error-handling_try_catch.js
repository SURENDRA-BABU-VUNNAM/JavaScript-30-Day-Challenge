// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

let err_function = function(){
  let json = '{"name":"bittu","age":}'
  let obj = JSON.parse(json)
}

try {
  err_function()
} catch (error){
  console.log(` the gingalala error is ${error.message}`)
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

let divide = function(a,b){
  if(b===0){
    throw Error("cannot divide by zero")
  } else {
    return a/b
  }
}

try{
  divide (5,0)
} catch (error){
  console.log(error.message)
}