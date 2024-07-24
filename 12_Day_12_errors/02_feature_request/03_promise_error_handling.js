// Write a script that handles errors in promises using .catch() and try-catch within async functions.

let promise_dot_catch_async = new Promise(function(resolve,reject){
  let er = Math.random() < 0.5
    setTimeout(function(){
      if (er){
        resolve("this is resolved")
      } else {
        reject("this is rejected")
      }
    },2000)
})

promise_dot_catch_async.then(function(response){
  console.log(response)
}).catch(function(error){
  console.log(`the error is : ${error}`)
})

async function promise_async (){
  try{
    let result = await promise_dot_catch_async
    console.log(result)
  }catch(error){
    console.log(`the rejected request original is "${error}"`)
  }
}

promise_async()