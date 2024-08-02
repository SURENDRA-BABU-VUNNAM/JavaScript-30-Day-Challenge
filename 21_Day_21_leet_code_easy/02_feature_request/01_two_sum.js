//  Write a script that includes a function to solve the "Two Sum" problem and logs the indices of the two numbers.

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
