// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

let two_parameters = function (para_1, para_2 = 1) {
  return para_1 * para_2;
};

let result_1 = two_parameters(20, 30);

console.log(result_1);

let result_2 = two_parameters(100);

console.log(result_2);
