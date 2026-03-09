const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(typeof balance.toString());

console.log(balance.toFixed(2));

const otherNumber = 23.45673;

console.log(otherNumber.toPrecision(2));

const hundreds = 10000000;
console.log(hundreds.toLocaleString());

//*****************************************      Maths    *********************************************** */

console.log(Math);

// - ne + ma convert kare
console.log(Math.abs(-4));

// round figar kare
console.log(Math.round(4.2));
console.log(Math.ceil(4.2)); // top value ley aam 5
console.log(Math.floor(4.2)); // low value ley aama 4

// min  / max value
let arrayyy = [1, 2, 3, 4, 5, 0, 6, 7, 8];
console.log(Math.min(arrayyy));
console.log(Math.max(4, 2, 5, 9, 2, 1));

// random value leva mate 0 and 1 ni vachhe j aave che

console.log(Math.random());
console.log(Math.random() * 100);
console.log(Math.random() * 100 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
