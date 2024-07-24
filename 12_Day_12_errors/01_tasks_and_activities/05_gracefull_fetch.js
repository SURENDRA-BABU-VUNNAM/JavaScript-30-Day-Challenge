// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

fetch("https://thisisnotavalidurl.com")
.then(function(response){
  response.json()
}).then(function(data){
  console.log(data)
}).catch(function(error){
  console.log(`the above url is broken or invalid "original error message ${error}"`)
})

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function invalid (){
try{
  let data = await fetch("https://thisisnotavalidurl.com")
  console.log(data)
} catch (error){
  console.log(`this is a broken link or invalid url "original Error ${error}"`)
}
}

invalid()