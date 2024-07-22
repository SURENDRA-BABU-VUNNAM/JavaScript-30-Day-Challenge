// : Write a script that includes a function to check if a number is even or odd and logs the result.

let val = prompt("enter a value")

val = Number(val)

function odd_even(){
  if(isNaN(val)){
    alert("the previous number you have entered is not a number please enter a proper number")
  } else if (val%2===0){
      console.log("the given number is even number")
  } else {
    console.log("the given number is odd number")
  }
}

odd_even(val)


