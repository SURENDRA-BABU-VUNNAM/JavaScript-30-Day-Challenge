//Task 6:Try reassigning a variable declared with const and observe the error.

const a = 10;
console.log(a) // output: 10
// const a = 20;
// console.log(a) // output: SytaxError: Identifier 'a' has already been declared
a = 20;
console.log(a) // output: TypeError: Assignment to constant variable. 
