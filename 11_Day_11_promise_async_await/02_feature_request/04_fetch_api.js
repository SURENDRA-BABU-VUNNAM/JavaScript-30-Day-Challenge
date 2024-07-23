 // Create a script that fetches data from a public API using both promises and async/await, and logs the response data.


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


async function get_user (){
try {
  let user = await fetch("https://api.github.com/users/hiteshchoudhary")
  let data = await user.json()
  console.log(data)
}
}

get_user() 