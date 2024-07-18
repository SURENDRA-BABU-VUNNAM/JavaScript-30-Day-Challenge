// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

let array = [1, 2, 3, 4, 5];

let new_array = array.map(function (e) {
  return e * 2;
});

console.log(array);
console.log(new_array);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array

let array_2 = [3, 9, 8, 7, 6, 10];

let even_array = array_2.filter(function (e) {
  return e % 2 === 0;
});

console.log(even_array);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

let huge_array = [121, 12321, 1234321, 123454321];

let total = huge_array.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

console.log(total);
