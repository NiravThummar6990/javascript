let myNmae = "nirav      ";

console.log(myNmae.truelength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammar",
  spiderman: "sling",

  getSiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.nirav = function () {
  console.log(`hitesh is present in all objects`);
};
// heroPower.nirav();

Array.prototype.heyHitesh = function () {
  console.log(`hitesh says hello`);
};

myHeros.nirav();``
myHeros.heyHitesh();
// heroPower.heyHitesh();

const User = {
  nme: "chai",
  email: "chai@gamil.com",
};

const Teacher = {
  mackVideo: true,
};

const TeachingSupper = {
  isAvailabel: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fillTime: true,
  __proto__: TeachingSupper,
};

Teacher.__proto__ = User;

// morden syntax

Object.setPrototypeOf(TeachingSupper, Teacher);

let anotherUsername = "chaiaurcode       ";

String.prototype.truelength = function () {
  console.log(`${this}`);
  //   console.log(`${this.name}`);
  console.log(`True length is :${this.trim().length}`);
};

anotherUsername.truelength();
"nirav".truelength();
"icetea".truelength();
