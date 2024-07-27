// Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.


function outer(){
  let vari = 10
  return function inner (){
    console.log(vari)
  }
}
let inner_function = outer()
console.log(inner_function)
inner_function()