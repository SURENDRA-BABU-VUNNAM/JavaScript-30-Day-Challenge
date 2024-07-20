// Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

let prop_name = "name";
let prop_age = "age";
let C_P_N = {
  [prop_name]: "the_divine",
  [prop_age]: "don't_know",

  greet() {
    return `greetings ${this.name} and your age ${this.age}`;
  },
};

console.log(C_P_N);
console.log(C_P_N.name);
console.log(C_P_N.age);
console.log(C_P_N.greet());
