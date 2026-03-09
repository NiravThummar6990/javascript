
// Name iife
(function chai(){
    console.log(`db connected two`);
})();

// simple iife
(  () => {
console.log(`db connected`)
})();

// parameter iife
( (name,age) => {
    console.log(`hello , ${name} and your age is ${age}`)
})("nirav",18)