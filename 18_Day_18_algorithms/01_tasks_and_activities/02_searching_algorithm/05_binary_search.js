// Task 5: Implement the binary search algorithm to find a target value in an array. Log the index of the target value.

let binary_search = function (arr, target) {
  let left = arr[0];
  let right = arr[arr.length - 1];
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (target === arr[middle]) {
      return `the index of ${target} is ${middle}`
    } else if (target < arr[middle]) {
      right = middle - 1;
    } else left = middle + 1;
  }
  return `element not present`;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binary_search(array, 10));