// Task 7:Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.


function memoize(func){
  let cache = {}
  return function(...args){
    let keys = JSON.stringify(args)
    if(keys in cache){
      return cache[keys]
    } else {
      console.log("fresh result")
      let result = func(...args)
      cache[keys]= result
      console.log(cache)
      return result
    }
  }
}


let add = function(a,b){
  return a+b
}

let memoization_add = memoize(add)

console.log(memoization_add(20,30))