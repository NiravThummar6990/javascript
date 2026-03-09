// const tinderUser = new Object();   // Singleton objects

const tinderUser = {}; // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUserm = {
  email: "hitesh123@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "patel",
    },
  },
};
// console.log(regularUserm.fullname.userfullname.lastname);

// be object ne joint karva mate use thay che {assign}

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = Object.assign({},obj1,obj2)

const obj4 = { ...obj1, ...obj2 };

console.log(obj4);

// databasee mathi value aave tyare aa rit ni hoy

const users = [
  {
    id: 1,
    email: "h@gmisil.com",
  },
  {
    id: 1,
    email: "h@gmisil.com",
  },
  {
    id: 1,
    email: "h@gmisil.com",
  },
];

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

function inform() {
  const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Nirav",
  };
  return course;
}

// course.courseInstructor

const { courseInstructor } = inform();

console.log(courseInstructor);
