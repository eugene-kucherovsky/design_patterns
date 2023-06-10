// Design Patterns
// Null Object Pattern


// idea behind null object pattern
// - to return default object without issue of get null values from non existing fields

// null Object
// for default case
class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }

  hasAccess() {
    return false;
  }
}
// null Object

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return (this.name = "Billie");
  }
}

const users = [new User(1, "Billie"), new User(2, "Samantha")];

function getUser(id) {
  let user = users.find((user) => user.id === id);
  if (user == null) {
    return new NullUser(); // if registered User do not exists, return NullUser
  } else {
    return user;
  }
}

function printUser(id) {
  const user = getUser(id);

  // null checks aint needed anymore
  // let name = "Guest";
  // if (user != null && user.name != null) name = user.name;
  // console.log("Hello, " + name);
  // if (user != null && user.hasAccess != null && user.hasAccess()) {
  //   console.log("You have access");
  // } else {
  //   console.log("You are not allowed here");
  // }

  console.log("Hello, " + user.name);
  if (user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}

printUser(1);
// Hello, Billie
// You have access

printUser();
// Hello, Guest
// You are not allowed here

// run typescript command ( + танцы с бубном )
// tsc nullObjectPattern.ts

// class User {
//   id: number;
//   name: string;
//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }

//   hasAccess() {
//     return (this.name = "Billie");
//   }
// }

// const users: User[] = [new User(1, "Billie"), new User(2, "Samantha")];

// function getUser(id: number) {
//   return users.find((user) => user.id === id);
// }

// function printUser(id: number) {
//   const user = getUser(id);

//   let name: string = "Guest";

//   if (user != null && user.name != null) name = user.name;

//   console.log("Hello " + name);

//   if (user != null && user.hasAccess != null && user.hasAccess()) {
//     console.log("You have access");
//   } else {
//     console.log("You are not allowed here");
//   }
// }
