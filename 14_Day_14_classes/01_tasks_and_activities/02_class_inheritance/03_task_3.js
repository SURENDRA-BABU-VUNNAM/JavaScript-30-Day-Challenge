// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

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
}

const student_1 = new student('bittu',25,121)

console.log(student_1.student_id())

