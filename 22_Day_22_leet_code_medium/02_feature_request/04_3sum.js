// Create a script that includes a function to find all unique triplets in an array that sum to zero and logs the triplets.

function zero_sum_triplets(arr) {
  arr.sort((a, b) => a - b);
  let triplets = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        triplets.push([arr[i], arr[left], arr[right]]);
        while (left < right && arr[left] === arr[left + 1]) {
          left++;
        }
        while (right > left && arr[right] === arr[right - 1]) {
          right--;
        }
        left++;
        right++;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triplets;
}

const arr1 = [-1, 0, 1, 2, -1, -4];
console.log(zero_sum_triplets(arr1));
