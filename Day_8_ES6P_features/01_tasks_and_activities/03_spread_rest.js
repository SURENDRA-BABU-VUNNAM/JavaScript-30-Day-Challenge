// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let array = ["name_1", "name_2", "name_3"];

let new_array = [...array, "name_4", "name_5"];

console.log(new_array);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

let sum = function (...numbers) {
  return numbers.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
};

let add_array = [10, 20, 30, 40];

let total = sum(...add_array);

console.log(total);
