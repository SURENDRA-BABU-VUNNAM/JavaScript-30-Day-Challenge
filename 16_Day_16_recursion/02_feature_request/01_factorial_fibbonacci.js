// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.


function factorial(n){
  if(n===0) {
    return 1
  } else {
    return n * factorial(n-1)
  }
}

console.log(factorial(10))


function fibb(num, memo = {}){
  if (num <=0){
    return 0
  } else if (num===1) {
    return 1
  } else if (memo[num]) {
    return memo[num]
  } else {
    let result= fibb(num-1,memo) + fibb(num-2,memo)
    memo[`${num}`] = result
    return result
  }
}

console.log(fibb(50)) 