// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

class person {
  constructor(first_name,last_name) {
    this.first_name=first_name
    this.last_name=last_name
    this.full_name = this.first_name + " " + this.last_name
  }
  get full_name() {
    return this._full_name
  }
  set full_name(value){
    this._full_name = value
  }
}

const person_1 = new person('surendra','bittu')

console.log(person_1.full_name)