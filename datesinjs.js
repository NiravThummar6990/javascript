let myDate=new Date();
console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);

// let myCreatedDate=new Date(2007 , 2 , 11)
// let myCreatedDate=new Date(2007 , 2 , 11,5 ,7)
// let myCreatedDate=new Date("2007-3-11")
let myCreatedDate=new Date("3-11-2007")

console.log(myCreatedDate.toLocaleString());


let myTimeStemp = Date.now()

console.log(myTimeStemp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let myNewDate = new Date();

// console.log(myNewDate.getDate());
// console.log(myNewDate.getDay());
// console.log(myNewDate.getMonth()+1);

myNewDate.toLocaleString('default',{
    weekday: "long"
})
console.log(myNewDate);

