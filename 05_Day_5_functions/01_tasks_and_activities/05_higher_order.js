// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function inner (v){
   return `this is inner function ${v}`
}

function outer (inner, num){
  for(i=1;i<=num; i++){
    console.log(inner(i))
  }
}

outer(inner,10)

//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function square (num){
  return num*num
}

function cube (num){
  return num*num*num
}

function higher (sq,cu,value){
  let res = sq(value)+ value
  let final = cu(res)
  return final
}

console.log(higher(square,cube,2))