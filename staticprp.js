// const { use } = require("react");

class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username : ${this.username}`);
  }
  createId() {
    return `123`;
  }
}

const hitesh = new User("hitesh");
console.log(hitesh.createId());

class teacher extends User {
  constructor(user, email) {
    super(user);
    this.email = email;
  }
}

const iii = new teacher("nir", "w@gmail.com");
console.log(iii.createId());
