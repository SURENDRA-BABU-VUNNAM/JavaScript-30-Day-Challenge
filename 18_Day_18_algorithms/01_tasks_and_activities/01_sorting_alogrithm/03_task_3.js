// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function quick (arr){
  if (arr.length < 1){
    return arr
  }
  let pivot = arr[arr.length - 1]
  let left = []
  let right =[]
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot){
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }


  }
  return [...quick(left), pivot, ...quick(right)]
}
let arr = [8, 20, -2, 4, -6]

console.log(quick(arr))