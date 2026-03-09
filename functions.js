//   [1]

function mulTowNum(num1,num2){
    console.log(num1*num2);
}

mulTowNum(2,4)

//   [2]

function sum(n1,n2){
    return n1+n2;
}

let sumnumber = sum(12,11);

console.log(sumnumber);

//    [3]

function sub(n1,n2,n3){
    let sb=n1-n2-n3;
    return sb;
}
console.log(sub(12,2,3));

const subnum=sub(92,45,3);
console.log(subnum);


function username(name){
    if(name===undefined || name==="")
    {
     return "Please enter username :"
       
    }
    else{
        return `hello ${name} welcome to orse website`
    }
}


let rt =username("")

console.log(rt);

function cart(n1,n2,...n3){
    return n3 
}

console.log(cart(12,34,23,12,34,32,1,2,3))


const obj11={
    username: "nir",
    age :18
}

function dis(anyobject){
    return `username is ${anyobject.username} and his age is ${anyobject.age}`
}

console.log(dis({
    username : "nirav",
    age :17
}
));

const arr11=[11,12,13,14,15]

function dispaly(getarr){
    return getarr
    
}
console.log(dispaly(
    [
        12,23,34,45,56,7,
    ]
));


