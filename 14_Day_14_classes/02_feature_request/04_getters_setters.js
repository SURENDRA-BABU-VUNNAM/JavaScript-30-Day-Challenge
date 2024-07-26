//  Create a script that uses getters and setters in a class.


class person {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }
  get full_name() {
    return `your full name is ${this.first_name} ${this.last_name}`;
  }

  get first_name() {
    return this._first_name;
  }
  set first_name(value) {
    this._first_name = value;
  }
  get last_name() {
    return this._last_name;
  }
  set last_name(value) {
    this._last_name = value;
  }
}

let person_1 = new person('surendra', 'bittu');

console.log(person_1.full_name);

person_1.first_name = 'badshah';

console.log(person_1.full_name)