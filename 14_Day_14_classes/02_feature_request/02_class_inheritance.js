// Create a script that defines a Student class extending Person, overrides methods, and logs the results.


class person {
  constructor (name,age){
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `hello ${this.name} and your age is ${this.age}`
  }
}

class student extends person {
  constructor (name,age,studentId){
    super(name,age)
    this.studentId = studentId;
  }
  student_id(){
    return `your student id is ${this.studentId}`
  }
  greeting (){
    return `hello ${this.name} and your age is ${this.age} and your student id is ${this.studentId}`
  }
}

const student_1 = new student('bittu',25,121)

console.log(student_1.student_id())
console.log(student_1.greeting())
