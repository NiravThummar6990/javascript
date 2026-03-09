function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// prototype  { /* aec object bija object ni property and method use kari sake che */ }
//  parent-object .  prototype . new-object = function(){}

createUser.prototype.hello = function () {
  score++;
};
createUser.prototype.p = function () {
  console.log(`score is ${this.score}`);
};
const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);
chai.p();
