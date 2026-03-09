function setUsername(username) {
  //complex dbc calls
  this.username = username;
}

function createUser(user, email, password) {
  setUsername.call(this, user);

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "13");
console.log(chai);
