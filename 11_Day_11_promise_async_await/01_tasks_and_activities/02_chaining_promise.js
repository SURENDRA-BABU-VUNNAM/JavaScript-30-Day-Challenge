// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

new Promise(function(resolve,reject){
  let err = true
  setTimeout(function(){
    if(err){
      resolve("the first promise resolved")
    } else{
      reject("the first promise rejected")
    }
  },1000)
})
.then(function(response){
  console.log(response)
  return new Promise (function(resolve,reject){
    let err = true
    setTimeout(function(){
      if(err){
        resolve("the second promise resolved")
      } else{
        reject("the second promise rejected")
      }
    },2000)
  })
}).then(function(response){
  console.log(response)
  return new Promise(function(resolve,reject){
    let err = false
    setTimeout(function(){
      if(err){
        resolve("the third promise resolved")
      } else{
        reject("the third promise rejected")
      }
    },500)
  })
}).then(function(response){
  console.log(response)
}).catch(function(error){
  console.log(error)
})

