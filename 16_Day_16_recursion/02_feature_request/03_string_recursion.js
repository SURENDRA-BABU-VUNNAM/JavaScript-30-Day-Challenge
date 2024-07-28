//  Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.


let str = "surendra"

function reverse (string){
  if (string.length===1){
    return string
  } else {
    return reverse(string.slice(1)) + string[0]
  }
}

console.log(reverse(str))


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