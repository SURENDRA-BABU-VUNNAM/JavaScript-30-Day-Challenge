 // Create a script that includes recursive functions to find the sum and maximum element of an array.


let array = [10,20,30,40,50,60,70,80]

function sum_recursion (arr){
  if (arr.length ===0){
    return 0
  } else {
    return arr[0] +sum_recursion(arr.slice(1))
  }

}
console.log(array)
console.log(sum_recursion(array))