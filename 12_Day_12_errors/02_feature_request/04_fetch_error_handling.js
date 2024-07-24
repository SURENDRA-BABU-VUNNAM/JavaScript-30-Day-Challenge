//  Create a script that handles errors when using the fetch API to request data from invalid URLs.

fetch("https://thisisnotavalidurl.com")
.then(function(response){
  response.json()
}).then(function(data){
  console.log(data)
}).catch(function(error){
  console.log(`the above url is broken or invalid "original error message ${error}"`)
})