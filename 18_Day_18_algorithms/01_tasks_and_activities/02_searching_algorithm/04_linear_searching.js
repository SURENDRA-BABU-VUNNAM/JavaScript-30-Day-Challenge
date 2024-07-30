// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

let linear_search = function(array , target){
  for (let i = 0; i < array.length; i++){
    if (array[i] === target){
      return i
    }
  }
  return `element not found`
}

let arr = [20, 20, -2, 4, -6] 

console.log(linear_search(arr, -6))