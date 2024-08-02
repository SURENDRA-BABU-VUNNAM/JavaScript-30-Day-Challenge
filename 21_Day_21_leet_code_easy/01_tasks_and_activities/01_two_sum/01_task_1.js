// Task 1: Solve the "Two Sum" problem on LeetCode.

// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.

// Log the indices for a few test cases.

function two_sum(target, arr) {
  let pair_indices = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let check = arr[i] + arr[j];
      if (check === target) {
        pair_indices.push([i, j]);
      }
    }
    if (pair_indices.length === 0) {
      console.log("two sum indices not found");
    }
  }
  return pair_indices;
}

let array = [1, 2, 5, 10, 14, 13];
console.log(two_sum(15, array));
