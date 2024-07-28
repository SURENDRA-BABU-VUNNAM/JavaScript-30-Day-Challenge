// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n){
  if(n===0) {
    return 1
  } else {
    return n * factorial(n-1)
  }
}

console.log(factorial(10))