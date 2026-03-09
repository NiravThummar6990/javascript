const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(Math.PI);
console.log(descripter);

const chai = {
  name: "ginger chai",
  price: 120,
  isAvalilable: true,
  orderChai: function () {
    console.log("chai ai bani");
  },
};

// Object.defineProperty(chai, "name", { writable: false, enumerable: false });
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
  console.log(`${key} : ${value}`);
    }
}
