// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

let promise_one = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve("this is resolved")
    },2000)
})

async function promise_result() {
    let result = await promise_one
  console.log(result)
}

promise_result()

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

let promise_two = new Promise(function(resolve,reject){
  setInterval(function(){
    let error = true 
    if(error){
      reject("the request is rejected")
    } else {
      resolve("the request is resolved")
    }
  },2000)
})

async function promise_two_resolved (){
  try{
    let response = await promise_two 
    console.log(response)
  } catch (error){
    console.log(error)
  }
}

promise_two_resolved()