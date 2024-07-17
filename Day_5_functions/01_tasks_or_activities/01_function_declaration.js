// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function is_even_or_odd(num){
  if(num%2===0){
    console.log(`the number ${num} is even`);
  } else {
    console.log(`the number ${num} is odd`)
  }
}

is_even_or_odd(4);
is_even_or_odd(121);

// Task 2: Write a function to calculate the square of a number and return the result.

function square(num){
  return num*num
}

let num = 11
let power_2 = square(num);

console.log(`the square of ${num} is ${power_2}`);