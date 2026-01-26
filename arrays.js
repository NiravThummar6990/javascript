// Arrays

const myArr = [0,1,2,3,4,5]
const myHeros = ["Nirav","Thummar"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[5]);

// Arrays Method

myArr.push("nirav");
console.log(myArr);

myArr.push(6);
console.log(myArr);

myArr.pop()

// myArr.unshift(9)   // array ni aagal vslue add kare
// console.log(myArr);


// myArr.shift();    // array ni aagal ni je value ddd kare che aene dilit kare che
console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

console.log(myArr);

const newArray = myArr.join()

console.log(typeof newArray);


console.log("**********************************************************************");

//   Slice , splice

const myn1=[0,1,2,3,4,5,6]
console.log(myn1);

console.log(myn1.slice(1,3));
console.log(myn1);


const myn2 = [0,1,2,3,4,5,6,7]
    console.log(myn2.splice(1,3));
    console.log(myn2);
    
    