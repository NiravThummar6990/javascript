const name = "Nirav"
const repoCount = 50

// console.log(name + repoCount + " value")

console.log(`Hello my name is ${name} and my repo count is $ {repoCount}`);


const gameName = new String('Nirav-th')

console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(2,5)
console.log(newString);


const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const n1="     hyyy       "
console.log(n1.trim());

const url = "https://nirav.com/nirav%20thummar"

url.replace('%20',"------")
console.log(url.replace('%20',"------"));

console.log(url.includes("200000"));


const spit = ("nirav-thummar-6990")
const otoSpit = spit.split('-')
console.log(otoSpit);
