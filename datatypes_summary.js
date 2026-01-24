// primitive

// 7 types : String, Number , Boolean , null , undefined , symbol , BigInt


const score = 100;
const scorevalue = 100.3
const isLogdedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 122221211212121221212n



// Reference (Non-primitive)

// Array , Objects , Functions

const heros = ["shaktiman","nagraj","doga"]

let detains={
    name : "Nirav",
    age : 18,
}

const muFunction = function(){
    console.log("Hello World");
}

console.log(typeof muFunction);
