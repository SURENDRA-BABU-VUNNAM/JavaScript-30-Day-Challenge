//Task 3: Write a program to find the largest of three numbers using nested if-else statements

let num_1 = 4000
let num_2 = 2000
let num_3 = 3000

if (num_1 > num_2){
  if (num_1 > num_3){
    console.log(`num_1 i,e. ${num_1} is the largest of the three numbers`)
  } else {
    console.log(`num_3 i,e. ${num_3} is the largest of the three numbers`)
  }
} else if (num_2 > num_3) {
    console.log(`num_2 i,e. ${num_2} is the largest of the three numbers`)
} else {
  console.log(`num_3 i,e. ${num_3} is the largest of the three numbers`)
}