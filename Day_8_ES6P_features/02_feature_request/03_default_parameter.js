// Create a script that defines a function with default parameters and logs the results of calling it with different arguments.

let default_parameter = function (para_1 = 10, para_2 = 20) {
  return para_1 * para_2;
};

let result_1 = default_parameter(undefined, 20);
console.log(result_1);

let result_2 = default_parameter(30);

console.log(result_2);
