// Task 3 :  Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

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

let arr = [8, 20, -2, 4, -6]
console.log(sort(arr))
