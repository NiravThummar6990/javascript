const arrays=[1,2,3,4,5,6,7,8,9,0,10]

const fl = arrays.filter((ays)=> (ays>5))
console.log(fl);


const students = [
    {
        name : "nirav",
        roll: 1,
        div : "b"
    },
    {
        name : "mahavir",
        roll : 2,
        div : "b"
    },
    {
        name : "hevin",
        roll : 3,
        div : "a"
    },
    {
        name : "madhav",
        roll : 4,
        div : "b"
    },
]

let attend = students.filter( (person) => person.div==="b" && person.roll===1)
console.log(attend)


const nums=[1,2,3,4,5,6]

const plus= nums.map( (num) => (num+10))
console.log(plus);


const total=nums.reduce((acc,current)=> {
   return acc + current
},0)

console.log(total);


const shoping=[
    {
        name:"js",
        price : 3999
    },
    {
        name:"as",
        price : 3999
    },
    {
        name:"py",
        price : 3999
    },
    {
        name:"html",
        price : 3999
    },
]

const cart = shoping.reduce((acct,current) => (acct+current.price),0)
console.log(cart);
