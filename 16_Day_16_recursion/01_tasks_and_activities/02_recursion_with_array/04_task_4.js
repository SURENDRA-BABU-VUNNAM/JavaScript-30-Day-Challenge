// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

let array = [900,20,1111]

function largest (arr, max_num=arr[0]){
  if (arr.length === 1){
    return arr
  } else {
    max_num = Math.max (largest(arr.slice(1)), max_num)
    return max_num
  }
}

console.log(largest(...array))