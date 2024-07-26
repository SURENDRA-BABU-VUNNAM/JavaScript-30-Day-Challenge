// Task 2: Add a method to the Person class that updates the age property and logs the updated age.


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
console.log(person_1)