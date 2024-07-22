// Create a script to check if a person is eligible to vote based on their age and log the result.

let age = prompt("enter your age")

age = Number(age)

if(!(isNaN(age))&&(age>0)){
  if (age >= 18){
    console.log("you are eligible to vote")
  } else {
    console.log("you are not eligible to vote")
  }
} else{
  alert("enter your age in proper number")
}