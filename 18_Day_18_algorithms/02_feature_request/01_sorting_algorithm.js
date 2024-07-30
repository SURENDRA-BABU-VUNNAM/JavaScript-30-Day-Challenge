// : Write a script that implements bubble sort, selection sort, and quicksort algorithms to sort arrays.

function bubble (arr){
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

let arr = [8, 20, -2, 4, -6]
console.log(bubble(arr))

function sort(arr) {
  let n = arr.length;

  for (i = 0; i < n - 1; i++) {
    let min_num = i;
    for (j = i+ 1; j < n; j++) {
      if (arr[j] < arr[min_num]) {
        min_num = j;
      }
    }
    if (min_num !== i) {
      let temp = arr[i];
      arr[i] = arr[min_num];
      arr[min_num] = temp
    }
  }
  return arr
}

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