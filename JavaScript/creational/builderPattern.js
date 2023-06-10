// Design Patterns
// Builder Pattern

// class can be huge
// and when creating an instance, empty fields will have to be written undefined/null
// Builder Pattern saves the programmer from this problem

// class User {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }
// }
// // undefined by default
// let userOne = new User();
// console.log(userOne);

// !
// builder pattern
class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setEmail(email) {
    this.user.email = email;
    return this;
  }
  // build method
  build() {
    return this.user;
  }
}
// Next comes the method call in the chain
const builder = new UserBuilder("Rhonda").setAge(21).build();
console.log(builder);

// optional:
// literal object in constructor by default empty {}
// {age, color} - it could also have default parameters!
class Cat {
  constructor(name, { age, color } = {}) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}

const firstCat = new Cat("Барсик", { age: 5, color: "black" });
console.log(firstCat);
