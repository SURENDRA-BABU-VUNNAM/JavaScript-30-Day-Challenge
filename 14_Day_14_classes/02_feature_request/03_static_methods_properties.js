// : Write a script that demonstrates static methods and properties in classes.

class student {
  static total_student = 0
  constructor(name) {
    this.name = name
    student.total_student++
  }
  static total_number () {
    console.log(`the static student is ${student.total_student}`)
  }
}

let student_1 = new student("surendra",25)
let student_2 = new student("bittu",28)

student.total_number()