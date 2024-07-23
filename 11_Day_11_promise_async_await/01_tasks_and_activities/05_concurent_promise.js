// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

let promise_1 =  Promise.resolve(1)
let promise_2 =  Promise.resolve(2)
let promise_3 =  Promise.resolve(3)

Promise.all([promise_1,promise_2,promise_3])
.then(function(values){
  console.log(values)
})

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

let promise_4 = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve("promise 4 is resolved")
  },3000)
})

let promise_5 = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve("promise 5 is resolved")
  },2000)
})

let promise_6 = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve("promise 6 is resolved")
  },4000)
})

Promise.race([promise_4,promise_5,promise_6])
.then(function(value){
  console.log(value)
})