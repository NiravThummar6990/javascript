const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// ***********   concat and spread method are same work     ************

// let allheros=marvel_heros.concat(dc_heros)
// console.log(allheros);

let all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

// **********    flat   =[ Array ni andar aaray hoy anene badhane aek array ni andar karvu]

const another_array = [
  1,
  2,
  3,
  4,
  [5, 6],
  7,
  [8, 9, [0, 9, 8, [7, 6]]],
  5,
  4,
  3,
  2,
  1,
];

const real_anotherarray = another_array.flat(Infinity);
console.log(real_anotherarray);

// Array che ke nai

console.log(Array.isArray("nirav"));

// Array ma convert kare one one latter thi

console.log(Array.from("nirav"));

console.log(Array.from({ name: "nirav" })); // interesting

// *************   " of " method    {" variable ne joint kari ne array banavo hoy tyare  "}

let r1 = "hello";
let r2 = "Nirav";
let r3 = "Thummar";

console.log(Array.of(r1, r2, r3));
