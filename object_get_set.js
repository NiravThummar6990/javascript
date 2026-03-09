const User = {
  _email: "a@gmail.co",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

// const chai = new User("h@gmail.com", 122);
const chai = Object.create(User);
console.log(chai.email);
