const { getNameForPhonebook } = require("./context2");
class Person {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}
const madi = new Person("madi", "walmsley");
console.log(madi.getFullName());
console.log(madi);

// default context
console.log(getNameForPhonebook());

// explicit context... call apply bind gives it a context
console.log(getNameForPhonebook.call(madi));
console.log(getNameForPhonebook.apply(madi));
console.log(getNameForPhonebook.apply(madi, ["!!!!"]));
console.log(getNameForPhonebook.call(madi, "hi"));

madi.getNameForPhonebook = getNameForPhonebook;
const x = madi.getNameForPhonebook();
console.log(x);

// .prototype adds functionality to a class outside of a class...
Person.prototype.getNameForPhonebook = getNameForPhonebook;
console.log(new Person("test", "123").getNameForPhonebook());

Person.prototype.sayHello = function sayHello() {
  return "hello, " + this.firstName;
};

console.log(madi.sayHello());
