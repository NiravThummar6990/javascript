 for (let i =1; i<=5; i++)
 {
    let row="";
    for(let j=1;j<=i;j++)
    {
        row+="*";
    }
    console.log(row);
 }

 // for of 

//  ["","",""]
//  [{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);
    
}

// string 
const greeting = "hello words"
for(const str of greeting){
    // console.log(str);
}

// maps
const map = new Map();

map.set("in","india")
map.set("fr","france")
map.set("am","america")

console.log(map)

for(const [key,value] of map){
    console.log(key,':-',value)
}

const myObject = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    ap:"apple"
}

for(const game in myObject){
    console.log(`${game} shortcue ${myObject[game]}`)
}