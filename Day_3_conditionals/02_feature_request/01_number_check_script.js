//  Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

let number = prompt("enter your number")

number = Number(number) 


if((!(isNaN(number)))){
  if (number > 0){
    console.log("the number is positive")
  } else if (number < 0){
    console.log("the number is negative")
  } else {
    console.log("the number is zero")
  }
} else {
  alert("enter a proper number")
}

