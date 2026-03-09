const arr= ["aa","ab","ac","ad","ae"]

arr.forEach(function abcd(key){
    console.log(key);
    
})

arr.forEach((keys,index,we)=>{
    console.log(keys,index, we)

})


const myCoding=[
    {
        languagename:"javascript",
        langfilename:"js"
    },
    {
        languagename:"java",
        langfilename:"j"
    },
    {
        languagename:"python",
        langfilename:"py"
    }
]

myCoding.forEach((item)=>{
 console.log(item.languagename)
})