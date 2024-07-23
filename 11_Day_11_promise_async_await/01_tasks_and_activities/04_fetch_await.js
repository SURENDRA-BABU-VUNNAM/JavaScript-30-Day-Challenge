// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch("https://api.github.com/users/hiteshchoudhary")
.then(function(response){
  return response.json()
})
.then(function(data){
  console.log(data)
})
.catch(function(error){
  console.log(error)
})

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function get_user (){
  let user = await fetch("https://api.github.com/users/hiteshchoudhary")
  let data = await user.json()
  console.log(data)
}

get_user() 