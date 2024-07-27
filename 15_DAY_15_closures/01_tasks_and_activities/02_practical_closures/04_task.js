// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function capture (user_name){
  return function greet (){
    console.log(`hello ${user_name}`)
  }
}

let greet_user = capture('surendra')
greet_user()
