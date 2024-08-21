class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age
    }
    greet() {
        console.log(`the my name is ${this.name} and age is ${this.age}`);
    }
  }

class Students extends Person {
    constructor(name, age,major) {
        super(name, age)
        this.major = major
    }
    study() {
        console.log(`I am studying ${this.major}`);
    }
}


let person_1 = new Students("raj", 27, "physics")

person_1.study()
person_1.greet()

