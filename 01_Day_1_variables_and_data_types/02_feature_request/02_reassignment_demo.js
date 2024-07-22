//Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let app = "hello";
console.log(app) // output: hello
app = "bittu"
console.log(app) // output: bittu

const app_1 = "hello";
console.log(app_1)
app_1 = "bittu" 
console.log(app_1) // output :TypeError: Assignment to constant variable.