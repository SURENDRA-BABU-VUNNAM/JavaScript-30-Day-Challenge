// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

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