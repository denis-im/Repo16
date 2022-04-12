
class Person {
  constructor(name, email, age) {
    this._name = name;
    this._email = email;
    this._age = age;
  }

  getPerson() {
    let personInfo = "Name: " + this._name + ", email: " + this._email + ", age: " + this._age; 
    return personInfo;
  }
}

// let p = new Person("Joe", "dd@dd", 23);
// console.log(p.getPerson());

module.exports = Person;
