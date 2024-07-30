// : Create a script that rotates arrays and merges sorted arrays.

function rotate_array(arr, k) {

  for (let i = 0; i < k; i++) {
      const element = arr.shift(); 
      arr.push(element); 
  }

  console.log(arr); 
}

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