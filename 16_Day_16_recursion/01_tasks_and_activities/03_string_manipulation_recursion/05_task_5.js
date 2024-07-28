// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases

let str = "surendra"

function reverse (string){
  if (string.length===1){
    return string
  } else {
    return reverse(string.slice(1)) + string[0]
  }
}

console.log(reverse(str))