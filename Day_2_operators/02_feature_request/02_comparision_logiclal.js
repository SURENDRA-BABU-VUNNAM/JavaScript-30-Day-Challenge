// Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

let num_1 = 197;
let num_2 = 199;

console.log(num_1 > num_2) // output: false
console.log(num_1 < num_2) // output: true

console.log(num_1 >= num_2) // output: false
console.log(num_1 <= num_2) // output: true

console.log(num_1 == num_2) // output: false
console.log(num_1 === num_2) // output: false

console.log(num_1 != num_2) // output: true

console.log(num_1 > num_2 && num_2 >= 18) // output: false
console.log(num_1 < num_2 || num_1 == num_2) // output: true

console.log(! (num_1 > num_2)) // output: true