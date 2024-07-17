//  Create a script that includes a function to calculate the square of a number and returns the result.

let val = prompt("enter a number to which you want to find a square")

val = Number(val)

function square (num){
  if(isNaN(num)){
    alert("invalid number")
    return `entered not a valid number`
  } else{
   return  num*num 
  }
}

let result = square(val)

console.log(result)

