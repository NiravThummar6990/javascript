const promiseOne = new Promise(function (resolv, reject) {
  // do an async task
  // database calls , cryptography , network

  setTimeout(function () {
    console.log("Async task is completed");
    resolv();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consume");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Rhis is async 3");
    resolve({ username: "chai", age: 15 });
  }, 1000);
});
PromiseThree.then(function (user) {
  console.log(user);
});

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("this is async four");
    let error = false;
    if (!error) {
      resolve({ username: "Nirav", age: 19 });
    } else {
      reject("ERROR : something went rong");
    }
  }, 1000);
});

promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("the promise is the ethr resolve or reject"));

const promidfive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "nirav", password: "123" });
    } else {
      reject("ERROR");
    }
  }, 1000);
});

const nirav = new Promise(function (resolve,reject){
  setTimeout(function(){
    
  })
})

async function consumePromiseFive() {
  try {
    const response = await promidfive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch(
      "https://api.github.com/users/NiravThummar6990",
    );
    // console.log(response);

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("ERROR : ", error);
  }
}

getAllUsers();


fetch("https://api.github.com/users/NiravThummar6990")
.then((response)=>{
  return response.json();
})
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
  console.log(error);
})