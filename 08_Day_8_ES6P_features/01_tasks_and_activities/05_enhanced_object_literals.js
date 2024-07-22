// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const person_name = "bittu";
const age = "27";
const greet = function () {
  return `greetings ${this.person_name} and your age ${this.age}`;
};

let E_O_C = { person_name, age, greet };

console.log(E_O_C);
console.log(E_O_C.greet());

// Task 9: Create an object with computed property names based on variables and log the object to the console.

let prop_name = "name";
let prop_age = "age";
let C_P_N = {
  [prop_name]: "the_divine",
  [prop_age]: "don't_know",
};

console.log(C_P_N.name);
console.log(C_P_N.age);
