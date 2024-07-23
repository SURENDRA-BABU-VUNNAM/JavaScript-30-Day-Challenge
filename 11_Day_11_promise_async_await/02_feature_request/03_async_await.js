//  Write a script that uses async/await to handle promises and includes error handling with try-catch.


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