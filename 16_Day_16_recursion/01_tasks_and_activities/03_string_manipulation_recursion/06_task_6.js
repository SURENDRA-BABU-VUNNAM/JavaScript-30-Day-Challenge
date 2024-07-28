// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

let str = "noon"

function palindrome (str) {
  let check = str
  function reverse (str){
    if(str.length===1){
      return str
    } else {
      return reverse(str.slice(1)) + str[0]
    }
  }
  check = reverse(check)
  if(check === str ) {
    return true
  } else {
    return false
  }
}

console.log(palindrome(str))