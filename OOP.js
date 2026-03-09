// ##------  Object literel

const user = {
  username: "nirav",
  loginCount: 8,
  signedIn: true,

  getUserDatails: function () {
    console.log("Got user details from databasev");
    console.log(`Username : ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDatails());
// console.log(this);

// ----   Constructor

function User1(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this;
}

const userOne = new User1("hitesh", 2, true);
const usertwo = new User1("chaiorcode", 3, false);
console.log(userOne);
console.log(usertwo);
