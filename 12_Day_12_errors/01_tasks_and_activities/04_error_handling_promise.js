// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

let error_promise = new Promise(function(resolve,reject){
  let er =  Math.random() < 0.5; 
  if(er){
    resolve("this is the not error message")
  } else {
    reject("this is the error message")
  }
})

error_promise.then(function(message){
  console.log(message)
}).catch(function(message){
  console.log(message)
})

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

let error_promise_2 = new Promise(function(resolve,reject){
  setTimeout(function(){
    let er = Math.random()< 0.5
    if(er){
      resolve("it is resolved ")
    } else {
      reject("it is rejected")
    }
  })
})

async function er_promise_fun(){
  try{
    let res = await error_promise_2
    console.log(res)
  } catch (message){
    console.log(message)
  }
}

er_promise_fun()