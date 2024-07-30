// Task 9:  Write a function to merge two sorted arrays into one sorted array. Log the merged array.

function bubble (arr_1,arr_2){
  let arr = arr_1.concat(arr_2)
  let swapped;
  do {
    swapped = false 
    for (let i = 0; i < arr.length - 1; i++){
      if (arr[i] > arr[i + 1]){
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

let array_1 = [8, 20, -2, 4, -6]
let array_2 = [11, 3, -9, 6, -5]

console.log(bubble(array_1,array_2))