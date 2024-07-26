// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class person {
  constructor (name,age){
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `hello ${this.name} and your age is ${this.age}`
  }
  update_age (new_age){
    return this.age = new_age;
  }
}

const person_1 = new person('bittu',25)

console.log(person_1.greeting())



console.log(person_1.update_age(26))