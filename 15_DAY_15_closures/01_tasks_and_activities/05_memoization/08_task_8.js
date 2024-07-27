// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function memoization (func){
  let cache = {}
  return function(num){
    let key = String(num)
    if(key in cache){
      console.log("from cache")
      return cache[key]
    } else {
      let result = func(num)
      cache[key] = result
      return result
    }
  }
}


function factorial (num){
  let store =1 
  for (i=num;i>=1;i=i-2){
    store = store*i*(i-1)
  }
  return store
}

let memoize_fact = memoization(factorial)

console.log(memoize_fact(10))
console.log(memoize_fact(10))
console.log(memoize_fact(30))
console.log(memoize_fact(30))






