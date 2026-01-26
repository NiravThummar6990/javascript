// Singleton

//  object literals


const mySym = Symbol("myKy")

const JsUser={
    name : "Nirav",
    age : 18,
    [mySym]: "mykey1",
    location : "Amreli",
    email : "nirav123@gmail.com",
    isLoggedIn : false,
    lastLogin : ["Monday","Saturday"]
}
console.log(JsUser["email"]);
console.log(JsUser[mySym]);
console.log(JsUser.email);
console.log(JsUser);

// JsUser.email = "hitesh@chatgpt"
// console.log(JsUser);

// *********     object value ne lock karva mate  

// Object.freeze(JsUser);


// JsUser.email = "hitesh@chatgpt"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting());

JsUser.greeting1 = function(){
    console.log(` Hello js user , ${this.name}`);   
}
console.log(JsUser.greeting1());
