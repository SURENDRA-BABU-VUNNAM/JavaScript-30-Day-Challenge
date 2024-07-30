// : Create a script that implements linear search and binary search algorithms to find values in arrays.


let linear_search = function(array , target){
  for (let i = 0; i < array.length; i++){
    if (array[i] === target){
      return i
    }
  }
  return `element not found`
}


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